"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/app/dictionaries";

export default function LangSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const stripped = pathname.replace(/^\/(zh|en)/, "") || "/";
  const otherLocale: Locale = current === "zh" ? "en" : "zh";
  const otherHref = `/${otherLocale}${stripped === "/" ? "" : stripped}`;
  const label = current === "zh" ? "EN" : "中";

  return (
    <Link
      href={otherHref}
      className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-foreground/80 hover:border-amber hover:text-amber"
    >
      {label}
    </Link>
  );
}
