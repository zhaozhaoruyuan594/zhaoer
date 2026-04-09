import { getDictionary, hasLocale } from "../../dictionaries";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";

export default async function CareerPage({ params }: PageProps<"/[lang]/career">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeader title={dict.career.title} subtitle={dict.career.subtitle} />

      <ol className="relative space-y-10 border-l border-white/10 pl-8">
        {dict.career.items.map((item, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-amber/40 bg-background">
              <span className="h-2 w-2 rounded-full bg-amber" />
            </span>
            <p className="mb-1 text-xs font-mono uppercase tracking-widest text-cyan">
              {item.period}
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              {item.role}{" "}
              <span className="text-foreground/50">· {item.company}</span>
            </h3>
            <p className="mt-2 text-base leading-relaxed text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
