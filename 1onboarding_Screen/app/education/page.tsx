import { CheckCircle, PlayCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DiabetesEducationHub() {
  // Sample data - in a real app this would come from a database
  const completedLessons = 2
  const totalLessons = 8
  const completionPercentage = (completedLessons / totalLessons) * 100

  const freeLessons = [
    {
      id: 1,
      title: "What is Type 1 and Type 2 Diabetes?",
      description: "Learn the fundamental differences between Type 1 and Type 2 diabetes, causes, and risk factors.",
      duration: "15 min",
      completed: true,
    },
    {
      id: 2,
      title: "How to Use Insulin Safely",
      description: "A comprehensive guide to insulin types, injection techniques, and safety protocols.",
      duration: "20 min",
      completed: true,
    },
    {
      id: 3,
      title: "Diabetes and Nutrition Basics",
      description: "Understand how different foods affect your blood sugar and learn about balanced meal planning.",
      duration: "25 min",
      completed: false,
    },
    {
      id: 4,
      title: "Monitoring Blood Glucose",
      description: "Learn proper techniques for checking your blood sugar and understanding your readings.",
      duration: "10 min",
      completed: false,
    },
  ]

  const proLessons = [
    {
      id: 5,
      title: "Autoantibody Reset Protocol",
      description: "Advanced strategies to help manage autoimmune responses in Type 1 diabetes.",
      duration: "30 min",
      completed: false,
      isPro: true,
    },
    {
      id: 6,
      title: "Beta-Cell Regeneration Guide",
      description: "Explore cutting-edge research on supporting pancreatic beta-cell function and regeneration.",
      duration: "45 min",
      completed: false,
      isPro: true,
    },
    {
      id: 7,
      title: "Snack Smart Guide",
      description: "Detailed guide to optimal snacking choices for stable blood sugar throughout the day.",
      duration: "20 min",
      completed: false,
      isPro: true,
    },
    {
      id: 8,
      title: "Exercise Optimization for Diabetics",
      description: "Personalized exercise strategies to improve insulin sensitivity and glucose control.",
      duration: "35 min",
      completed: false,
      isPro: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Beta Banner */}
      <div className="bg-teal-600 text-white p-3 text-center font-medium">
        Beta Mode: All Pro features unlocked for testing
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Diabetes Education Hub</h1>
            <p className="text-gray-600 mt-1">Learn to manage your diabetes with expert-led lessons</p>
          </div>

          <div className="mt-4 md:mt-0 bg-white p-4 rounded-lg shadow-sm border w-full md:w-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Your Progress</span>
              <span className="text-sm font-medium text-teal-600">
                {completedLessons}/{totalLessons} Completed
              </span>
            </div>
            <Progress value={completionPercentage} className="h-2 w-full md:w-64" />
          </div>
        </div>

        {/* Free Lessons Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Free Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {freeLessons.map((lesson) => (
              <Card key={lesson.id} className="border-gray-200 hover:border-teal-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold">{lesson.title}</CardTitle>
                    {lesson.completed ? (
                      <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                        <CheckCircle className="h-3.5 w-3.5 mr-1" />
                        Completed
                      </Badge>
                    ) : null}
                  </div>
                  <CardDescription className="text-gray-600 mt-1">{lesson.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-gray-500">{lesson.duration}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={lesson.completed ? "outline" : "default"}
                    className={`w-full ${lesson.completed ? "text-teal-700 border-teal-200" : "bg-teal-600 hover:bg-teal-700"}`}
                  >
                    <PlayCircle className="h-4 w-4 mr-2" />
                    {lesson.completed ? "Review Lesson" : "Start Lesson"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Pro Lessons Section */}
        <section>
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Pro Lessons</h2>
            <Badge className="ml-2 bg-gradient-to-r from-purple-500 to-indigo-600">Premium Content</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {proLessons.map((lesson) => (
              <Card key={lesson.id} className="border-gray-200 hover:border-indigo-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <CardTitle className="text-lg font-semibold">{lesson.title}</CardTitle>
                    </div>
                    {lesson.isPro && (
                      <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                        PRO
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-gray-600 mt-1">{lesson.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-gray-500">{lesson.duration}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full bg-indigo-600 hover:bg-indigo-700">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Start Lesson
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
