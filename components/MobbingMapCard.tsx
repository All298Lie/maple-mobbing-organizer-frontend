import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HuntingMapCard() {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold text-zinc-900">불타는 도서관 1</CardTitle>
            <CardDescription className="mt-1">요구 레벨: 260 | 세르니움</CardDescription>
          </div>
          {/* 추천 수 영역 */}
          <div className="flex flex-col items-center bg-zinc-100 px-3 py-1 rounded-lg">
            <span className="text-xs text-zinc-500 font-medium">추천</span>
            <span className="text-sm font-bold text-zinc-700">124</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {/* 효율 정보 */}
          <div className="flex justify-between items-center text-sm bg-zinc-50 p-2 rounded-md border border-zinc-100">
            <span className="text-zinc-500">측정 마릿수 (6분)</span>
            <span className="font-semibold text-zinc-900">약 1,850 마리</span>
          </div>
          
          {/* 스킬 및 사냥 방식 태그 */}
          <div className="flex flex-wrap gap-2 mt-1">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
              솔 야누스 (새벽)
            </Badge>
            <Badge variant="outline" className="text-zinc-600">
              제자리 사냥
            </Badge>
            <Badge variant="outline" className="text-zinc-600">
              피로도 낮음
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}