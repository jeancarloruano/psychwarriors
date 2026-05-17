import { BASE_PATH } from "@/lib/basePath";

function imagePath(filename: string) {
  return `${BASE_PATH}/images/${filename}`;
}

export const images = {
  home: {
    relationships: imagePath("home-relationships.jpg"),
    careerAdvisement: imagePath("home-career-advisement.jpg"),
    collegeAdvisement: imagePath("home-college-advisement.jpg"),
    exploringBehaviorPatterns: imagePath("home-exploring-behavior-patterns.jpg"),
  },
  book: {
    hero: imagePath("book-book-a-session.jpg"),
  },
  contact: {
    hereForYou: imagePath("contact-im-here-for-you.jpg"),
  },
  learn: {
    whyTheName: imagePath("learn-why-the-name.jpg"),
    aboutMe: imagePath("learn-about-me.jpeg"),
    style: imagePath("learn-style.jpg"),
    beliefHumanBehavior: imagePath("learn-belief-human-behavior.jpg"),
    howWeChange: imagePath("learn-how-we-change.jpg"),
  },
  notFound: imagePath("not-found.jpg"),
} as const;

/** Shared aspect + cover classes for responsive section images */
export const sectionImageFrameClass =
  "relative aspect-[4/3] w-full overflow-hidden md:aspect-[3/2]";

/** Learn page: fixed aspect on mobile; match text column height on md+ */
export const learnSectionImageFrameClass =
  "relative w-full overflow-hidden aspect-[4/3] md:aspect-auto md:h-full md:min-h-0";

export const learnSectionArticleClass =
  "grid grid-cols-1 gap-0 overflow-hidden border border-charcoal/10 bg-white/40 shadow-sm backdrop-blur-sm md:grid-cols-2 md:items-stretch";

export const sectionImageSizes = "(max-width: 768px) 100vw, 50vw";

/** Fine-tune About Me portrait crop (horizontal vertical). Increase % to show more bottom. */
export const learnAboutMeObjectPosition = "center 68%";
