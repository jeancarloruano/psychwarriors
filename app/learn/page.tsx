import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import {
  images,
  learnSectionArticleClass,
  learnAboutMeObjectPosition,
  learnSectionImageFrameClass,
  sectionImageSizes,
} from "@/lib/images";
import { PageContainer } from "@/lib/layout";

const OBJECT_POSITION_PRESETS = {
  center: "object-center",
  bottom: "object-bottom",
  top: "object-top",
} as const;

function LearnSectionImage({
  src,
  alt,
  className = "",
  /** Preset (`center` | `bottom` | `top`) or any CSS value, e.g. `"center 65%"` */
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
}) {
  const presetClass =
    objectPosition in OBJECT_POSITION_PRESETS
      ? OBJECT_POSITION_PRESETS[
          objectPosition as keyof typeof OBJECT_POSITION_PRESETS
        ]
      : undefined;

  return (
    <div className={`${learnSectionImageFrameClass} ${className}`.trim()}>
      <div className="absolute inset-0">
        <ImageWithLoading
          src={src}
          alt={alt}
          fill
          className={presetClass ? `object-cover ${presetClass}` : "object-cover"}
          style={
            presetClass ? undefined : { objectPosition }
          }
          sizes={sectionImageSizes}
        />
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Style",
    content: [
      { text: "My style is genuine, authentic, challenging, supportive, non-judgmental and direct. " },
      { text: "One of my core beliefs is that: " },
      { text: "\"You have to fight your own demons before fighting anybody else's.\"", bold: true },
      { text: "\n\nI’ve been on a transformative journey for 10-plus years, beginning with the start of my master’s program in counseling. " },
      { text: "On this journey I had to challenge myself and sit with the growing pains of self-awareness. " },
      { text: "So if I ask you to do something in our session, chances are high that I had to battle it myself." }
    ],
    image: images.learn.style,
    imageAlt: "Counseling style and therapeutic approach",
    imageLeft: true,
  },
  {
    title: "Belief in Human Behavior",
    content: [
      { text: "The age-old question: nurture versus nature. The dichotomy of these battling concepts finds us again. " },
      { text: "My belief is that there is a higher power that has granted us the specific set of circumstances we encounter in this life. Do I know why? Quite frankly, that is outside my pay grade. " },
      { text: "\n\nBut then the question becomes: what do we do with it? The answer is " },
      { text: "choice", bold: true },
      { text: ". We have the " },
      { text: "power", bold: true },
      { text: " to make small or large decisions every day that help shape our character. The complexity of our behavior is rooted in the choices we make, guided by our belief system—what we consider moral, what our values are, how we treat others, and how we wish to be treated in return." }
    ],
    image: images.learn.beliefHumanBehavior,
    imageAlt: "Reflection on human behavior and personal choice",
    imageLeft: false,
  },
  {
    title: "How We Change Our Behaviors",
    content: [
      { text: "The question is: do we really want to change? There is something about your behavior pattern that has benefited you, and there is something in your actions that built the motivation to seek guidance from me. " },
      { text: "\n\nIn order to develop and change ourselves, it starts with " },
      { text: "self-awareness", bold: true },
      { text: ". Untangling the web of our nature and innate beliefs begins within. For example, if you are wondering why you push people away when they show you kindness, we need to explore the origin of where this behavior first began. You can always prune a dying flower, but if you do not address the root of the problem, you cannot truly blossom. " },
      { text: "\n\n" },
      { text: "Self-awareness", bold: true },
      { text: " is the key to change, and I am here to help you discover yourself and make informed decisions about your behavior, your intentions, and your purpose in life." }
    ],
    image: images.learn.howWeChange,
    imageAlt: "Personal growth and behavior change",
    imageLeft: true,
  },
];

function SectionWithImage({
  title,
  children,
  image,
  imageAlt,
  imageLeft,
}: {
  title: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
}) {
  return (
    <article className={learnSectionArticleClass}>
      {imageLeft ? (
        <>
          <LearnSectionImage src={image} alt={imageAlt} />
          <div className="flex flex-col justify-center p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
              {title}
            </h2>
            <div className="mt-4 md:mt-6">{children}</div>
          </div>
        </>
      ) : (
        <>
          <div className="order-2 flex flex-col justify-center p-6 md:order-1 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
              {title}
            </h2>
            <div className="mt-4 md:mt-6">{children}</div>
          </div>
          <LearnSectionImage
            src={image}
            alt={imageAlt}
            className="order-1 md:order-2"
          />
        </>
      )}
    </article>
  );
}

export default function LearnMorePage() {
  return (
    <PageContainer>
      {/* Hero */}
      <header className="text-center md:text-left">
        <p className="text-sm font-medium uppercase tracking-widest text-charcoal/70">
          My approach
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
          Learn More
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/90 md:text-xl">
          Why the name, a bit about me, and how I think about change and
          behavior.
        </p>
      </header>

      {/* Why the name */}
      <AnimateOnScroll>
      <section className="mt-16 md:mt-20">
        <article className={learnSectionArticleClass}>
          <LearnSectionImage
            src={images.learn.whyTheName}
            alt="Why the name Elevate U"
          />
          <div className="flex flex-col justify-center p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
              Why the name ElevateU?
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal/90 md:mt-6 md:text-lg">
              The plain fact of the matter is that I am here to <strong>elevate you</strong>. 
              My love, my passion, and my purpose in life are for the growth and development of others. 
              However, it is important to remember that <strong>growth</strong> is not easy. 
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/90 md:text-lg">
              It is a battle that we choose to fight every day—a battle of our new, 
              healthy ways of learning versus how we were programmed to think; 
              programmed by those who raised us, cultural influences, our community, 
              or the impactful relationships around us. There can be a horizon on the other side. 
              Although I will be straightforward with you, it is not easy to get there.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/90 md:text-lg">
            That is why I want to put this at the forefront of your mind. 
            If you choose to <strong>elevate yourself</strong>, you will need to possess the drive and courage to 
            reach a new potential. This process will be a challenge; however, the rewards can be 
            great if you decide to take part in this journey with me.
            </p>
            <div className="mt-6">
              <Button href="/booking">Book a Session</Button>
            </div>
          </div>
        </article>
      </section>
      </AnimateOnScroll>

      {/* About Me */}
      <AnimateOnScroll>
      <section className="mt-10 md:mt-12">
        <article className={learnSectionArticleClass}>
          <div className="order-2 flex flex-col justify-center p-6 md:order-1 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
              About Me
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal/90 md:mt-6 md:text-lg">
              My name is Ryan James Adams—Ryan James, as my uncle likes to call
              me—and I have been in the field for about 10 years. I have worked
              in a variety of roles, including mental health counseling at an
              addictions treatment center and academic counseling at several
              colleges. I earned my Bachelor of Science (B.S.) degree in Human
              Services from California State University, Fullerton (CSUF), and
              my Master of Science (M.S.) degree in Counseling, with an
              emphasis in Professional Clinical Counseling and College Student
              Services.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          <LearnSectionImage
            src={images.learn.aboutMe}
            alt="Ryan James Adams, counselor"
            className="order-1 md:order-2"
            objectPosition={learnAboutMeObjectPosition}
          />
        </article>
      </section>
      </AnimateOnScroll>

      {/* Style, Belief, How We Change */}
      <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
        {sections.map((section) => (
          <AnimateOnScroll key={section.title}>
          <SectionWithImage
            title={section.title}
            image={section.image}
            imageAlt={section.imageAlt}
            imageLeft={section.imageLeft}
          >
            <p className="whitespace-pre-line leading-relaxed text-charcoal/90 md:text-lg">
              {section.content.map((item, idx) => (
                <span key={idx} className={item.bold ? "font-bold" : ""}>
                  {item.text}
                </span>
              ))}
            </p>
          </SectionWithImage>
          </AnimateOnScroll>
        ))}
      </div>
    </PageContainer>
  );
}
