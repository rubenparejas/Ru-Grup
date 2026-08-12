"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const measurementId = "G-DQGPD8CWBX";
const consentKey = "ru-grup-analytics-consent";

type Consent = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function trackCommercialClick(target: Element) {
  const link = target.closest("a");
  if (!link || !window.gtag) return;

  const href = link.getAttribute("href") ?? "";
  let eventName: string | null = null;

  if (href.includes("wa.me/")) eventName = "contact_whatsapp";
  else if (href.startsWith("mailto:")) eventName = "contact_email";
  else if (href.includes("catalogo-terra-nova.pdf")) eventName = "view_catalog";
  else if (href.includes("google.com/maps")) eventName = "view_location";

  if (eventName) {
    window.gtag("event", eventName, {
      link_url: href,
      transport_type: "beacon",
    });
  }
}

export default function Analytics() {
  const [consent, setConsent] = useState<Consent | "loading">("loading");

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(consentKey);
    setConsent(savedConsent === "accepted" ? "accepted" : savedConsent === "rejected" ? "rejected" : "loading");
  }, []);

  useEffect(() => {
    if (consent !== "accepted") return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer.push(args);
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true });

    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Element) trackCommercialClick(event.target);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [consent]);

  const chooseConsent = (choice: Consent) => {
    window.localStorage.setItem(consentKey, choice);
    setConsent(choice);
  };

  return (
    <>
      {consent === "accepted" && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
      )}

      {consent === "loading" && (
        <aside className="analytics-consent" aria-label="Preferencias de privacidad">
          <div>
            <strong>Tu privacidad importa</strong>
            <p>
              Usamos medición anónima para conocer el rendimiento de esta página y mejorar la atención comercial.
            </p>
          </div>
          <div className="analytics-consent-actions">
            <button type="button" className="consent-secondary" onClick={() => chooseConsent("rejected")}>
              Solo necesarias
            </button>
            <button type="button" className="consent-primary" onClick={() => chooseConsent("accepted")}>
              Aceptar medición
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
