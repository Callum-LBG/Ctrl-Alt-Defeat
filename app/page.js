"use client"

import React, {useState, useEffect} from 'react'
import { ArrowDownLeft, ArrowUpRight, ChevronRight, CreditCard, DollarSign, Search, Leaf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Toggle } from "@/components/ui/toggle"
import { useRouter } from "next/navigation"

const initialTransaction = [
  { id: 1, type: 'debit', description: 'Amazon.com', amount: -79.99, date: '2023-06-01', sustainability: -10},
  { id: 2, type: 'credit', description: 'Salary', amount: 2500.00, date: '2023-05-31' },
  { id: 3, type: 'debit', description: "Farmer\'s Market", amount: -45.23, date: '2023-05-30', sustainability: 5},
  { id: 4, type: 'debit', description: 'Netflix', amount: -12.99, date: '2023-05-29',sustainability: 10 },
  { id: 5, type: 'credit', description: 'Refund', amount: 25.00, date: '2023-05-28', },
]

export default function CurrentAccount() {

  const [eco, setEco] = useState(false);
  const [transactions, setTransactions] = useState(initialTransaction);
  
  useEffect(() => {
    console.log('changed')
    if (eco) {
      setTransactions(transactions.filter(transaction => transaction.sustainability !== undefined));
    } else {
      setTransactions(initialTransaction);
    }
  }, [eco]);
  
  const handleEcoToggle = (event) => { console.log('here'); setEco(!eco); };
  

    const router = useRouter(); 
    const handleClick = () => { router.push('./sustainable-club'); };

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      <header className="bg-green-600 text-white p-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-4">Sustainable Current Account</h1>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm opacity-80">Available balance</p>
            <p className="text-3xl font-bold">£3,240.55</p>
          </div>
          <Button variant="outline" className="bg-transparent text-white border-white hover:bg-green-700" onClick={handleClick}>
            <CreditCard className="mr-2 h-4 w-4" /> View Sus-Score
          </Button>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" className="bg-transparent flex-1 text-white border-white hover:bg-green-700">
            <ArrowDownLeft className="mr-2 h-4 w-4" /> Pay in
          </Button>
          <Button variant="outline" className="bg-transparent flex-1 text-white border-white hover:bg-green-700">
            <ArrowUpRight className="mr-2 h-4 w-4" /> Send money
          </Button>
        </div>
      </header>


      <main className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent transactions</h2>
        <Button variant="ghost" className="text-green-600 hover:text-green-700">
          See all <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
        <Button onClick={handleEcoToggle} className={`ml-4 px-4 py-2 rounded-full ${eco ? 'bg-green-700 text-white' : 'bg-gray-700 text-white'}`} > <Leaf className="mr-2 h-4 w-4 text-black" /> {eco ? 'Eco Filtered' : 'Eco Filtered'} </Button>
      </div>


        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input type="text" placeholder="Search transactions" className="pl-10" />
        </div>

        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div className="flex items-center">
                <div className={`mr-4 p-2 rounded-full ${transaction.type === 'debit' ? 'bg-gray-200' : 'bg-gray-100'}`}>
                  {transaction.type === 'debit' ? (
                    <ArrowUpRight className="h-6 w-6 text-black-600" />
                  ) : (
                    <ArrowDownLeft className="h-6 w-6 text-gray-600" />
                  )}
                </div>
                <div>
                  <p className="font-semibold">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                  {transaction.sustainability && (
                    <div className="flex items-center">
                    <Leaf className={`font-semibold ${transaction.sustainability >= -1 ? 'text-green-500' : 'text-red-500'}`} />
                    <span className={`font-semibold ${transaction.sustainability >= -1 ? 'text-green-500' : 'text-red-500'}`}>
                      {transaction.sustainability}
                    </span>
                  </div>                  
                  )}
                </div>
              </div>
              <p className={`font-semibold ${transaction.type === 'debit' ? 'text-black-600' : 'text-green-600'}`}>
                {transaction.type === 'debit' ? '-' : '+'}£{Math.abs(transaction.amount).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}