'use client'

import React from 'react'
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { GreenSpeedometer } from './green-speedometer'

const vouchers = [
  { id: 1, title: "10% off at EcoStore", description: "Valid until 30/06/2023" },
  { id: 2, title: "£5 off public transport", description: "Valid for next 3 months" },
  { id: 3, title: "Free reusable coffee cup", description: "Redeem at any partner cafe" },
]

export default function GreenRewards() {
  const greenLevel = 75
  const cashbackRate = 1.25

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-green-600 mb-2">Green Rewards</h1>
        <p className="text-gray-600">Track your eco-friendly progress and earn rewards</p>
      </header>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Green Level</h2>
            <span className="text-green-600 font-bold">{greenLevel}%</span>
          </div>
          <GreenSpeedometer level={greenLevel} />
          <p className="text-center mt-4 text-gray-600">Keep up the good work!</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Cashback Rate</h2>
          <div className="flex items-center justify-center">
            <Leaf className="text-green-600 mr-2 h-8 w-8" />
            <span className="text-4xl font-bold text-green-600">{cashbackRate}%</span>
          </div>
          <p className="text-center mt-4 text-gray-600">on eco-friendly purchases</p>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mb-4">Available Vouchers</h2>
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {vouchers.map((voucher) => (
            <CarouselItem key={voucher.id}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{voucher.title}</h3>
                  <p className="text-sm text-gray-600">{voucher.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

