import { getDictionary, hasLocale } from "../../dictionaries";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeader title={dict.about.title} subtitle={dict.about.subtitle} />

      <div className="space-y-12">
        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">
            {dict.about.bioTitle}
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            {dict.about.bioContent}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan">
            {dict.about.skillsTitle}
          </h2>
          <div className="flex flex-wrap gap-2">
            {dict.about.skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-foreground/90"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan">
            {dict.about.interestsTitle}
          </h2>
          <div className="flex flex-wrap gap-2">
            {dict.about.interests.map((s) => (
              <span
                key={s}
                className="rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 text-sm text-amber"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
