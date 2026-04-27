"use client";

import Script from "next/script";
import type { CSSProperties, ReactNode } from "react";

const CALENDLY_URL = "https://calendly.com/hello-estiasi/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

/**
 * Loads Calendly's popup widget JS once at the page level.
 * Drop a single <CalendlyAssets /> in the root layout body. The CSS
 * is loaded as a normal <link> in the layout's <head>.
 */
export function CalendlyAssets() {
  return <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />;
}

type Props = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/**
 * "Book a Discovery Call" button. Opens Calendly as a popup overlay.
 * Falls back to opening Calendly in a new tab if the popup script
 * hasn't loaded yet (very rare — covers edge cases like ad-blockers).
 */
export default function BookDiscoveryCall({ className, style, children }: Props) {
  function open(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <a
      href={CALENDLY_URL}
      onClick={open}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children ?? "Book a Discovery Call"}
    </a>
  );
}
