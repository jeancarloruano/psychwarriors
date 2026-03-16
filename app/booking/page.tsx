"use client";

import { useCallback } from "react";
import Link from "next/link";
import Script from "next/script";

const CONSULTATION_PARAMS =
  "hide_gdpr_banner=1&background_color=fff8e1&text_color=2f2a24&primary_color=ef6c00";
const SESSION_PARAMS =
  "hide_gdpr_banner=1&background_color=fff8e1&text_color=2f2a24&primary_color=ef6c00";

const CONSULTATION_BASE =
  process.env.NEXT_PUBLIC_CALENDLY_CONSULTATION_URL ||
  "https://calendly.com/ryanjamesadams2016/15-minute-consulation";
const SESSION_BASE =
  process.env.NEXT_PUBLIC_CALENDLY_SESSION_URL ||
  "https://calendly.com/ryanjamesadams2016/15-minute-consulation-clone";

const CONSULTATION_URL = CONSULTATION_BASE.includes("?")
  ? `${CONSULTATION_BASE}&${CONSULTATION_PARAMS}`
  : `${CONSULTATION_BASE}?${CONSULTATION_PARAMS}`;
const SESSION_URL = SESSION_BASE.includes("?")
  ? `${SESSION_BASE}&${SESSION_PARAMS}`
  : `${SESSION_BASE}?${SESSION_PARAMS}`;

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function BookingPage() {
  const hasUrls = CONSULTATION_URL || SESSION_URL;
  const consultationUrl = CONSULTATION_URL?.replace(/\/$/, "");
  const sessionUrl = SESSION_URL?.replace(/\/$/, "");

  const openConsultationPopup = useCallback(() => {
    if (typeof window !== "undefined" && window.Calendly && consultationUrl) {
      window.Calendly.initPopupWidget({ url: consultationUrl });
    }
  }, [consultationUrl]);

  const openSessionPopup = useCallback(() => {
    if (typeof window !== "undefined" && window.Calendly && sessionUrl) {
      window.Calendly.initPopupWidget({ url: sessionUrl });
    }
  }, [sessionUrl]);

  return (
    <div className="mx-auto w-[80%] max-w-[80vw] px-6 py-16 md:py-24">
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <header className="text-center md:text-left">
        <p className="text-sm font-medium uppercase tracking-widest text-charcoal/70">
          Schedule
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
          Book a Session
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/90 md:text-xl">
          Choose a session type below to open the scheduler in a popup. You’ll
          complete scheduling and any payment in Calendly.
        </p>
      </header>

      {!hasUrls ? (
        <div className="mt-10 border border-charcoal/10 bg-white/40 p-6 shadow-sm backdrop-blur-sm md:p-8">
          <p className="text-charcoal/90">
            Calendly scheduling is not configured yet. Add your Calendly URLs in
            your environment variables:{" "}
            <code className="rounded border border-charcoal/20 bg-charcoal/5 px-1.5 py-0.5 text-sm">
              NEXT_PUBLIC_CALENDLY_CONSULTATION_URL
            </code>{" "}
            and{" "}
            <code className="rounded border border-charcoal/20 bg-charcoal/5 px-1.5 py-0.5 text-sm">
              NEXT_PUBLIC_CALENDLY_SESSION_URL
            </code>
            , or a single{" "}
            <code className="rounded border border-charcoal/20 bg-charcoal/5 px-1.5 py-0.5 text-sm">
              NEXT_PUBLIC_CALENDLY_SCHEDULING_URL
            </code>{" "}
            for both.
          </p>
          <p className="mt-4 text-sm text-charcoal/80">
            Example: https://calendly.com/your-username/15min
          </p>
        </div>
      ) : (
        <div className="mt-10">
          <p className="text-sm font-medium text-charcoal/80 md:text-base">
            Select a session type
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <button
              type="button"
              onClick={openConsultationPopup}
              disabled={!consultationUrl}
              className="flex flex-col items-start border border-charcoal/10 bg-white/40 p-6 text-left shadow-sm backdrop-blur-sm transition-colors hover:border-charcoal/20 hover:bg-white/60 disabled:opacity-50 disabled:hover:border-charcoal/10 disabled:hover:bg-white/40 md:p-8"
            >
              <span className="font-display text-lg font-semibold text-charcoal md:text-xl">
                15-minute consultation
              </span>
              <span className="mt-1 text-charcoal/80">$75</span>
              <span className="mt-3 text-sm leading-relaxed text-charcoal/80">
                Introductory call to discuss your needs. This fee is applied
                toward your first full session if you continue.
              </span>
              <span className="mt-4 text-sm font-medium text-sunset-800">
                Book 15-minute →
              </span>
            </button>
            <button
              type="button"
              onClick={openSessionPopup}
              disabled={!sessionUrl}
              className="flex flex-col items-start border border-charcoal/10 bg-white/40 p-6 text-left shadow-sm backdrop-blur-sm transition-colors hover:border-charcoal/20 hover:bg-white/60 disabled:opacity-50 disabled:hover:border-charcoal/10 disabled:hover:bg-white/40 md:p-8"
            >
              <span className="font-display text-lg font-semibold text-charcoal md:text-xl">
                45-minute session
              </span>
              <span className="mt-1 text-charcoal/80">$175</span>
              <span className="mt-3 text-sm leading-relaxed text-charcoal/80">
                A full session to work through what matters to you.
              </span>
              <span className="mt-4 text-sm font-medium text-sunset-800">
                Book 45-minute →
              </span>
            </button>
          </div>
        </div>
      )}

      <p className="mt-8 text-center text-sm text-charcoal/80">
        <Link
          href="/book"
          className="font-medium text-charcoal/90 underline transition-colors hover:text-sunset-800"
        >
          ← Back to session info
        </Link>
      </p>
    </div>
  );
}
