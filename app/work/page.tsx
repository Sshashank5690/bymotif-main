import type { Metadata } from "next";

import { ContactInvitation } from "@/components/home/ContactInvitation";
import { PageHeader } from "@/components/layout/PageHeader";
import { WorkIndex } from "@/components/work/WorkIndex";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { projects } from "@/content/projects";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("work");

export default function WorkPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ]}
      />
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
