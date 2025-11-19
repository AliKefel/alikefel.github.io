import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PostHogProvider } from 'posthog-js/react'

const posthogKey = import.meta.env.VITE_POSTHOG_KEY;
const posthogHost = import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com';

const options = {
  api_host: posthogHost,
  loaded: (posthog: any) => {
    if (import.meta.env.MODE === 'development') {
      posthog.debug();
    }
  },
  capture_pageview: true,
  capture_pageleave: true,
} as const;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {posthogKey && posthogKey.trim() !== '' ? (
      <PostHogProvider apiKey={posthogKey} options={options}>
        <App />
      </PostHogProvider>
    ) : (
      <App />
    )}
  </StrictMode>,
)
