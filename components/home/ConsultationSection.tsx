"use client";

import { useEffect, useRef, useState } from "react";
import { ImageWithLoading } from "@/components/ui/ImageWithLoading";

type Topic = {
  title: string;
  description: string;
  items: string[];
  bg: string;
  text: string;
  image: string;
  imageLeft: boolean;
};

export function ConsultationSection({ topics }: { topics: Topic[] }) {
  return (
    <section className="w-full">
      {topics.map((topic) => (
        <div
          key={topic.title}
          className={`w-full ${topic.bg} ${topic.text}`}
        >
          <div className="grid w-full grid-cols-1 gap-0 md:grid-cols-2 md:gap-0">
            {topic.imageLeft ? (
              <>
                <SlideInImage
                  src={topic.image}
                  direction="left"
                  imageLeft={true}
                />
                <div className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-20">
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">
                    {topic.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed md:mt-6 md:text-lg md:leading-relaxed">
                    {topic.description}
                  </p>
                  {topic.items.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2 md:mt-6">
                      {topic.items.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center rounded-sm border border-current/20 bg-white/10 px-3 py-1.5 text-sm font-medium md:text-base"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="order-2 flex flex-col justify-center px-6 py-12 md:order-1 md:px-12 md:py-20">
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">
                    {topic.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed md:mt-6 md:text-lg md:leading-relaxed">
                    {topic.description}
                  </p>
                  {topic.items.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2 md:mt-6">
                      {topic.items.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center rounded-sm border border-current/20 bg-white/10 px-3 py-1.5 text-sm font-medium md:text-base"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <SlideInImage
                  src={topic.image}
                  direction="right"
                  imageLeft={false}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

function SlideInImage({
  src,
  direction,
  imageLeft,
}: {
  src: string;
  direction: "left" | "right";
  imageLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate = direction === "left" ? "-translate-x-12" : "translate-x-12";
  const visibleTranslate = "translate-x-0";

  return (
    <div
      ref={ref}
      className={`relative aspect-[4/3] w-full overflow-hidden transition-all duration-700 ease-out md:aspect-[3/2] ${
        visible ? `opacity-100 ${visibleTranslate}` : `opacity-0 ${translate}`
      } ${!imageLeft ? "order-1 md:order-2" : ""}`}
    >
      <ImageWithLoading
        src={src}
        alt=""
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
