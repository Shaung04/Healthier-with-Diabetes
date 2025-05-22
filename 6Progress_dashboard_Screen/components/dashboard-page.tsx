"use client"

import { useState } from "react"
import {
  Award,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  Droplet,
  LineChart,
  List,
  Pill,
  Plus,
  Syringe,
  Target,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GlucoseChart } from "@/components/glucose-chart"
import { InsulinChart } from "@/components/insulin-chart"
import { TaskCompletionChart } from "@/components/task-completion-chart"

export function DashboardPage() {
  const [timeRange, setTimeRange] = useState("daily")

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Droplet className="h-6 w-6 text-blue-500" />
          <span className="text-lg font-semibold">DiabetesTracker</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Badge variant="outline" className="hidden gap-1 px-3 py-1 md:flex">
            <Clock className="h-3.5 w-3.5" />
            <span>Last sync: 10 minutes ago</span>
          </Badge>
          <Button size="sm" variant="outline" className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Add Reading</span>
          </Button>
          <div className="relative h-8 w-8 rounded-full bg-muted">
            <span className="flex h-full w-full items-center justify-center text-sm font-medium">JD</span>
          </div>
        </div>
      </header>
      <div className="flex-1 space-y-4 p-4 pt-6 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Track and monitor your diabetes management progress</p>
          </div>
          <div className="ml-auto flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-[180px] justify-between">
                    {timeRange === "daily" && "Daily View"}
                    {timeRange === "weekly" && "Weekly View"}
                    {timeRange === "monthly" && "Monthly View"}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTimeRange("daily")}>Daily View</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTimeRange("weekly")}>Weekly View</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTimeRange("monthly")}>Monthly View</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" size="icon">
                <Calendar className="h-4 w-4" />
                <span className="sr-only">Select date range</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-x-0 top-0 flex items-center justify-center">
            <div className="bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
              Beta Mode: All Pro features unlocked for testing
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Glucose</CardTitle>
              <Droplet className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">118 mg/dL</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">↓ 12%</span> from last {timeRange}
              </p>
              <div className="mt-4">
                <Progress value={72} className="h-2" />
                <div className="mt-1 flex text-xs justify-between">
                  <span>Target: 70-140 mg/dL</span>
                  <span className="text-green-500">72% in range</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Insulin</CardTitle>
              <Syringe className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42.5 units</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">↓ 8%</span> from last {timeRange}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Basal</span>
                  <span className="font-medium">24 units</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Bolus</span>
                  <span className="font-medium">18.5 units</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Task Completion</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">↑ 10%</span> from last {timeRange}
              </p>
              <div className="mt-4">
                <Progress value={85} className="h-2" />
                <div className="mt-1 grid grid-cols-3 gap-1 text-xs">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Readings</span>
                    <span className="font-medium">12/12</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Meds</span>
                    <span className="font-medium">4/4</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Logs</span>
                    <span className="font-medium">5/8</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Award className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 New</div>
              <p className="text-xs text-muted-foreground">8 total achievements</p>
              <div className="mt-4 flex flex-wrap gap-1">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/30"
                >
                  Basal Reduced 10%
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/30"
                >
                  3 Days Without Bolus Correction
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 dark:hover:bg-purple-900/30"
                >
                  7-Day Streak
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Glucose Trends</CardTitle>
              <CardDescription>Fasting glucose levels over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <GlucoseChart timeRange={timeRange} />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Insulin Usage</CardTitle>
              <CardDescription>Daily basal and bolus insulin</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <InsulinChart timeRange={timeRange} />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Task Completion</CardTitle>
              <CardDescription>Daily diabetes management tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <TaskCompletionChart timeRange={timeRange} />
            </CardContent>
          </Card>
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Daily Checklist</CardTitle>
              <CardDescription>Track your diabetes management tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Morning Glucose Check</span>
                        <span className="text-xs text-muted-foreground">7:15 AM</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Result: 112 mg/dL</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Breakfast Bolus</span>
                        <span className="text-xs text-muted-foreground">7:30 AM</span>
                      </div>
                      <span className="text-xs text-muted-foreground">4.5 units</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Lunch Glucose Check</span>
                        <span className="text-xs text-muted-foreground">12:10 PM</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Result: 135 mg/dL</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Lunch Bolus</span>
                        <span className="text-xs text-muted-foreground">12:15 PM</span>
                      </div>
                      <span className="text-xs text-muted-foreground">5.0 units</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Dinner Glucose Check</span>
                        <span className="text-xs text-muted-foreground">Due 6:00 PM</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Scheduled</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Dinner Bolus</span>
                        <span className="text-xs text-muted-foreground">Due 6:15 PM</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Scheduled</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Bedtime Glucose Check</span>
                        <span className="text-xs text-muted-foreground">Due 10:00 PM</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Scheduled</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                      <Pill className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Evening Medication</span>
                        <span className="text-xs text-muted-foreground">Due 10:15 PM</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Scheduled</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-1">
                <Plus className="h-4 w-4" />
                <span>Add Custom Task</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Your diabetes management milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="recent">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="all">All</TabsTrigger>
                </TabsList>
                <TabsContent value="recent" className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Basal Reduced 10%</div>
                      <div className="text-xs text-muted-foreground">Achieved 2 days ago</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      <Syringe className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">3 Days Without Bolus Correction</div>
                      <div className="text-xs text-muted-foreground">Achieved 3 days ago</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">7-Day Streak</div>
                      <div className="text-xs text-muted-foreground">Achieved 1 week ago</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="all" className="pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-3 text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        <Target className="h-5 w-5" />
                      </div>
                      <div className="font-medium">Basal Reduced 10%</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-3 text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        <Syringe className="h-5 w-5" />
                      </div>
                      <div className="font-medium">3 Days No Correction</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-3 text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="font-medium">7-Day Streak</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-3 text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        <Award className="h-5 w-5" />
                      </div>
                      <div className="font-medium">A1C Improved</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-3 text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                        <Droplet className="h-5 w-5" />
                      </div>
                      <div className="font-medium">90% In Range</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-3 text-center opacity-50">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400">
                        <List className="h-5 w-5" />
                      </div>
                      <div className="font-medium">30-Day Streak</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-3 text-center opacity-50">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400">
                        <LineChart className="h-5 w-5" />
                      </div>
                      <div className="font-medium">Stable Month</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-3 text-center opacity-50">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div className="font-medium">Perfect Week</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Pro Features</CardTitle>
              <CardDescription>All Pro features are unlocked during beta testing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    <LineChart className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Advanced Analytics</div>
                    <div className="text-sm text-muted-foreground">
                      Detailed trend analysis and pattern recognition for better glucose management
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Extended History</div>
                    <div className="text-sm text-muted-foreground">
                      Access up to 12 months of historical data for long-term progress tracking
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Smart Recommendations</div>
                    <div className="text-sm text-muted-foreground">
                      Personalized insulin and medication adjustment suggestions based on your data
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Advanced Achievements</div>
                    <div className="text-sm text-muted-foreground">
                      Unlock additional achievement badges and progress milestones
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Provide Beta Feedback</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
