import { Mail, HelpCircle, Users, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import AccountCard from "@/components/account-card"
import SpaceCard from "@/components/space-card"

export default function Page() {
  const accounts = [
    {
      name: "Halifax Current Account",
      balance: 155.48,
      accountNumber: "12-34-56 / 12345678",
      logo: "/placeholder.svg?height=24&width=24"
    },
    {
      name: "MBNA Current Account",
      balance: 78.53,
      accountNumber: "65-43-21 / 87654321",
      logo: "/placeholder.svg?height=24&width=24"
    },
    {
      name: "Bank of Scotland Saver",
      balance: 500.00,
      accountNumber: "34-56-78 / 34567890",
      logo: "/placeholder.svg?height=24&width=24"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-4">
        <header className="flex items-center justify-between mb-6">
          <Mail className="w-6 h-6" />
          <div className="text-lg font-semibold">Hi Alex</div>
          <div className="flex gap-4">
            <HelpCircle className="w-6 h-6" />
            <Users className="w-6 h-6" />
          </div>
        </header>

        <div className="flex gap-2 mb-6">
          <Button variant="default" className="flex-1">
            Summary
          </Button>
          <Button variant="outline" className="flex-1">
            Everyday
          </Button>
          <Button variant="outline" className="flex-1">
            Save & Invest
          </Button>
        </div>

        <div className="space-y-4 mb-8">
          {accounts.map((account) => (
            <AccountCard key={account.accountNumber} {...account} />
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Your spaces</h2>
          <SpaceCard />
        </div>
      </div>
    </div>
  )
}

