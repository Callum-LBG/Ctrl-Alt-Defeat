import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface AccountCardProps {
  name: string
  balance: number
  accountNumber: string
  logo: string
}

export default function AccountCard({ name, balance, accountNumber, logo }: AccountCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <Image
              src={logo}
              alt={`${name} logo`}
              width={24}
              height={24}
              className="rounded-sm"
            />
            <div>
              <div className="font-medium">{name}</div>
              <div className="text-sm text-muted-foreground">{accountNumber}</div>
            </div>
          </div>
          <div className="font-semibold">£{balance.toFixed(2)}</div>
        </div>
      </CardContent>
    </Card>
  )
}

