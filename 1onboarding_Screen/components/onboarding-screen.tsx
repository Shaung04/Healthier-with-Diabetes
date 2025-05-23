"use client"
 
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Activity, Upload, BookOpen } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
 
const features = [
  {
    title: "Daily Tracker",
    description:
      "Log your glucose levels, medication, meals, and activity in one place for better health management.",
    icon: <Activity className="h-12 w-12 text-blue-500" />,
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Data Upload",
    description:
      "Seamlessly sync data from your glucose monitor and other devices for comprehensive tracking.",
    icon: <Upload className="h-12 w-12 text-blue-500" />,
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Education Hub",
    description:
      "Access expert articles, videos, and personalized tips to help manage your diabetes effectively.",
    icon: <BookOpen className="h-12 w-12 text-blue-500" />,
    image: "/placeholder.svg?height=200&width=350",
  },
]
 
export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()
 
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? prev : prev + 1))
  }
 
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1))
  }
 
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }
 
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 pt-8 text-center">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-blue-700 mb-4">{features[currentSlide].title}</h1>
          <p className="text-gray-600 mb-6">{features[currentSlide].description}</p>
          {features[currentSlide].icon}
        </div>
 
        <div className="mt-6 flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="rounded-full border-blue-200"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide === features.length - 1}
            className="rounded-full border-blue-200"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
 
        {/* Action buttons */}
        <div className="mt-8 flex flex-col items-center space-y-3 px-4">
          <Button
            onClick={() => router.push("/start-trial")}
            variant="outline"
            className="w-full max-w-md border-blue-300 text-blue-700"
          >
            Start Pro Trial
          </Button>
 
          <Button
            onClick={() => router.push("/free-mode")}
            variant="outline"
            className="w-full max-w-md border-blue-300 text-blue-700"
          >
            Continue in Free Mode
          </Button>
 
          <Button
            onClick={() => router.push("/guest-dashboard")}
            variant="ghost"
            className="w-full max-w-md text-gray-600"
          >
            Explore as Guest
          </Button>
        </div>
      </div>
 
      {/* Footer */}
      <footer className="mt-auto p-6 text-center text-sm text-gray-500">
        <div>
          By continuing, you agree to our{" "}
          <Link href="#" className="text-blue-600 underline">Terms of Use</Link> and{" "}
          <Link href="#" className="text-blue-600 underline">Privacy Policy</Link>.
        </div>
      </footer>
    </main>
  )
}