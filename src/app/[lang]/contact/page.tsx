import { getDictionary, hasLocale } from "../../dictionaries";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const socials = [
    { name: "GitHub", href: "https://github.com/" },
    { name: "X / Twitter", href: "https://x.com/" },
    { name: "LinkedIn", href: "https://linkedin.com/" },
  ];

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeader title={dict.contact.title} subtitle={dict.contact.subtitle} />

      <div className="space-y-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan">
            {dict.contact.emailLabel}
          </p>
          <a
            href={`mailto:${dict.contact.email}`}
            className="text-2xl font-semibold text-amber hover:text-pink"
          >
            {dict.contact.email}
          </a>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">
            {dict.contact.socialTitle}
          </p>
          <div className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-foreground/90 hover:border-violet hover:text-violet"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <p className="border-t border-white/10 pt-6 text-sm text-muted">
          {dict.contact.footer}
        </p>
      </div>
    </section>
  );
}
