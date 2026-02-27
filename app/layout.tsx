import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '2026 환경사랑 부산 k-런 포토부스',
  description: '환경을 사랑하는 러너의 가장 뜨거운 인증샷',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
