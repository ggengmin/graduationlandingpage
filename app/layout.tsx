import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '제 31회 동서대학교 학위수여식',
  description: '가장 빛나는 오늘의 당신을 위해 특별한 포토부스를 준비했습니다.',
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
