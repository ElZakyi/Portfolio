import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projets } from "@/data/projets";

export const instant = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const projet = projets.find((p) => p.slug === slug);
  return { title: projet ? `${projet.titre} — Zakaria Elfoual` : "Projet introuvable" };
}

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-slate-900">
        <span className="h-6 w-1 rounded-full bg-blue-600" />
        {titre}
      </h2>
      {children}
    </section>
  );
}

export default async function ProjetPage({ params }: Props) {
  const { slug } = await params;
  const projet = projets.find((p) => p.slug === slug);
  if (!projet) notFound();

  const diagrammes = projet.diagrammes ?? [];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <header className="border-b border-slate-800 bg-slate-900">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-bold text-white">Zakaria Elfoual</Link>
          <Link href="/#projets" className="text-sm text-slate-300 hover:text-white">
            ← Tous les projets
          </Link>
        </nav>
      </header>

      {/* Bandeau du projet */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 pb-14 pt-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-400">
            {projet.contexte} · {projet.annee}
          </p>
          <h1 className="text-3xl font-extrabold md:text-4xl">{projet.titre}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">{projet.resume}</p>

          {projet.liens.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {projet.liens.map((l, i) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  className={
                    i === 0
                      ? "rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                      : "rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white hover:border-blue-400"
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contenu */}
      <main className="mx-auto -mt-6 flex max-w-5xl flex-col gap-6 px-4 pb-16">
        <Bloc titre="Le projet">
          <p className="leading-relaxed text-slate-600">{projet.description}</p>
          {projet.note && (
            <p className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
              {projet.note}
            </p>
          )}
        </Bloc>

        {projet.fonctionnalites.length > 0 && (
          <Bloc titre="Fonctionnalités">
            <ul className="grid gap-3 md:grid-cols-2">
              {projet.fonctionnalites.map((f) => (
                <li key={f} className="flex gap-3 text-slate-600">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Bloc>
        )}
        
        {diagrammes.length > 0 && (
          <Bloc titre="Conception">
            <p className="mb-6 rounded-lg bg-slate-100 px-4 py-3 text-sm text-slate-600">
              Contenu masqué pour raison de confidentialité.
            </p>
            <div className={`grid gap-6 ${diagrammes.length > 1 ? "md:grid-cols-2" : ""}`}>
              {diagrammes.map((d) => (
                <figure key={d.src} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                  <div className="relative h-80">
                    <Image src={d.src} alt={d.titre} fill className="object-contain p-2" />
                  </div>
                  <figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                    {d.titre}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Bloc>
        )}

        {projet.video && (
          <Bloc titre="Démonstration">
            <video
              src={projet.video}
              controls
              className="mx-auto max-h-[600px] rounded-xl border border-slate-200"
            />
          </Bloc>
        )}

        {projet.captures.length > 0 && (
          <Bloc titre="Captures d'écran">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {projet.captures.map((src) => (
                <div
                  key={src}
                  className="relative h-[480px] w-[230px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
                >
                  <Image src={src} alt={projet.titre} fill className="object-contain" />
                </div>
              ))}
            </div>
          </Bloc>
        )}


        <Bloc titre="Stack technique">
          <div className="space-y-4">
            {projet.stack.map((s) => (
              <div key={s.categorie} className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
                <span className="w-32 shrink-0 text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {s.categorie}
                </span>
                <div className="flex flex-wrap gap-2">
                  {s.technos.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Bloc>

        {projet.apprentissages.length > 0 && (
          <Bloc titre="Ce que j'ai appris">
            <div className="grid gap-4 md:grid-cols-2">
              {projet.apprentissages.map((a, i) => (
                <div key={a.titre} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="mb-2 text-sm font-bold text-blue-700">0{i + 1}</p>
                  <h3 className="mb-2 font-semibold text-slate-900">{a.titre}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{a.texte}</p>
                </div>
              ))}
            </div>
          </Bloc>
        )}

        <div className="pt-4 text-center">
          <Link
            href="/#projets"
            className="inline-block rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
          >
            ← Retour aux projets
          </Link>
        </div>
      </main>

      <footer className="bg-slate-950 py-6 text-center text-sm text-slate-500">
        © 2026 Zakaria Elfoual
      </footer>
    </div>
  );
}