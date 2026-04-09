import Link from "next/link";
import LangSwitcher from "./LangSwitcher";
import type { Dictionary, Locale } from "@/app/dictionaries";

export default function Navbar({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const items = [
    { key: "home", href: `/${lang}` },
    { key: "about", href: `/${lang}/about` },
    { key: "career", href: `/${lang}/career` },
    { key: "journey", href: `/${lang}/journey` },
    { key: "gallery", href: `/${lang}/gallery` },
    { key: "contact", href: `/${lang}/contact` },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={`/${lang}`}
          className="text-lg font-bold tracking-tight text-foreground"
        >
          <span className="text-amber">Z</span>haoer
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <Link
              key={it.key}
              href={it.href}
              className="rounded-full px-3 py-1.5 text-sm text-foreground/70 hover:bg-white/5 hover:text-foreground"
            >
              {dict.nav[it.key]}
            </Link>
          ))}
        </div>

        <LangSwitcher current={lang} />
      </nav>

      <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-6 pb-3 md:hidden">
        {items.map((it) => (
          <Link
            key={it.key}
            href={it.href}
            className="shrink-0 rounded-full px-3 py-1 text-xs text-foreground/70 hover:bg-white/5 hover:text-foreground"
          >
            {dict.nav[it.key]}
          </Link>
        ))}
      </div>
    </header>
  );
}
