import Link from "next/link";
import { getDictionary, hasLocale } from "../dictionaries";
import { notFound } from "next/navigation";
import ThreeHero from "@/components/ThreeHero";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-12 pb-24 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan">
            {dict.home.greeting}
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-amber via-pink to-violet bg-clip-text text-transparent">
              {dict.home.name}
            </span>
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/90 md:text-xl">
            {dict.home.tagline}
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {dict.home.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/about`}
              className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-background hover:bg-amber/90"
            >
              {dict.home.exploreBtn}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground hover:border-pink hover:text-pink"
            >
              {dict.home.contactBtn}
            </Link>
          </div>
        </div>

        <div className="float">
          <ThreeHero />
        </div>
      </div>
    </section>
  );
}
