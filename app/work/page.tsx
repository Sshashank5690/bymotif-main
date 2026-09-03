import type { Metadata } from "next";

import { ContactInvitation } from "@/components/home/ContactInvitation";
import { PageHeader } from "@/components/layout/PageHeader";
import { WorkIndex } from "@/components/work/WorkIndex";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Websites designed and built by byMotif Studios for luxury wedding photographers, event designers and creative studios across India, Australia, the United Kingdom and the United States.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected work — byMotif Studios",
    description:
      "Websites designed and built for luxury wedding photographers, event designers and creative studios.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Selected work"
        title={
          <>
            Bespoke digital experiences for{" "}
            <em className="italic text-burgundy">
              creative brands.
            </em>
          </>
        }
        intro="Wedding photographers, event studios, floral designers, creative agencies. Each project built from its own brief."
      />

      <div className="mx-auto max-w-editorial px-gutter pb-section">
        <WorkIndex />
      </div>

      <ContactInvitation />
    </>
  );
}
