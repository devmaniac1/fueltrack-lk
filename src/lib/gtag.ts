/**
 * Push custom events to the GTM dataLayer.
 * GA4 should be configured as a tag inside GTM — no direct gtag.js needed.
 */

export const pushCTAClick = (buttonText: string, buttonLocation: string) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cta_click",
      button_text: buttonText,
      button_location: buttonLocation,
    });
  }
};
