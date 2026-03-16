import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const sections = [
  {
    title: "Style",
    content: [
      { text: "My style is genuine, authentic, challenging, supportive, nonjudgmental, and direct. " },
      { text: "I draw from Rogerian and Gestalt approaches, as well as Schlossberg's student development theory of challenge and support. " },
      { text: "One principle I strongly believe in is this: " },
      { text: "\"You have to fight your own demons before fighting anybody else's.\"", bold: true },
      { text: " I have been in therapy for over 10 years, and if I ask you to do something in our sessions, chances are high that I have had to confront it myself." }
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    imageLeft: true,
  },
];

function SectionWithImage({
  title,
  children,
  image,
  imageLeft,
}: {
  title: string;
  children: React.ReactNode;
  image: string;
  imageLeft: boolean;
}) {
  return (
    <article className="grid grid-cols-1 gap-0 overflow-hidden border border-charcoal/10 bg-white/40 shadow-sm backdrop-blur-sm md:grid-cols-2">
      {imageLeft ? (
        <>
          <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[280px]">
            <ImageWithLoading
              src={image}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
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
          <div className="relative order-1 aspect-[4/3] w-full md:order-2 md:aspect-auto md:min-h-[280px]">
            <ImageWithLoading
              src={image}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </>
      )}
    </article>
  );
}

export default function LearnMorePage() {
  return (
    <div className="mx-auto w-[80%] max-w-[80vw] px-6 py-16 md:py-24">
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
        <article className="grid grid-cols-1 gap-0 overflow-hidden border border-charcoal/10 bg-white/40 shadow-sm backdrop-blur-sm md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[280px]">
            <ImageWithLoading
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
              Why the name Psychological Warfare?
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal/90 md:mt-6 md:text-lg">
              Let's be honest—<strong>growth is not easy</strong>. It's a daily
              decision. A quiet, ongoing battle between the healthier ways we're
              learning to think and the patterns we were shaped by. Patterns
              formed by the people who raised us, the cultures we grew up in, our
              communities, and the relationships that left lasting marks.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/90 md:text-lg">
              There is a horizon on the other side. But I won't tell you this
              work is simple. Real change asks for courage. It asks you to
              question what feels familiar and to step toward something new.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/90 md:text-lg">
              If you choose to become a{" "}
              <strong>psychological warrior of change</strong>, know that the
              path will challenge you. And also know this: the rewards—clarity,
              resilience, freedom, deeper connection—can be profound. If you're
              willing to take that journey, I would be honored to walk alongside
              you.
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
        <article className="grid grid-cols-1 gap-0 overflow-hidden border border-charcoal/10 bg-white/40 shadow-sm backdrop-blur-sm md:grid-cols-2">
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
          <div className="relative order-1 aspect-[4/3] w-full md:order-2 md:aspect-auto md:min-h-[280px]">
            <ImageWithLoading
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
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
    </div>
  );
}
