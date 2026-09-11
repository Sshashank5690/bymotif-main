"use client";

import {
  MoonIcon,
  SunIcon,
  iconButtonClassName,
} from "@/components/icons/SocialIcons";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
      aria-pressed={isDark}
      className={iconButtonClassName(className)}
    >
      <span className="relative size-4">
        <SunIcon
          className={cn(
            "absolute inset-0 size-4 transition-all duration-(--duration-soft) ease-editorial",
            isDark
              ? "scale-75 rotate-45 opacity-0"
              : "scale-100 rotate-0 opacity-100",
          )}
        />
        <MoonIcon
          className={cn(
            "absolute inset-0 size-4 transition-all duration-(--duration-soft) ease-editorial",
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-75 -rotate-45 opacity-0",
          )}
        />
      </span>
    </button>
  );
}
