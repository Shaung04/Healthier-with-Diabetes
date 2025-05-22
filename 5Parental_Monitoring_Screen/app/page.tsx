"use client"

import { useState } from "react"
import {
  Award,
  Bell,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Home,
  LineChart,
  MessageSquare,
  Settings,
  Star,
  User,
} from "lucide-react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for glucose levels
const glucoseData = [
  { time: "6AM", level: 120 },
  { time: "8AM", level: 140 },
  { time: "10AM", level: 110 },
  { time: "12PM", level: 130 },
  { time: "2PM", level: 125 },
  { time: "4PM", level: 115 },
  { time: "6PM", level: 135 },
  { time: "8PM", level: 120 },
  { time: "10PM", level: 110 },
]

// Sample data for insulin usage
const insulinData = [
  { time: "8AM", units: 4 },
  { time: "12PM", units: 5 },
  { time: "6PM", units: 4 },
]

// Sample data for tasks
const tasks = [
  { id: 1, name: "Morning glucose check", completed: true, time: "7:00 AM" },
  { id: 2, name: "Breakfast insulin dose", completed: true, time: "8:00 AM" },
  { id: 3, name: "Mid-morning snack", completed: true, time: "10:30 AM" },
  { id: 4, name: "Lunch glucose check", completed: true, time: "12:00 PM" },
  { id: 5, name: "Lunch insulin dose", completed: true, time: "12:15 PM" },
  { id: 6, name: "Afternoon glucose check", completed: false, time: "3:00 PM" },
  { id: 7, name: "Dinner glucose check", completed: false, time: "6:00 PM" },
  { id: 8, name: "Dinner insulin dose", completed: false, time: "6:15 PM" },
  { id: 9, name: "Bedtime glucose check", completed: false, time: "9:00 PM" },
]

// Sample data for achievements
const achievements = [
  { id: 1, name: "Perfect Week", description: "Completed all tasks for 7 days straight", earned: true },
  { id: 2, name: "Glucose Master", description: "Kept glucose levels in target range for 5 days", earned: true },
  { id: 3, name: "Task Champion", description: "Completed all daily tasks on time", earned: false },
  { id: 4, name: "Insulin Pro", description: "Administered all insulin doses correctly for 10 days", earned: false },
]

// Sample data for children
const children = [
  { id: 1, name: "Emma", age: 10, avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Noah", age: 8, avatar: "/placeholder.svg?height=40&width=40" },
]

export default function DiabetesDashboard() {
  const [selectedChild, setSelectedChild] = useState(children[0])
  const [showBetaBanner, setShowBetaBanner] = useState(true)

  const completedTasks = tasks.filter((task) => task.completed).length
  const totalTasks = tasks.length
  const completionPercentage = Math.round((completedTasks / totalTasks) * 100)

  return (
    <div className="flex min-h-screen flex-col">
      {showBetaBanner && (
        <div className="bg-yellow-500 text-black p-2 text-center relative">
          <span className="font-semibold">BETA MODE</span>: All features currently unlocked for testing.
          <button className="absolute right-4 top-2 text-black" onClick={() => setShowBetaBanner(false)}>
            ×
          </button>
        </div>
      )}

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="hidden w-64 flex-col bg-muted/40 border-r p-4 md:flex">
          <div className="flex items-center gap-2 mb-8">
            <LineChart className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">DiabetesTracker</h1>
          </div>

          <nav className="space-y-1.5">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="#">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </a>
            </Button>
            <Button variant="secondary" className="w-full justify-start" asChild>
              <a href="#">
                <LineChart className="mr-2 h-4 w-4" />
                Glucose Trends
              </a>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="#">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </a>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="#">
                <Award className="mr-2 h-4 w-4" />
                Achievements
              </a>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="#">
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
              </a>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="#">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </a>
            </Button>
          </nav>

          <div className="mt-auto">
            <Separator className="my-4" />
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary/10 p-1">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Parent Account</p>
                <p className="text-xs text-muted-foreground">John Smith</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <header className="border-b bg-background p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold md:hidden">DiabetesTracker</h1>
              <h2 className="text-lg font-medium hidden md:block">Dashboard</h2>
            </div>

            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <img
                      src={selectedChild.avatar || "/placeholder.svg"}
                      alt={selectedChild.name}
                      className="h-6 w-6 rounded-full"
                    />
                    {selectedChild.name}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {children.map((child) => (
                    <DropdownMenuItem
                      key={child.id}
                      onClick={() => setSelectedChild(child)}
                      className="flex items-center gap-2"
                    >
                      <img src={child.avatar || "/placeholder.svg"} alt={child.name} className="h-6 w-6 rounded-full" />
                      {child.name}, {child.age} years
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </header>

          <main className="p-4 md:p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{selectedChild.name}'s Overview</h2>
              <Button>Send Update to Parent</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Current Glucose</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">120 mg/dL</div>
                  <p className="text-xs text-muted-foreground">Last checked 30 mins ago</p>
                  <Badge className="mt-2" variant="outline">
                    In Range
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Daily Insulin</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">13 units</div>
                  <p className="text-xs text-muted-foreground">3 doses today</p>
                  <Badge className="mt-2" variant="outline">
                    On Schedule
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Task Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{completionPercentage}%</div>
                  <Progress value={completionPercentage} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {completedTasks} of {totalTasks} tasks completed
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2</div>
                  <div className="flex mt-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 text-muted-foreground/20" />
                    <Star className="h-5 w-5 text-muted-foreground/20" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">2 badges earned this week</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="glucose">
              <TabsList>
                <TabsTrigger value="glucose">Glucose Levels</TabsTrigger>
                <TabsTrigger value="insulin">Insulin Usage</TabsTrigger>
                <TabsTrigger value="tasks">Daily Tasks</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="glucose" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Glucose Levels</CardTitle>
                    <CardDescription>Today's glucose readings and trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={glucoseData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="time" />
                          <YAxis domain={[70, 200]} />
                          <CartesianGrid strokeDasharray="3 3" />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="level"
                            stroke="#0ea5e9"
                            fillOpacity={1}
                            fill="url(#colorLevel)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium">Average</p>
                      <p className="text-2xl font-bold">123 mg/dL</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Range</p>
                      <p className="text-2xl font-bold">110-140 mg/dL</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Target</p>
                      <p className="text-2xl font-bold">80-130 mg/dL</p>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="insulin" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Insulin Usage</CardTitle>
                    <CardDescription>Today's insulin doses and schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {insulinData.map((dose, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{dose.time}</p>
                              <p className="text-sm text-muted-foreground">Regular dose</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold">{dose.units} units</p>
                            <Badge variant="outline" className="ml-auto">
                              Completed
                            </Badge>
                          </div>
                        </div>
                      ))}

                      <div className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-muted p-2">
                            <Clock className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">9:00 PM</p>
                            <p className="text-sm text-muted-foreground">Bedtime dose</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">- units</p>
                          <Badge variant="outline" className="ml-auto">
                            Upcoming
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex justify-between w-full">
                      <div>
                        <p className="text-sm font-medium">Total Today</p>
                        <p className="text-2xl font-bold">13 units</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Daily Target</p>
                        <p className="text-2xl font-bold">16-18 units</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="tasks" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Tasks</CardTitle>
                    <CardDescription>Track daily diabetes management tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tasks.map((task) => (
                        <div key={task.id} className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-4">
                            {task.completed ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                            ) : (
                              <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                            )}
                            <div>
                              <p
                                className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}
                              >
                                {task.name}
                              </p>
                              <p className="text-sm text-muted-foreground">{task.time}</p>
                            </div>
                          </div>
                          <Badge variant={task.completed ? "outline" : "secondary"}>
                            {task.completed ? "Completed" : "Pending"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium">Overall Progress</p>
                        <p className="text-sm font-medium">{completionPercentage}%</p>
                      </div>
                      <Progress value={completionPercentage} className="h-2" />
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements & Rewards</CardTitle>
                    <CardDescription>Badges and rewards for meeting health goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className={`border rounded-lg p-4 ${achievement.earned ? "bg-primary/5" : "bg-muted"}`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`rounded-full p-2 ${achievement.earned ? "bg-primary/10" : "bg-muted-foreground/10"}`}
                            >
                              {achievement.earned ? (
                                <Award className="h-6 w-6 text-primary" />
                              ) : (
                                <Award className="h-6 w-6 text-muted-foreground" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{achievement.name}</p>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-between items-center">
                            {achievement.earned ? (
                              <div className="flex">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              </div>
                            ) : (
                              <div className="flex">
                                <Star className="h-5 w-5 text-muted-foreground/20" />
                                <Star className="h-5 w-5 text-muted-foreground/20" />
                                <Star className="h-5 w-5 text-muted-foreground/20" />
                              </div>
                            )}
                            <Badge variant={achievement.earned ? "default" : "outline"}>
                              {achievement.earned ? "Earned" : "In Progress"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}
