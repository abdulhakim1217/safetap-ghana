// Analytics utilities for tracking user interactions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Google Analytics tracking
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track contact form submissions
export const trackContactFormSubmission = (method: "modal" | "email") => {
  trackEvent("contact_form_submit", "engagement", method);
};

// Track navigation clicks
export const trackNavigation = (section: string) => {
  trackEvent("navigation_click", "navigation", section);
};

// Track CTA clicks
export const trackCTAClick = (cta: string) => {
  trackEvent("cta_click", "conversion", cta);
};

// Track page views (for SPA navigation)
export const trackPageView = (path: string, title: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.VITE_GA_TRACKING_ID, {
      page_path: path,
      page_title: title,
    });
  }
};
