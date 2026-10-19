export type Projet = {
  slug: string;
  titre: string;
  contexte: string;
  annee: string;
  resume: string;
  description: string;
  fonctionnalites: string[];
  stack: { categorie: string; technos: string[] }[];
  apprentissages: { titre: string; texte: string }[];
  captures: string[]; // chemins dans /public, ex. "/projets/souk/accueil.png"
  diagrammes?: { src: string; titre: string }[];
  video?: string;
  liens: { label: string; url: string }[];
  note?: string;
  misEnAvant?: boolean;
};

export const projets: Projet[] = [
  {
    slug: "souk",
    titre: "Souk — Application mobile d'annonces",
    contexte: "Projet personnel",
    annee: "2026",
    misEnAvant: true,
    resume:
      "Une application iOS et Android pour publier et trouver des annonces près de chez soi, avec messagerie en temps réel entre acheteurs et vendeurs.",
    description:
      "Je voulais apprendre le développement mobile sur un projet concret, qui couvre ce qu'on attend d'une vraie application : comptes utilisateurs, photos, localisation, messagerie et notifications. Souk permet de publier une annonce avec photos, de la retrouver depuis la liste, de la mettre en favori et de contacter le vendeur directement dans l'application.",
    fonctionnalites: [
      "Inscription et connexion, avec le jeton de session stocké de façon sécurisée sur le téléphone",
      "Publication d'annonces avec photos, prises à l'appareil photo ou choisies dans la galerie",
      "Ville détectée automatiquement par géolocalisation",
      "Favoris conservés même après la fermeture de l'application",
      "Messagerie en temps réel entre acheteur et vendeur",
      "Notifications push à la réception d'un message",
      "Espace personnel : mes annonces, suppression réservée à leur auteur",
    ],
    stack: [
      { categorie: "Mobile", technos: ["React Native", "Expo", "TypeScript", "Expo Router", "Zustand", "TanStack Query"] },
      { categorie: "Backend", technos: ["NestJS", "TypeORM", "PostgreSQL", "Socket.IO", "JWT"] },
      { categorie: "Hébergement", technos: ["Render", "Neon", "Cloudinary", "EAS Build"] },
    ],
    apprentissages: [
      {
        titre: "Le téléphone ne voit pas localhost",
        texte:
          "En développement, l'application devait appeler l'adresse IP de mon PC sur le Wi-Fi, qui changeait d'un jour à l'autre. J'ai centralisé l'adresse de l'API dans une variable d'environnement.",
      },
      {
        titre: "Une photo choisie n'est qu'un chemin local",
        texte:
          "Au début, l'application enregistrait le chemin de la photo sur mon iPhone, invisible pour les autres utilisateurs. J'ai mis en place l'envoi du fichier au serveur.",
      },
      {
        titre: "Un serveur gratuit n'a pas de disque permanent",
        texte:
          "Une fois en ligne, les fichiers enregistrés sur le serveur disparaissaient à chaque redémarrage. J'ai déplacé le stockage des photos vers Cloudinary.",
      },
      {
        titre: "Le temps réel demande une autre logique que HTTP",
        texte:
          "Pour la messagerie, j'ai utilisé des WebSockets, avec une « room » par conversation et une vérification du jeton dès la connexion.",
      },
    ],
    captures: [], // ajoute ici tes captures, ex. "/projets/souk/accueil.png"
    video: undefined, // ex. "/projets/souk/demo.mp4"
    liens: [
      { label: "Code du frontend", url: "https://github.com/elfoual-zakaria/AppMobile" },
      { label: "Code du backend", url: "https://github.com/elfoual-zakaria/mobile-backend" },
      { label: "Télécharger l'APK", url: "https://expo.dev/accounts/zakariaelfoual/projects/souk/builds/3278c15a-54d9-41ac-bcf9-d4385c895651" },
    ],
  },
  {
    slug: "cih-reclamations",
    titre: "Réclamation Smart — Gestion des réclamations monétiques",
    contexte: "Projet de fin d'études — CIH Bank",
    annee: "2026",
    resume:
      "Plateforme web de traitement des réclamations monétiques, avec classification assistée par IA, circuit de validation entre agents et responsables, et contrôle d'accès dynamique.",
    description:
      "Réclamation Smart centralise les réclamations des clients (carte, e-commerce, e-banking, GAB) et organise leur traitement : classification assistée par un modèle d'IA, affectation à une équipe, résolution par un agent, puis validation par un responsable avant la clôture. La plateforme intègre aussi un module de demande de changement de plafond de carte, confirmé par un code OTP envoyé par SMS. J'ai travaillé en particulier sur la sécurité et la gestion des accès.",
    fonctionnalites: [
      "Gestion des utilisateurs, des équipes, des rôles et des permissions, attribuées dynamiquement par l'administrateur",
      "Authentification JWT et protection des routes selon les permissions (Spring Security)",
      "Création et suivi des réclamations par le client, avec historique des statuts",
      "Assistance IA à la saisie : titre, type, canal et priorité suggérés à partir de la description",
      "Suggestion d'affectation vers l'équipe ou l'agent compétent",
      "Circuit de traitement : résolution par l'agent, proposition de décision, validation par le responsable",
      "Demande de changement de plafond de carte, confirmée par un code OTP envoyé par SMS",
    ],
    stack: [
      { categorie: "Frontend", technos: ["Next.js", "React", "Tailwind CSS", "Axios"] },
      { categorie: "Backend", technos: ["Java 17", "Spring Boot", "Spring Data JPA", "Hibernate"] },
      { categorie: "Sécurité", technos: ["Spring Security", "JWT", "RBAC", "OTP"] },
      { categorie: "IA", technos: ["Python", "FastAPI", "Sentence Transformers"] },
      { categorie: "Données", technos: ["PostgreSQL", "H2 (tests)"] },
    ],
    apprentissages: [
      {
        titre: "Des permissions plutôt que des rôles figés",
        texte:
          "Au lieu de coder en dur ce que chaque rôle peut faire, les droits sont des permissions que l'administrateur attribue aux rôles. Ajouter un nouveau profil ne demande donc aucune modification du code, seulement une configuration.",
      },
      {
        titre: "L'IA suggère, l'humain décide",
        texte:
          "La classification et l'affectation proposées par le modèle restent des suggestions, enregistrées à part avec leur niveau de confiance. La décision finale revient toujours à un agent ou un responsable : dans une banque, une erreur automatique ne doit pas devenir une décision.",
      },
      {
        titre: "Garder l'historique plutôt que l'écraser",
        texte:
          "Une réclamation peut changer d'équipe ou d'agent plusieurs fois. Plutôt qu'un simple champ remplacé à chaque changement, chaque affectation est conservée dans sa propre table, ce qui permet de retracer tout le parcours du dossier.",
      },
      {
        titre: "Sécuriser un code à usage unique",
        texte:
          "Le code OTP n'est jamais stocké en clair : seul son hash est conservé, avec une durée de validité de cinq minutes et trois tentatives au maximum. Les mêmes principes que pour un mot de passe, appliqués à un code temporaire.",
      },
    ],
    captures: [],
    liens: [],
    note: "Projet interne à la banque : le code et les captures ne peuvent pas être partagés.",
    diagrammes: [
    { src: "/projets/cih/diagramme-classes.jpg", titre: "Diagramme de classes" },
    { src: "/projets/cih/diagramme-sequence.jpg", titre: "Diagramme de séquence" },
  ],
  },
  {
    slug: "lpee-acoustique",
    titre: "Application de calcul acoustique",
    contexte: "Projet en binôme — LPEE",
    annee: "2025",
    resume:
      "Application web métier pour modéliser des salles et des réseaux de ventilation, calculer leurs niveaux acoustiques et présenter les résultats sous forme de graphiques et de rapports.",
    description:
      "L'application permet aux équipes de gérer leurs affaires acoustiques de bout en bout : description des salles et de leurs sources sonores, modélisation du réseau de ventilation élément par élément, saisie des atténuations par bande de fréquence, puis calcul et visualisation des résultats. Elle remplace des calculs manuels par un outil structuré, avec des données centralisées et des rapports exportables.",
    fonctionnalites: [
      "Authentification et gestion des rôles (administrateur, technicien)",
      "Gestion des affaires, des salles et de leurs sources sonores",
      "Calcul automatique des paramètres d'une salle : volume, surfaces, absorption, constante de salle",
      "Modélisation du réseau de ventilation : tronçons, conduits, coudes, silencieux, grilles, plénums",
      "Saisie des atténuations et des corrections spectrales sur sept bandes de fréquence (63 Hz à 4 kHz)",
      "Calcul des niveaux acoustiques résultants (Lw, Lp, dBA) et comparaison aux courbes NR",
      "Visualisation des spectres sous forme de graphiques",
      "Export des résultats en PDF et Excel",
    ],
    stack: [
      { categorie: "Frontend", technos: ["React", "Chart.js", "Axios"] },
      { categorie: "Backend", technos: ["Node.js", "Express", "API REST"] },
      { categorie: "Données", technos: ["MySQL"] },
      { categorie: "Export", technos: ["html2pdf.js", "Excel"] },
    ],
    apprentissages: [
      {
        titre: "Comprendre un métier avant de coder",
        texte:
          "L'acoustique du bâtiment était un domaine nouveau pour moi. J'ai dû comprendre les notions de bandes de fréquence, d'atténuation et de niveaux de pression avant de pouvoir traduire les calculs des techniciens en fonctionnalités.",
      },
      {
        titre: "Modéliser des données fortement liées",
        texte:
          "Une affaire contient des salles, qui contiennent des sources, reliées à des tronçons composés d'éléments, chacun avec ses valeurs par fréquence. Concevoir ce modèle relationnel proprement, avec le MCD puis les tables MySQL, a été une étape clé du projet.",
      },
      {
        titre: "Une valeur nulle n'est pas une valeur vide",
        texte:
          "Dans les tableaux d'atténuation, une valeur de 0 disparaissait à l'affichage, comme si la case n'avait jamais été remplie. Pour un calcul acoustique, la différence compte : j'ai corrigé l'affichage pour conserver le 0.",
      },
      {
        titre: "Travailler en binôme",
        texte:
          "Développer à deux m'a appris à répartir le travail entre frontend et backend, à se mettre d'accord sur les échanges de l'API et à relire le code de l'autre.",
      },
    ],
    captures: [],
    note: "Projet interne à l'entreprise : le code et les captures ne peuvent pas être partagés.",
    diagrammes: [
    { src: "/projets/lpee/modele-donnees.jpg", titre: "Modèle de données" },
    { src: "/projets/lpee/diagramme-sequence.jpg", titre: "Diagramme de séquence" },
  ],
    liens: [
    ],
  },
  {
    slug: "detection-langage-haineux",
    titre: "Détection du discours haineux en ligne",
    contexte: "Projet de recherche — Master 1 Intelligence Artificielle",
    annee: "2023 – 2024",
    resume:
      "Étude de la détection automatique du discours haineux, en particulier ses formes implicites et subtiles, plus difficiles à repérer pour les modèles de traitement du langage.",
    description:
      "Les modèles de traitement du langage détectent assez bien le discours haineux explicite, mais beaucoup moins bien ses formes implicites (ironie, insinuation) ou subtiles (message haineux noyé dans une phrase anodine). À partir du jeu de données de référence ISHate, j'ai analysé la répartition des messages selon les groupes visés, évalué les performances de modèles pré-entraînés par type de message et par groupe, et testé des techniques d'augmentation de données pour améliorer la détection des cas implicites. Projet encadré par Elena Cabrio et Benjamin Ocampo.",
    fonctionnalites: [
      "Identification automatique du groupe visé par chaque message, grâce à l'extraction des sujets (spaCy) et au regroupement des synonymes (GloVe)",
      "Analyse de la répartition des messages haineux, explicites, implicites et subtils selon les groupes visés",
      "Évaluation de modèles pré-entraînés (Hugging Face) par type de message et par groupe : précision, rappel, F1",
      "Comparaison de dix méthodes d'augmentation de données et de leur effet sur la répartition des classes",
      "Rééquilibrage des classes par suréchantillonnage des messages implicites et création de nouveaux exemples par combinaison de textes",
    ],
    stack: [
      { categorie: "Langage", technos: ["Python", "pandas"] },
      { categorie: "NLP", technos: ["spaCy", "GloVe", "Hugging Face", "BERT", "HateBERT"] },
      { categorie: "Données", technos: ["ISHate"] },
    ],
    apprentissages: [
      {
        titre: "L'explicite est facile, l'implicite ne l'est pas",
        texte:
          "Sur les messages explicites, les modèles atteignaient un F1 d'environ 0,90 pour plusieurs groupes. Sur les messages implicites, le score chutait parfois sous 0,50 : comprendre l'ironie ou l'insinuation reste un vrai défi pour un modèle.",
      },
      {
        titre: "Une moyenne peut cacher des écarts",
        texte:
          "Évaluer les résultats groupe par groupe a révélé des différences importantes de performance selon la population visée, invisibles dans un score global. C'est indispensable pour juger si un modèle est fiable pour tout le monde.",
      },
      {
        titre: "Le déséquilibre des données pèse sur les résultats",
        texte:
          "Les messages implicites étaient très minoritaires dans les données. J'ai testé plusieurs façons de les rééquilibrer, et constaté que le choix de la méthode d'augmentation influence directement ce que le modèle apprend.",
      },
      {
        titre: "Préparer les données avant de modéliser",
        texte:
          "Une même cible pouvait être désignée par de nombreux mots différents. Normaliser ces termes avant l'analyse a été une étape clé pour obtenir des statistiques cohérentes.",
      },
    ],
    captures: [],
    liens: [{ label: "Lire le rapport (EN)", url: "/projets/nlp/rapport.pdf" }],
  },
  {
  slug: "pickomino",
  titre: "Pickomino — Jeu de dés en C",
  contexte: "Projet universitaire — Licence Informatique",
  annee: "2022",
  resume:
    "Adaptation en langage C du jeu de société Pickomino, jouable en console de 2 à 7 joueurs, avec un joueur contrôlé par l'ordinateur.",
  description:
    "Pickomino est un jeu de dés où chaque joueur tente de remporter des tuiles en atteignant un score suffisant, tout en prenant le risque de rater son tour. J'ai développé le jeu entièrement en C, dans le cadre du cours de Structure et Programmation C : modélisation des règles, gestion des tours, des piles de tuiles de chaque joueur et des erreurs de saisie. Projet encadré par Marie Pelleau.",
  fonctionnalites: [
    "Partie de 2 à 7 joueurs, avec un nombre de joueurs choisi au lancement",
    "Lancer des dés, choix des dés à conserver et décision de relancer ou d'arrêter",
    "Gestion complète des règles : tour raté, tuile remise sur la table, vol de la tuile d'un autre joueur",
    "Pile de tuiles propre à chaque joueur, dont seule la dernière est visible",
    "Joueur autonome contrôlé par l'ordinateur",
    "Contrôle des saisies : décision invalide ou dé déjà réservé",
  ],
  stack: [{ categorie: "Technologies", technos: ["C", "Structures de données", "Programmation impérative"] }],
  apprentissages: [
    {
      titre: "Traduire des règles en code",
      texte:
        "Un jeu de société paraît simple, mais ses règles cachent beaucoup de cas particuliers : tour raté, tuile à rendre, vol chez un adversaire. Les modéliser un par un m'a appris à découper un problème avant de coder.",
    },
    {
      titre: "Structurer ses données",
      texte:
        "J'ai organisé le jeu autour de quelques structures claires (tuile, dé, joueur, partie) et utilisé une pile pour les tuiles de chaque joueur, ce qui a rendu le reste du code beaucoup plus simple à écrire.",
    },
    {
      titre: "Ne jamais faire confiance à la saisie",
      texte:
        "Un joueur peut taper n'importe quoi. Vérifier chaque décision et chaque choix de dé, puis redemander proprement, a été indispensable pour que le jeu ne plante pas.",
    },
  ],
  captures: [],
  liens: [{ label: "Lire le rapport", url: "/projets/jeux/Pickomino.pdf" }],
},
];