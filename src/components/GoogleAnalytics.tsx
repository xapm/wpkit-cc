"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsProps = {
  measurementId: string;
};

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!ready || !measurementId || typeof window.gtag !== "function") {
      return;
    }

    const pagePath = `${pathname}${window.location.search}`;
    if (lastTrackedPath.current === pagePath) {
      return;
    }

    window.gtag("config", measurementId, {
      page_path: pagePath,
    });
    lastTrackedPath.current = pagePath;
  }, [measurementId, pathname, ready]);

  return (
    <>
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', { send_page_view: false });
          `,
        }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      />
    </>
  );
}
