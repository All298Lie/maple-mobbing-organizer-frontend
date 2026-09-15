import FilterBar from "@/components/FilterBar";
import MobbingMapCard from "@/components/MobbingMapCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pencil } from "lucide-react"; // 💡 연필 아이콘 불러오기

export default function Home() {
  return (
    // 💡 relative를 추가하여 플로팅 버튼의 기준점을 잡아주고, 하단 여백(pb-24)을 줍니다.
    <main className="min-h-screen p-8 bg-zinc-50 relative pb-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          메이플 사냥터 DB (가칭)
        </h1>
        <p className="mt-2 text-zinc-500">
          내 캐릭터의 레벨과 직업에 맞는 최고 효율의 사냥터를 찾아보세요.
        </p>
        
        <div className="mt-8">
          <FilterBar />
        </div>

        {/* 카드 목록 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MobbingMapCard />
          <MobbingMapCard />
          <MobbingMapCard />
        </div>
      </div>

      {/* 💡 좌측 하단 플로팅 글쓰기 버튼 */}
      <Link href="/write" className="fixed bottom-8 left-8 z-50">
        <Button 
          className="rounded-full px-6 py-7 shadow-lg bg-zinc-900 text-white hover:bg-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all flex gap-2 items-center"
        >
          <Pencil className="w-5 h-5" />
          <span className="font-semibold text-base">사냥터 제보</span>
        </Button>
      </Link>
    </main>
  );
}