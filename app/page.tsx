import type { Metadata } from "next";

import { Capabilities } from "@/components/home/Capabilities";
import { ContactInvitation } from "@/components/home/ContactInvitation";
import { Hero } from "@/components/home/Hero";
import { InstagramSection } from "@/components/home/InstagramSection";
import { PositioningStatement } from "@/components/home/PositioningStatement";
import { SelectedWork } from "@/components/home/SelectedWork";
import { StudioNote } from "@/components/home/StudioNote";
import { WeddingStatement } from "@/components/home/WeddingStatement";
import { FaqSchema } from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("home");

export default function HomePage() {
  return (
    <>
      <Hero />
      <PositioningStatement />
      <SelectedWork />
      <WeddingStatement />
      <Capabilities />
      <StudioNote />
      <InstagramSection />
      <ContactInvitation />
      <FaqSchema />
    </>
  );
}
