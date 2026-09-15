import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // 💡 방금 만든 헤더 불러오기

export const metadata: Metadata = {
  title: "메이플 사냥터 DB",
  description: "메이플스토리 직업별/레벨별 사냥터 및 빌드 공유",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased bg-zinc-50`}>
        <Header /> {/* 💡 화면 맨 위에 헤더 배치 */}
        {children}
      </body>
    </html>
  );
}
