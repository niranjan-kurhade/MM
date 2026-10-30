import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Midnight Media – Influencer Marketing & UGC Creator Agency in India'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/MM-logo.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'radial-gradient(circle at 20% 30%, rgba(124,58,237,0.45), #050505 60%)',
          color: '#F5F5F7',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <img src={logoSrc} width={96} height={96} style={{ borderRadius: 20 }} alt="" />
          <div style={{ fontSize: 44, fontWeight: 700 }}>Midnight Media</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>Influencer Marketing &amp; UGC Creator Agency</div>
          <div style={{ fontSize: 32, color: '#A1A1AA' }}>Vetted creators. Performance-driven campaigns. India.</div>
        </div>
        <div style={{ fontSize: 28, color: '#8B5CF6' }}>midnightmedia.in</div>
      </div>
    ),
    size,
  )
}
