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
import { Leaf, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from 'next/link'

const vouchers = [
    { id: 1, avatar: "https://imgs.search.brave.com/-Q0LLbPDdwzkIh0toXCERPPSlEGvM8_SCuAi9odVBF8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/MDAwNTIyOS9waG90/by9zYW50YS1mZS1u/ZXctbWV4aWNvLWEt/d29tYW4td2VhcnMt/YS1wYXRhZ29uaWEt/amFja2V0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1lZHl1/TzhGNWlUMXd4MmxZ/QXozc1IxZjQ4bHMw/cGxLa1JmTlIzSGVa/cG04PQ", title: "10% off at Patagonia", description: "Valid until 30/06/2023" },
    { id: 2, avatar: "https://imgs.search.brave.com/Gog1KkvebsWqOzZihg4_WjV6XUH5he9oQhNOATKdrCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9udjd5OTNp/ZGY0anEvMmozN3di/VDFjMzNtMjVhMloy/MDNadC85NDJjYjJj/NjY5YzhkNWU4Mjhj/NWI4YmE1YTkwYTE3/ZC9NZXRyb2xpbmtf/dHJhbV9pbl9tYW5j/aGVzdGVyX2NpdHlf/Y2VudHJlLmpwZw", title: "£5 off a TFGM trip", description: "Valid for next 3 months" },
    { id: 3, avatar: "https://imgs.search.brave.com/VrQCvzc43Pbrwf7A5HZ2IeSJOZ_cUPYrQWYJoHUWpwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9q/by5jby9jZG4vc2hv/cC9maWxlcy8yNG96/LUN1cC1PcGFxdWUt/Q2FybmF0aW9uLnBu/Zz9jcm9wPWNlbnRl/ciZoZWlnaHQ9MzA3/MiZ2PTE3MjM1NTU1/MzUmd2lkdGg9MzA3/Mg", title: "Free reusable Stojo cup", description: "Redeem at any partner cafe" },
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
                <div className="flex flex-row gap-2">
                    <Link href="/">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft />
                        </Button>
                    </Link>
                    <h1 className="text-3xl font-bold mb-2">Green Rewards</h1>
                </div>
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
                        <Leaf className="text-green-600 mr-2 h-8 w-8" /> <span className="text-4xl font-bold text-green-600">{cashbackRate}%</span>
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
                                <div className="flex flex-row gap-2 content-center items-center justify-center">
                                    <Avatar>
                                        <AvatarImage src={voucher.avatar} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold mb-2">{voucher.title}</h3>
                                        <p className="text-sm text-gray-600 font-sans">{voucher.description}</p>
                                </CardContent>
                                </div>
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

