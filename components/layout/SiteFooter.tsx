import Image from "next/image";
import Link from "next/link";

import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons/SocialIcons";
import { Wordmark } from "@/components/layout/Wordmark";
import { navigation, site } from "@/content/site";

const studioLinks = [
  ...navigation,
  { label: "Contact", href: "/contact" },
] as const;

const socialLinks = [
  {
    label: "Instagram",
    href: site.social.instagram,
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    Icon: MailIcon,
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line-soft bg-ivory">
      <div className="relative z-10 px-gutter pt-section-sm">
        <div className="mx-auto max-w-editorial">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.85fr)] lg:gap-16">
            <div>
              <Wordmark className="text-[28px] lg:text-[32px]" />
              <p className="mt-5 max-w-[28ch] font-sans text-small text-stone">
                Bespoke digital experiences for wedding photographers, event
                studios and creative brands.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2.5">
                {socialLinks.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={label}
                      className="inline-flex size-10 items-center justify-center rounded-xl border border-line bg-paper/70 text-ink transition-colors duration-(--duration-quick) hover:border-ink/25 hover:bg-shell"
                    >
                      <Icon className="size-4" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <p className="font-sans text-label font-medium uppercase tracking-[0.18em] text-ink">
                  Studio
                </p>
                <ul className="mt-5 space-y-2.5">
                  {studioLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="link-reveal font-sans text-small text-stone transition-colors duration-(--duration-quick) hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-sans text-label font-medium uppercase tracking-[0.18em] text-ink">
                  Connect
                </p>
                <ul className="mt-5 space-y-2.5">
                  <li>
                    <a
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-reveal font-sans text-small text-stone transition-colors duration-(--duration-quick) hover:text-ink"
                    >
                      {site.social.instagramHandle}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="link-reveal font-sans text-small text-stone transition-colors duration-(--duration-quick) hover:text-ink"
                    >
                      {site.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-reveal font-sans text-small text-stone transition-colors duration-(--duration-quick) hover:text-ink"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-sans text-label font-medium uppercase tracking-[0.18em] text-ink">
                  Studio note
                </p>
                <p className="mt-5 max-w-[24ch] font-sans text-small text-stone">
                  {site.location}
                </p>
                <p className="mt-4 flex max-w-[24ch] items-start gap-2.5 font-sans text-small text-stone">
                  <span
                    aria-hidden
                    className="mt-[0.55em] block size-1.5 shrink-0 rounded-full bg-sage"
                  />
                  {site.availability}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-line-soft" />

          <div className="relative flex min-h-[11rem] flex-col justify-end gap-3 pb-8 pt-8 sm:min-h-[14rem] sm:flex-row sm:items-end sm:justify-between lg:min-h-[18rem]">
            <p className="font-sans text-small text-stone">
              © {year} {site.name}. All rights reserved.
            </p>
            <p className="font-sans text-small text-stone">
              Designed &amp; built in-house by {site.founder}
            </p>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] sm:h-[60%] lg:h-[62%]"
      >
        <Image
          src="/images/editorial/footer-landscape.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/75 to-ivory/10" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/10 to-transparent" />
      </div>
    </footer>
  );
}
