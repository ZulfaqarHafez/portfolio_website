// Google Analytics 4 utility functions

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  // Check if GA is already loaded
  if (typeof window !== 'undefined' && !window.gtag) {
    // Create script tag
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    console.log('Google Analytics initialized');
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  });
};

// Track project views
export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', {
    project_name: projectName,
  });
};

// Track resume downloads
export const trackResumeDownload = () => {
  trackEvent('resume_download', {
    event_category: 'engagement',
    event_label: 'Resume PDF Downloaded',
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('outbound_link', {
    url: url,
    link_text: linkText,
  });
};

// Track section views (for scroll tracking)
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};

// Track contact form submission
export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'Contact Form Submitted',
  });
};

// Track tab changes (for certifications, etc.)
export const trackTabChange = (tabName: string, section: string) => {
  trackEvent('tab_change', {
    tab_name: tabName,
    section: section,
  });
};
