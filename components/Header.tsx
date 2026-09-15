import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-14 max-w-screen-lg mx-auto items-center justify-between px-4">
        {/* 로고 영역 */}
        <Link href="/" className="font-bold text-xl tracking-tight text-zinc-900 flex items-center gap-2">
          <span>🍁</span>
          <span>메이플 사냥터 DB</span>
        </Link>
        
        {/* 우측 메뉴 영역 */}
        <div className="flex items-center gap-4">
          {/* 나중에 넥슨 API 연동이 들어갈 로그인 버튼 자리입니다 */}
          <button className="px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors">
            넥슨 로그인
          </button>
        </div>
      </div>
    </header>
  );
}