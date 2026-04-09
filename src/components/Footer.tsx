import type { Dictionary } from "@/app/dictionaries";

export default function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted md:flex-row">
        <p>
          © {year} Zhaoer. {dict.footer.rights}.
        </p>
        <p className="opacity-70">{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
