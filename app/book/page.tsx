import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { Button } from "@/components/ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80";

export default function BookPage() {
  return (
    <div className="mx-auto w-[80%] max-w-[80vw] px-6 py-16 md:py-24">
      {/* Hero - text left, image right */}
      <header className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-charcoal/70">
            Schedule your session
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
            Book A Session
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/90 md:text-xl">
            Choose a time that works for you via the scheduler below. Sessions
            are booked through Calendly.
          </p>
          <div className="mt-8">
            <Button href="/booking" variant="primary">
              Book Session Now
            </Button>
          </div>
          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold text-charcoal md:text-2xl">
              Rates
            </h2>
            <ul className="mt-3 space-y-1 text-charcoal/90 md:text-lg">
              <li>
                15-minute consultation — <span className="font-semibold">$75</span>
              </li>
              <li>
                45-minute session — <span className="font-semibold">$175</span>
              </li>
            </ul>
            <p className="mt-3 text-sm text-charcoal/80 md:text-base">
              The $75 consultation fee is applied toward your first full session
              if you choose to continue.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full md:aspect-[3/2]">
          <ImageWithLoading
            src={HERO_IMAGE}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </header>

      {/* Policies */}
      <section className="mt-20 md:mt-28">
        <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
          Policies
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2 md:gap-8">
          <article className="border border-charcoal/10 bg-white/40 p-6 shadow-sm backdrop-blur-sm md:p-8">
            <h3 className="font-display text-lg font-semibold text-charcoal md:text-xl">
              Cancellation
            </h3>
            <p className="mt-4 leading-relaxed text-charcoal/90 md:text-lg">
              A minimum of 24 hours' notice is required to cancel or reschedule
              an appointment. Appointments canceled with less than 24 hours'
              notice will be charged the full session fee.
            </p>
            <p className="mt-4 ml-2 italic text-sm leading-relaxed text-charcoal/80 md:text-base">
              Emergencies may be considered on a case-by-case basis at my
              discretion; however, refunds are not guaranteed. Thank you for
              your understanding and for respecting this policy. Your time is
              valuable, and I deeply value mine as well.
            </p>
          </article>

          <article className="border border-charcoal/10 bg-white/40 p-6 shadow-sm backdrop-blur-sm md:p-8">
            <h3 className="font-display text-lg font-semibold text-charcoal md:text-xl">
              Consultation & appointment
            </h3>
            <p className="mt-4 leading-relaxed text-charcoal/90 md:text-lg">
              The consultation fee will be credited toward your full session fee
              should you choose to move forward with an appointment after the
              consultation.
            </p>
          </article>
        </div>
      </section>

      {/* Legal disclaimer - subdued */}
      <section id="disclaimer" className="mt-20 md:mt-28">
        <div className="border border-charcoal/10 bg-charcoal/5 px-6 py-6 md:px-8 md:py-8">
          <h3 className="font-display text-base font-semibold text-charcoal/90 md:text-lg">
            Legal disclaimer
          </h3>
          <p className="mt-4 text-sm leading-relaxed italic text-charcoal/75 md:text-base">
            This service provides coaching, guidance, and supportive
            conversations only. I am not a licensed mental health professional,
            do not practice medicine, and do not provide clinical therapy,
            psychological treatment, or medical advice.
          </p>
          <p className="mt-4 text-sm leading-relaxed italic text-charcoal/75 md:text-base">
            This service is not a substitute for licensed mental health care,
            medical treatment, diagnosis, or emergency services. If you are
            experiencing a mental health crisis or require immediate
            assistance, please contact 911, your local emergency services, or a
            licensed healthcare provider.
          </p>
        </div>
      </section>
    </div>
  );
}
