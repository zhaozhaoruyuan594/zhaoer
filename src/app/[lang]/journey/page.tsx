import { getDictionary, hasLocale } from "../../dictionaries";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";

export default async function JourneyPage({ params }: PageProps<"/[lang]/journey">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeader title={dict.journey.title} subtitle={dict.journey.subtitle} />

      <div className="grid gap-6 md:grid-cols-2">
        {dict.journey.items.map((item, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet/40 hover:bg-white/[0.05]"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet/0 via-transparent to-pink/0 opacity-0 transition group-hover:opacity-100" />
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-violet">
              {item.date}
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
