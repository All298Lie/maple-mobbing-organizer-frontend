import FilterBar from "@/components/FilterBar";
import MobbingMapCard from "@/components/MobbingMapCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pencil } from "lucide-react"; // 💡 연필 아이콘 불러오기

// 💡 백엔드에서 데이터를 가져오는 함수
async function getPosts() {
  // cache: 'no-store'를 주면 새로고침할 때마다 항상 최신 데이터를 가져옵니다.
  const res = await fetch('http://localhost:3000/posts', { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

// 💡 async 컴포넌트로 변경
export default async function Home() {
  const posts = await getPosts(); // 데이터 불러오기!

  return (
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

        {/* 💡 가짜 카드들을 지우고, 가져온 데이터(posts) 개수만큼 카드를 반복해서 그립니다 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <MobbingMapCard key={post.id} post={post} />
          ))}
          
          {/* 글이 하나도 없을 때 보여줄 메시지 */}
          {posts.length === 0 && (
            <div className="col-span-full py-12 text-center text-zinc-500">
              아직 등록된 사냥터 공략이 없습니다. 첫 공략을 작성해 보세요!
            </div>
          )}
        </div>
      </div>

      <Link href="/write" className="fixed bottom-8 left-8 z-50">
        <Button 
          className="rounded-full px-6 py-7 shadow-lg bg-zinc-900 text-white hover:bg-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all flex gap-2 items-center"
        >
          <Pencil className="w-5 h-5" />
          <span className="font-semibold text-base">새 공략 쓰기</span>
        </Button>
      </Link>
    </main>
  );
}