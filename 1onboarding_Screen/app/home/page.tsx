import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Home, Utensils, BookOpen, BarChart2, Settings, Plus, Bell } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Healthier</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container p-4 space-y-6">
        {/* Today's Mission */}
        <Card className="bg-gradient-to-r from-green-50 to-teal-50 border-green-100">
          <CardHeader className="pb-2">
            <CardDescription className="text-green-700">TODAY'S MISSION</CardDescription>
            <CardTitle className="text-lg text-green-900">Take a 15-minute walk after lunch</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button
              variant="outline"
              className="text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800"
            >
              Complete
            </Button>
          </CardFooter>
        </Card>

        {/* Daily Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Daily Progress</h2>
            <span className="text-sm text-muted-foreground">3/5 completed</span>
          </div>
          <Progress value={60} className="h-2" />
        </div>

        {/* Today's Tasks */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Today's Tasks</CardTitle>
            <CardDescription>Complete these tasks to stay on track</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox id="task-1" checked />
              <div className="grid gap-1.5">
                <label
                  htmlFor="task-1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 line-through"
                >
                  Morning medication
                </label>
                <p className="text-sm text-muted-foreground line-through">8:00 AM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="task-2" checked />
              <div className="grid gap-1.5">
                <label
                  htmlFor="task-2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 line-through"
                >
                  Check blood glucose (fasting)
                </label>
                <p className="text-sm text-muted-foreground line-through">8:30 AM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="task-3" checked />
              <div className="grid gap-1.5">
                <label
                  htmlFor="task-3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 line-through"
                >
                  Breakfast
                </label>
                <p className="text-sm text-muted-foreground line-through">9:00 AM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="task-4" />
              <div className="grid gap-1.5">
                <label
                  htmlFor="task-4"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Check blood glucose (after lunch)
                </label>
                <p className="text-sm text-muted-foreground">2:00 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="task-5" />
              <div className="grid gap-1.5">
                <label
                  htmlFor="task-5"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Evening medication
                </label>
                <p className="text-sm text-muted-foreground">8:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Glucose Input */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Log Blood Glucose</CardTitle>
            <CardDescription>Record your latest reading</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input type="number" placeholder="Enter value (mg/dL)" className="flex-1" />
              <Button>Save</Button>
            </div>
          </CardContent>
        </Card>

        {/* Supplement Reminder */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription className="text-blue-700">SUPPLEMENT REMINDER</CardDescription>
            <CardTitle className="text-lg text-blue-900">Take Vitamin D with dinner</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-100 hover:text-blue-800">
              Mark as taken
            </Button>
          </CardFooter>
        </Card>

        {/* Quick Add Button */}
        <div className="fixed bottom-20 right-4">
          <Button size="lg" className="h-14 w-14 rounded-full shadow-lg">
            <Plus className="h-6 w-6" />
            <span className="sr-only">Add new entry</span>
          </Button>
        </div>
      </main>

      {/* Navigation Bar */}
      <nav className="sticky bottom-0 z-10 bg-white border-t">
        <div className="container flex items-center justify-between p-2">
          <Link href="#" className="flex flex-col items-center py-2 px-3 text-green-600">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="#" className="flex flex-col items-center py-2 px-3 text-gray-500">
            <Utensils className="h-6 w-6" />
            <span className="text-xs mt-1">Meals</span>
          </Link>
          <Link href="#" className="flex flex-col items-center py-2 px-3 text-gray-500">
            <BookOpen className="h-6 w-6" />
            <span className="text-xs mt-1">Learn</span>
          </Link>
          <Link href="#" className="flex flex-col items-center py-2 px-3 text-gray-500">
            <BarChart2 className="h-6 w-6" />
            <span className="text-xs mt-1">Progress</span>
          </Link>
          <Link href="#" className="flex flex-col items-center py-2 px-3 text-gray-500">
            <Settings className="h-6 w-6" />
            <span className="text-xs mt-1">Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
