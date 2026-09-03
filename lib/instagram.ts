import "server-only";

import { curatedInstagramPosts } from "@/content/instagram";
import type { InstagramPost } from "@/types";

/**
 * Instagram is a nice-to-have, never a dependency.
 *
 * Preferred path (Facebook Login + linked Page):
 *   INSTAGRAM_ACCESS_TOKEN = long-lived User or Page token
 *   optional INSTAGRAM_BUSINESS_ACCOUNT_ID = IG business account id
 *
 * Fallback path (Instagram Login token):
 *   graph.instagram.com/me/media
 *
 * Any failure falls back to the curated feed so the section always renders.
 */

const FACEBOOK_GRAPH = "https://graph.facebook.com/v21.0";
const INSTAGRAM_GRAPH = "https://graph.instagram.com";
const FIELDS = "id,caption,media_type,media_url,thumbnail_url,permalink";
const POST_COUNT = 6;
const REVALIDATE_SECONDS = 60 * 60 * 6;

type GraphMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
};

type PageAccount = {
  id: string;
  name?: string;
  access_token?: string;
  instagram_business_account?: { id: string };
};

/** Repeating rhythm for the editorial grid, independent of source aspect. */
const SHAPES: InstagramPost["shape"][] = [
  "wide",
  "portrait",
  "square",
  "square",
  "portrait",
  "square",
];

const SHAPE_DIMENSIONS: Record<
  InstagramPost["shape"],
  { width: number; height: number }
> = {
  wide: { width: 1600, height: 1000 },
  portrait: { width: 1200, height: 1600 },
  square: { width: 1200, height: 1200 },
};

function toPost(media: GraphMedia, index: number): InstagramPost | null {
  const src = media.media_url ?? media.thumbnail_url;
  if (!src) return null;

  const shape = SHAPES[index % SHAPES.length];
  const caption = media.caption?.trim() ?? "";

  return {
    id: media.id,
    shape,
    permalink: media.permalink,
    caption,
    image: {
      src,
      alt: caption
        ? caption.split("\n")[0].slice(0, 180)
        : "Recent post from the byMotif Studios Instagram",
      ...SHAPE_DIMENSIONS[shape],
    },
  };
}

function mapPosts(data: GraphMedia[] | undefined): InstagramPost[] {
  return (data ?? [])
    .map(toPost)
    .filter((post): post is InstagramPost => post !== null)
    .slice(0, POST_COUNT);
}

async function fetchMedia(
  endpoint: string,
  token: string,
): Promise<InstagramPost[] | null> {
  const url = new URL(endpoint);
  url.searchParams.set("fields", FIELDS);
  url.searchParams.set("limit", String(POST_COUNT * 2));
  url.searchParams.set("access_token", token);

  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS, tags: ["instagram"] },
  });

  if (!response.ok) return null;

  const payload = (await response.json()) as { data?: GraphMedia[] };
  const posts = mapPosts(payload.data);
  return posts.length > 0 ? posts : null;
}

async function resolveFacebookMedia(
  userToken: string,
): Promise<InstagramPost[] | null> {
  const configuredIgId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (configuredIgId) {
    return fetchMedia(`${FACEBOOK_GRAPH}/${configuredIgId}/media`, userToken);
  }

  const accountsUrl = new URL(`${FACEBOOK_GRAPH}/me/accounts`);
  accountsUrl.searchParams.set(
    "fields",
    "id,name,access_token,instagram_business_account",
  );
  accountsUrl.searchParams.set("access_token", userToken);

  const accountsResponse = await fetch(accountsUrl, {
    next: { revalidate: REVALIDATE_SECONDS, tags: ["instagram"] },
  });

  if (!accountsResponse.ok) return null;

  const accountsPayload = (await accountsResponse.json()) as {
    data?: PageAccount[];
  };

  const page = (accountsPayload.data ?? []).find(
    (entry) => entry.instagram_business_account?.id && entry.access_token,
  );

  if (!page?.instagram_business_account?.id || !page.access_token) {
    return null;
  }

  return fetchMedia(
    `${FACEBOOK_GRAPH}/${page.instagram_business_account.id}/media`,
    page.access_token,
  );
}

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return curatedInstagramPosts;

  try {
    const fromFacebook = await resolveFacebookMedia(token);
    if (fromFacebook && fromFacebook.length > 0) {
      return fromFacebook.slice(0, POST_COUNT);
    }

    const fromInstagram = await fetchMedia(
      `${INSTAGRAM_GRAPH}/me/media`,
      token,
    );
    if (fromInstagram && fromInstagram.length > 0) {
      return fromInstagram.slice(0, POST_COUNT);
    }

    return curatedInstagramPosts;
  } catch {
    return curatedInstagramPosts;
  }
}
