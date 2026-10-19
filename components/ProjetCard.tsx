import Image from "next/image";
import Link from "next/link";
import type { Projet } from "@/data/projets";

export default function ProjetCard({ projet }: { projet: Projet }) {
  const technos = projet.stack.flatMap((s) => s.technos).slice(0, 6);

  return (
    <Link
      href={`/projets/${projet.slug}`}
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg md:flex-row ${
        projet.misEnAvant ? "border-blue-200 shadow-sm" : "border-slate-200"
      }`}
    >
      {projet.captures[0] && (
        <div className="relative h-56 shrink-0 bg-slate-100 md:h-auto md:w-56">
          <Image src={projet.captures[0]} alt={projet.titre} fill className="object-contain p-4" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        {projet.misEnAvant && (
          <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Projet phare
          </span>
        )}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700">{projet.titre}</h3>
        <p className="text-sm text-slate-500">
          {projet.contexte} · {projet.annee}
        </p>
        <p className="text-slate-600">{projet.resume}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {technos.map((t) => (
            <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
              {t}
            </span>
          ))}
        </div>
        <span className="pt-2 text-sm font-semibold text-blue-700">Voir le projet →</span>
      </div>
    </Link>
  );
}