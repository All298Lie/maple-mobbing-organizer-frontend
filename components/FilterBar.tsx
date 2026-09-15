import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function FilterBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-xl shadow-sm border border-zinc-200">
      {/* 직업 선택 드롭다운 */}
      <Select>
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="직업군 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">전체</SelectItem>
          <SelectItem value="warrior">전사</SelectItem>
          <SelectItem value="magician">마법사</SelectItem>
          <SelectItem value="archer">궁수</SelectItem>
          <SelectItem value="thief">도적</SelectItem>
          <SelectItem value="pirate">해적</SelectItem>
        </SelectContent>
      </Select>
      
      {/* 레벨 입력창 */}
      <Input 
        type="number" 
        placeholder="현재 레벨 (예: 260)" 
        className="w-full sm:w-[180px]"
      />
      
      {/* 검색 버튼 */}
      <Button className="w-full sm:w-auto bg-zinc-900 text-white hover:bg-zinc-800">
        최적 사냥터 찾기
      </Button>
    </div>
  )
}