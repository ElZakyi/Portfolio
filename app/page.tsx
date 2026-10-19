import ProjetCard from "@/components/ProjetCard";
import { projets } from "@/data/projets";
import Image from "next/image";
const liens = {
  email: "mailto:zakariaelfoual0@gmail.com",
  github: "https://github.com/elfoual-zakaria",
  linkedin: "https://www.linkedin.com/in/zakaria-elfoual-ez2039/",
  cv: "/cv-zakaria-elfoual.pdf",
};

const competences = [
  {
    categorie: "Mobile",
    items: ["React Native", "Expo", "TypeScript", "Zustand", "TanStack Query"],
    styles: { bande: "bg-blue-600", titre: "text-blue-700", badge: "bg-blue-50 text-blue-800 border-blue-100" },
  },
  {
    categorie: "Backend",
    items: ["Node.js", "NestJS", "Spring Boot", "Java", "C", "C#"],
    styles: { bande: "bg-emerald-600", titre: "text-emerald-700", badge: "bg-emerald-50 text-emerald-800 border-emerald-100" },
  },
  {
    categorie: "Web",
    items: ["React", "Next.js", "Angular", "Tailwind CSS"],
    styles: { bande: "bg-indigo-600", titre: "text-indigo-700", badge: "bg-indigo-50 text-indigo-800 border-indigo-100" },
  },
  {
    categorie: "Bases de données",
    items: ["PostgreSQL", "MySQL", "Oracle"],
    styles: { bande: "bg-amber-500", titre: "text-amber-700", badge: "bg-amber-50 text-amber-800 border-amber-100" },
  },
  {
    categorie: "Outils",
    items: ["Git", "GitHub", "Docker", "Postman", "Selenium", "Junit"],
    styles: { bande: "bg-slate-600", titre: "text-slate-700", badge: "bg-slate-100 text-slate-800 border-slate-200" },
  },
  {
    categorie: "IA",
    items: ["NLP", "Analyse de données","Python"],
    styles: { bande: "bg-rose-600", titre: "text-rose-700", badge: "bg-rose-50 text-rose-800 border-rose-100" },
  },
];

type Formation = {
  periode: string;
  titre: string;
  ecole: string;
  detail: string;
  lien?: string;
};

const formation: Formation[] = [
  {
    periode: "2024 – 2026",
    titre: "Ingénieur d'État en Génie Logiciel",
    ecole: "ESTEM — Casablanca",
    detail: "Diplôme d'ingénieur en génie logiciel.",
    lien: "https://www.estem.ma",
  },
  {
    periode: "2023 – 2024",
    titre: "Master 1 en Intelligence Artificielle",
    ecole: "Université Côte d'Azur",
    detail: "Formation académique en intelligence artificielle.",
    lien: "https://univ-cotedazur.fr",
  },
  {
    periode: "2020 – 2023",
    titre: "Licence en Informatique",
    ecole: "Université Côte d'Azur",
    detail: "Fondamentaux de l'informatique, programmation et systèmes.",
    lien: "https://univ-cotedazur.fr",
  },
  {
    periode: "2018 – 2019",
    titre: "Baccalauréat Sciences Mathématiques",
    ecole: "Lycée Mohammed V",
    detail: "Mention Bien.",
  },
];

const sections = [
  { id: "projets", label: "Projets" },
  { id: "formation", label: "Formation" },
  { id: "competences", label: "Compétences" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <a href="#" className="font-bold text-white">Zakaria Elfoual</a>
          <div className="flex gap-3 text-xs text-slate-300 sm:gap-6 sm:text-sm">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-white">{s.label}</a>
            ))}
          </div>
        </nav>
      </header>

      {/* Accueil */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-4 py-16 md:flex-row md:py-24">
          <div className="flex-1">
            <p className="mb-3 font-semibold text-blue-400">Développeur Mobile & Full-Stack</p>
            <h1 className="text-4xl font-extrabold md:text-5xl">Zakaria Elfoual</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Ingénieur en génie logiciel, je développe des applications mobiles et web complètes, de
              l'interface jusqu'au serveur, et je les mène jusqu'à leur mise en ligne. Mon expérience en
              milieu bancaire m'a appris à accorder une attention particulière à la sécurité et à la
              fiabilité de ce que je livre.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={liens.cv} download className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
                Télécharger mon CV
              </a>
              <a href={liens.github} target="_blank" className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-white hover:border-blue-400">
                GitHub
              </a>
              <a href={liens.linkedin} target="_blank" className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-white hover:border-blue-400">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-4 border-blue-500 shadow-xl md:h-64 md:w-64">
            <Image src="/photo.png" alt="Zakaria Elfoual" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <main>
        {/* À propos */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">À propos</h2>
          <p className="max-w-3xl leading-relaxed text-slate-600">
            Je suis ingénieur d’État en génie logiciel, diplômé en 2026. Pendant mon projet de fin d’études chez CIH Bank, j’ai travaillé sur la sécurité d’une application bancaire : authentification, droits d’accès et traçabilité. Auparavant, j’avais développé en binôme pour le LPEE une application web de traitement et de visualisation de données acoustiques. Depuis la fin de mes études, je me suis formé au développement mobile en construisant Souk, une application complète de petites annonces, que j’ai conçue, développée et mise en ligne de bout en bout. J’ai aussi une formation en intelligence artificielle, avec plusieurs projets en traitement du langage, et j’ai été tuteur en informatique, ce qui m’a appris à expliquer clairement des notions techniques.
          </p>
        </section>

        {/* Projets : un par ligne */}
        <section id="projets" className="scroll-mt-16 bg-slate-50 py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">Projets</h2>
            <div className="flex flex-col gap-6">
              {projets.map((p) => (
                <ProjetCard key={p.slug} projet={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Formation */}
        <section id="formation" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">Formation</h2>
          <ol className="relative space-y-8 border-l-2 border-slate-200 pl-6">
            {formation.map((f) => (
              <li key={f.titre} className="relative">
                <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-blue-600" />
                <p className="text-sm font-medium text-slate-500">{f.periode}</p>
                <p className="mt-1 font-semibold text-slate-900">{f.titre}</p>
                {f.lien ? (
                  <a href={f.lien} target="_blank" className="text-blue-700 hover:underline">
                    {f.ecole} ↗
                  </a>
                ) : (
                  <p className="text-slate-700">{f.ecole}</p>
                )}
                <p className="mt-1 text-sm text-slate-600">{f.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Compétences */}
        <section id="competences" className="scroll-mt-16 bg-slate-50 py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">Compétences</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {competences.map((c) => (
                <div key={c.categorie} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className={`h-1.5 ${c.styles.bande}`} />
                  <div className="p-5">
                    <h3 className={`mb-4 text-lg font-bold ${c.styles.titre}`}>{c.categorie}</h3>
                    <div className="flex flex-wrap gap-2">
                      {c.items.map((item) => (
                        <span key={item} className={`rounded-md border px-2.5 py-1 text-sm font-medium ${c.styles.badge}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-4 text-2xl font-bold">Contact</h2>
            <p className="mb-6 text-slate-300">
              Actuellement à la recherche d’un poste de développeur mobile ou full-stack à Casablanca, je reste disponible pour tout échange ou entretien.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={liens.email} className="rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700">
                zakariaelfoual0@gmail.com
              </a>
              <a href={liens.linkedin} target="_blank" className="rounded-lg border border-slate-600 px-5 py-3 font-semibold hover:border-blue-400">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-6 text-center text-sm text-slate-500">
        © 2026 Zakaria Elfoual
      </footer>
    </>
  );
}