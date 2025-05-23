"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Activity, Upload, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Daily Tracker",
    description: "Log your glucose levels, medication, meals, and activity in one place for better health management.",
    icon: <Activity className="h-12 w-12 text-blue-500" />,
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Data Upload",
    description: "Seamlessly sync data from your glucose monitor and other devices for comprehensive tracking.",
    icon: <Upload className="h-12 w-12 text-blue-500" />,
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Education Hub",
    description: "Access expert articles, videos, and personalized tips to help manage your diabetes effectively.",
    icon: <BookOpen className="h-12 w-12 text-blue-500" />,
    image: "/placeholder.svg?height=200&width=350",
  },
]

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Skip button */}
      <div className="flex justify-end p-4">
        <Button variant="ghost" className="text-blue-600">
          Skip
        </Button>
      </div>

      {/* Welcome message */}
      <div className="flex flex-col items-center justify-center px-4 pt-8 text-center">
        <h1 className="text-3xl font-bold text-blue-900 md:text-4xl">Welcome to DiabetesHealth</h1>
        <p className="mt-2 max-w-md text-gray-600">
          Your personal companion for managing diabetes with confidence and ease.
        </p>
      </div>

      {/* Feature carousel */}
      <div className="relative mx-auto mt-8 w-full max-w-md px-4 md:max-w-lg">
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <Card key={index} className="min-w-full border-0">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h2 className="mb-2 text-xl font-semibold text-blue-900">{feature.title}</h2>
                  <p className="mb-6 text-center text-gray-600">{feature.description}</p>
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={350}
                    height={200}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Carousel navigation */}
        <div className="mt-4 flex items-center justify-between">
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

          {/* Progress indicator */}
          <div className="flex space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 w-2.5 rounded-full ${currentSlide === index ? "bg-blue-600" : "bg-blue-200"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

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
      </div>

      {/* Action buttons */}
      <div className="mt-8 flex flex-col items-center space-y-3 px-4">
        <Button className="w-full max-w-md bg-blue-600 text-white hover:bg-blue-700">Start Pro Trial</Button>
        <Button
	 asChild={false}
 	 onClick={() => console.log("Continue button clicked")}
  	variant="outline"
  	className="w-full max-w-md border-blue-300 text-blue-700"
	>
 	 Continue in Free Mode
	</Button>
 
	<Button
	 asChild={false}
  	onClick={() => console.log("Explore button clicked")}
  	variant="ghost"
  	className="w-full max-w-md text-gray-600"
	>
  	Explore as Guest
	</Button>
      </div>

      {/* Footer */}
      <footer className="mt-auto p-6 text-center text-sm text-gray-500">
        <div>
          By continuing, you agree to our{" "}
          <Link href="#" className="text-blue-600 underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-blue-600 underline">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  )
}
