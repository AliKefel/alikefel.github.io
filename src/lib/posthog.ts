import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    const apiKey = import.meta.env.VITE_POSTHOG_KEY;
    
    // Only initialize if we have a valid API key
    if (apiKey && apiKey.trim() !== '' && apiKey !== 'YOUR_POSTHOG_API_KEY' && !apiKey.includes('your_posthog')) {
      posthog.init(apiKey, {
        api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com',
        loaded: (posthog) => {
          if (import.meta.env.MODE === 'development') {
            posthog.debug();
          }
        },
        capture_pageview: true,
        capture_pageleave: true,
      });
    } else {
      console.warn('PostHog API key not found. Analytics will not be tracked.');
      // Return early to prevent initialization
      return null;
    }
  }
  return posthog;
};