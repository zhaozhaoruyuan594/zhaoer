import { getDictionary, hasLocale } from "../../dictionaries";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const PHOTO_DIR = path.join(process.cwd(), "public", "photos");
const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function listPhotos(): string[] {
  if (!fs.existsSync(PHOTO_DIR)) return [];
  return fs
    .readdirSync(PHOTO_DIR)
    .filter((f) => exts.has(path.extname(f).toLowerCase()))
    .sort();
}

export default async function GalleryPage({ params }: PageProps<"/[lang]/gallery">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const photos = listPhotos();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader title={dict.gallery.title} subtitle={dict.gallery.subtitle} />

      {photos.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-12 text-center">
          <p className="text-sm text-muted">{dict.gallery.empty}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((p) => (
            <div
              key={p}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <Image
                src={`/photos/${p}`}
                alt={p}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
