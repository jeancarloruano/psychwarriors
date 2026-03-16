import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { Button } from "@/components/ui/Button";
import { ConsultationSection } from "@/components/home/ConsultationSection";

const consultationTopics = [
  {
    title: "Relationships",
    description:
      "Whether with a partner, family, friends, or colleagues—relationships shape our daily lives. I offer guidance on communication, boundaries, conflict, and connection so you can show up more clearly and intentionally in the relationships that matter to you.",
    items: ["Couples", "Family", "Friends", "Work", "Community", "Dating"],
    bg: "bg-warm-cream/90",
    text: "text-sunset-800",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    imageLeft: true,
  },
  {
    title: "Career Advisement",
    description:
      "Navigating career decisions, transitions, or workplace dynamics can be overwhelming. Together we can clarify your goals, strengths, and values and build a path that feels aligned with who you are and where you want to go.",
    items: ["Career change", "Goals & values", "Transitions", "Work-life balance", "Leadership", "Interview prep"],
    bg: "bg-white/20",
    text: "text-charcoal",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    imageLeft: false,
  },
  {
    title: "College Advisement",
    description:
      "From choosing a major and staying on track to managing stress and life balance, the college years bring unique challenges. I support students with planning, motivation, and the skills needed to make the most of their education and beyond.",
    items: ["Major selection", "Time management", "Stress", "Motivation", "Study skills", "Life balance"],
    bg: "bg-warm-cream/90",
    text: "text-sunset-800",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    imageLeft: true,
  },
  {
    title: "Exploring Behavior Patterns",
    description:
      "Understanding why we do what we do is the first step toward lasting change. We'll look at the patterns that no longer serve you—where they came from, what triggers them, and how to shift toward choices that support the life you want.",
    items: ["Self-awareness", "Triggers", "Habits", "Change", "Patterns", "Intentions"],
    bg: "bg-white/20",
    text: "text-charcoal",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    imageLeft: false,
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative w-full px-6 py-24 md:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <ImageWithLoading
              src="/favicon.ico"
              alt=""
              width={80}
              height={80}
              className="h-16 w-16 shrink-0 md:h-20 md:w-20"
            />
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              Psychological Warfare
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-charcoal/90 md:text-xl">
            Supportive guidance focused on understanding human behavior and
            supporting lasting change. Together I work with you toward clarity,
            growth, and the patterns that serve you.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Contact Me
            </Button>
            <Button href="/booking" variant="outline">
              Book a Session
            </Button>
            <Button href="/learn" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <ConsultationSection topics={consultationTopics} />
    </div>
  );
}
