import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { Button } from "@/components/ui/Button";

const HEREFORYOU_IMAGE =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80";

const hours = [
  { day: "Monday", hours: "5:00 PM – 7:00 PM PST" },
  { day: "Tuesday", hours: "7:00 PM – 8:00 PM PST" },
  { day: "Friday", hours: "11:00 AM – 6:00 PM PST" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-[80%] max-w-[80vw] px-6 py-16 md:py-24">
      {/* I'm here for you - image left, text right */}
      <section className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[3/2]">
          <ImageWithLoading
            src={HEREFORYOU_IMAGE}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-display text-4xl font-semibold text-charcoal md:text-5xl">
            I'm here for you
          </h2>
          <p className="mt-4 text-charcoal/90 leading-relaxed">
            Schedule a consultation and I'll be in touch shortly. We can discuss
            what you're looking for and find a time that works.
          </p>
          <p className="mt-6 text-sm italic text-charcoal/70">
            Please note: If you are in crisis or need immediate support, do not
            wait for an email response. Contact your physician, go to the
            nearest emergency room, or call 911. This email is not a secure
            channel—avoid sending highly confidential information here.
          </p>
        </div>
      </section>

      {/* Contact Me section: text left, cards right, centered */}
      <section className="mt-16 grid w-full gap-10 md:grid-cols-2 md:items-center">
        <div className="flex flex-col justify-center md:pr-4">
          <h1 className="font-display text-3xl font-bold text-charcoal md:text-4xl">
            Contact Me
          </h1>
          <p className="mt-4 text-lg text-charcoal/90">
            Get in touch to schedule a consultation or ask a question.
          </p>
          <div className="mt-10">
            <Button href="/booking">Book a Session</Button>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-6">
          <section className="border border-charcoal/10 bg-white/40 p-6 shadow-sm backdrop-blur-sm md:p-8">
            <h2 className="font-display text-lg font-semibold text-charcoal md:text-xl">
              Hours of Availability
            </h2>
            <ul className="mt-4 space-y-2 text-charcoal/90">
              {hours.map((item) => (
                <li key={item.day}>
                  <span className="font-medium">{item.day}:</span> {item.hours}
                </li>
              ))}
            </ul>
          </section>

          <section className="border border-charcoal/10 bg-white/40 p-6 shadow-sm backdrop-blur-sm md:p-8">
            <h2 className="font-display text-lg font-semibold text-charcoal md:text-xl">
              Contact Information
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-charcoal/80">Email</p>
                <a
                  href="mailto:ryanjamesadams2016@gmail.com"
                  className="mt-1 block break-all text-charcoal/90 transition-colors hover:text-sunset-800"
                >
                  ryanjamesadams2016@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal/80">Phone</p>
                <a
                  href="tel:818-814-6212"
                  className="mt-1 block text-charcoal/90 transition-colors hover:text-sunset-800"
                >
                  818-814-6212
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
