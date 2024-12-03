import Image from "next/image";
import localFont from 'next/font/local'
import './globals.css'

import { Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "../components/ui/card";

function AccountCard({ name, balance, accountNumber, logo }) {
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
export default function Home() {

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
        
            <div>
              <div>
                <h1>Ctrl Alt Defeat</h1>
          
                {/* Iterate over accounts */}
                {accounts.map((account) => (
                  <Card key={account.accountNumber}>
                    <CardHeader>
                      <CardTitle>{account.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h2>{account.accountNumber}</h2>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
}
