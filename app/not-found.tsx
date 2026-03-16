import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const NOT_FOUND_IMAGE =
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-[80%] max-w-[80vw] flex-col justify-center px-6 py-16 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        <div className="relative mx-auto mb-8 aspect-[4/3] w-full max-w-sm overflow-hidden rounded-sm border border-charcoal/10 bg-[#fff8e1]">
          <ImageWithLoading
            src={NOT_FOUND_IMAGE}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 24rem"
          />
        </div>
        <p className="text-sm font-medium uppercase tracking-widest text-charcoal/60">
          Error 404
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/90 md:text-xl">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">
            Contact Me
          </Button>
        </div>
        <p className="mt-8 text-sm text-charcoal/70">
          <Link
            href="/book"
            className="underline transition-colors hover:text-sunset-800"
          >
            Book a Session
          </Link>
        </p>
      </div>
    </div>
  );
}
