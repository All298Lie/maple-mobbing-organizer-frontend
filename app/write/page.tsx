import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function WritePage() {
  return (
    <main className="min-h-screen p-8 bg-zinc-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
        <h1 className="text-2xl font-bold text-zinc-900 mb-6">새 사냥터 공략 등록</h1>
        
        <form className="flex flex-col gap-6">
          {/* 1. 맵 정보 영역 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700">사냥터 이름</label>
              <Input placeholder="예: 불타는 도서관 1" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700">지역</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="지역 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cernium">세르니움</SelectItem>
                  <SelectItem value="arcus">호텔 아르크스</SelectItem>
                  <SelectItem value="odium">오디움</SelectItem>
                  <SelectItem value="arteria">아르테리아</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 2. 효율 측정 영역 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700">측정 마릿수 (6분 기준)</label>
              <Input type="number" placeholder="예: 1850" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700">사용 직업군</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="직업 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="warrior">전사</SelectItem>
                  <SelectItem value="magician">마법사</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 3. 스킬 및 태그 */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">주요 스킬 및 특징 태그 (쉼표로 구분)</label>
            <Input placeholder="예: 솔 야누스(새벽), 제자리 사냥, 피로도 낮음" />
          </div>

          {/* 4. 상세 설명 */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">빌드 상세 설명</label>
            <Textarea 
              placeholder="동선이나 주의할 점을 적어주세요." 
              className="min-h-[150px]"
            />
          </div>

          {/* 등록 버튼 */}
          <div className="flex justify-end gap-3 mt-4">
            <Button type="button" variant="outline">취소</Button>
            <Button type="submit" className="bg-zinc-900 text-white hover:bg-zinc-800">
              공략 등록하기
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}