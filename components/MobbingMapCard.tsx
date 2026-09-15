import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// 💡 밖에서 전달받을 데이터(props)의 형태를 정의합니다.
interface MobbingMapCardProps {
  post: any; 
}

export default function MobbingMapCard({ post }: MobbingMapCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            {/* 아직 맵(Map) 연동을 안 했으므로 이름은 임시로 둡니다 */}
            <CardTitle className="text-lg font-bold text-zinc-900">사냥터 이름 미정</CardTitle>
            <CardDescription className="mt-1">요구 레벨: ? | 지역: ?</CardDescription>
          </div>
          <div className="flex flex-col items-center bg-zinc-100 px-3 py-1 rounded-lg">
            <span className="text-xs text-zinc-500 font-medium">추천</span>
            {/* 💡 기본 추천 수 0을 보여줍니다 */}
            <span className="text-sm font-bold text-zinc-700">{post.like_count || 0}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center text-sm bg-zinc-50 p-2 rounded-md border border-zinc-100">
            <span className="text-zinc-500">측정 마릿수 (6분)</span>
            {/* 💡 백엔드에서 받아온 마릿수를 표시합니다 */}
            <span className="font-semibold text-zinc-900">약 {post.kill_count} 마리</span>
          </div>
          
          {/* 💡 백엔드에서 받아온 상세 설명을 표시합니다 */}
          <div className="text-sm text-zinc-600 mt-2 line-clamp-2">
            {post.description}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}