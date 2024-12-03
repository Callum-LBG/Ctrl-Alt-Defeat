'use client'

function GreenSpeedometer({ level }) {
    const radius = 90
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (level / 100) * circumference

    return (
        <div className={`relative w-48 h-48 mx-auto font-serif`}>
            <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle
                    className="text-gray-200"
                    strokeWidth="15"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="100"
                    cy="100"
                />
                <circle
                    className="text-[#9587ed] transition-all duration-500 ease-in-out"
                    strokeWidth="15"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="100"
                    cy="100"
                    transform="rotate(-90 100 100)"
                />
                <text
                    x="50%"
                    y="50%"
                    dy=".3em"
                    textAnchor="middle"
                    className="text-3xl font-bold text-green-600"
                >
                    {`${level} / 100`}xp
                </text>
            </svg>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const vouchers = [
    { id: 1, title: "10% off at EcoStore", description: "Valid until 30/06/2023" },
    { id: 2, title: "£5 off public transport", description: "Valid for next 3 months" },
    { id: 3, title: "Free reusable coffee cup", description: "Redeem at any partner cafe" },
]

export default function GreenRewards() {
    const greenLevel = 75 // This would normally come from an API or state
    const cashbackRate = 1.25 // This would normally come from an API or state

    let [xpVal, setXpVal] = useState(0)
    useEffect(() => {
        setXpVal(greenLevel)
    }, [])

    return (
        <div className="max-w-md mx-auto bg-gray-100 min-h-screen p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-green-600 mb-2">Green Rewards</h1>
                <p className="text-gray-600 font-sans">Track your eco-friendly progress and earn rewards</p>
            </header>

            <Card className="mb-8">
                <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Your Green Level</h2>
                        <span className="text-lg text-black font-bold">Level &nbsp;<span className="text-2xl">2</span></span>
                    </div>
                    <GreenSpeedometer level={xpVal} />
                    <p className="text-center mt-4 text-gray-600 font-sans">Keep up the good work!</p>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Cashback Rate</h2>
                    <div className="flex items-center justify-center">
                        <Leaf className="text-green-600 mr-2 h-8 w-8" />
                        <span className="text-4xl font-bold text-green-600">{cashbackRate}%</span>
                    </div>
                    <p className="text-center mt-4 text-gray-600 font-sans">on eco-friendly purchases</p>
                </CardContent>
            </Card>

            <h2 className="text-2xl font-semibold mb-4">Available Vouchers</h2>
            <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                    {vouchers.map((voucher) => (
                        <CarouselItem key={voucher.id}>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">{voucher.title}</h3>
                                    <p className="text-sm text-gray-600 font-sans">{voucher.description}</p>
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

