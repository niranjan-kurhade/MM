'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { siteConfig } from '@/lib/site'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
const isValidGaId = !!GA_ID && /^G-[A-Z0-9]+$/.test(GA_ID)
const isValidClarityId = !!CLARITY_ID && /^[a-z0-9]+$/i.test(CLARITY_ID)

// Maps outbound clicks to GA4 events so leads and reel views show up as conversions.
function eventForLink(href: string): [string, Record<string, string>] | null {
  if (href === siteConfig.bookingUrl) return ['generate_lead', { method: 'strategy_call_form' }]
  if (href === siteConfig.creatorFormUrl) return ['creator_application', { method: 'creator_form' }]
  if (href.startsWith('mailto:')) return ['contact', { method: 'email' }]
  if (/instagram\.com\/(p|reel)\//.test(href)) return ['select_content', { content_type: 'reel', item_id: href }]
  return null
}

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!isValidGaId) return
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest('a')
      const tracked = link && eventForLink(link.href)
      if (tracked && typeof window.gtag === 'function') {
        window.gtag('event', tracked[0], { ...tracked[1], link_text: link.textContent?.trim().slice(0, 80) })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      {isValidGaId && (
        <>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          {/* GA4 enhanced measurement tracks client-side navigations itself, so only the initial config is sent */}
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`,
            }}
          />
        </>
      )}
      {isValidClarityId && (
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`,
          }}
        />
      )}
    </>
  )
}

// Declare gtag on Window
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
