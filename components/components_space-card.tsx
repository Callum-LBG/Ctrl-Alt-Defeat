import { ChevronRight, Wallet } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function SpaceCard() {
  return (
    <Card className="overflow-hidden bg-green-50">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Wallet className="w-5 h-5 text-green-700" />
            </div>
            <div>
              <div className="font-medium">Everyday</div>
              <div className="text-sm text-muted-foreground">
                Stay on top of your finances with our tools and insights
              </div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  )
}

