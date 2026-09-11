"use client";

import {
  InstagramIcon,
  MailIcon,
  iconButtonClassName,
} from "@/components/icons/SocialIcons";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function HeaderSocialLinks({
  className,
  showThemeToggle = true,
}: {
  className?: string;
  showThemeToggle?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={iconButtonClassName()}
      >
        <InstagramIcon className="size-4" />
      </a>
      <a
        href={`mailto:${site.email}`}
        aria-label="Email"
        className={iconButtonClassName()}
      >
        <MailIcon className="size-4" />
      </a>
      {showThemeToggle ? <ThemeToggle /> : null}
    </div>
  );
}
