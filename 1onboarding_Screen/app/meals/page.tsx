"use client"

import { useState } from "react"
import { Clock, Droplets, Plus, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { useToast } from "@/hooks/use-toast"

export default function DiabetesTracker() {
  const { toast } = useToast()
  const [dietType, setDietType] = useState("keto")
  const [meals, setMeals] = useState([{ id: 1, time: "08:00", notes: "Eggs and avocado" }])
  const [hydrationLevel, setHydrationLevel] = useState(2)

  const handleAddMeal = () => {
    const newId = meals.length > 0 ? Math.max(...meals.map((meal) => meal.id)) + 1 : 1
    setMeals([...meals, { id: newId, time: "", notes: "" }])
  }

  const handleMealChange = (id: number, field: string, value: string) => {
    setMeals(meals.map((meal) => (meal.id === id ? { ...meal, [field]: value } : meal)))
  }

  const handleSave = () => {
    toast({
      title: "Progress saved",
      description: "Your meal and supplement data has been saved successfully.",
    })
  }

  return (
    <div className="container mx-auto py-6 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Diabetes Management</h1>
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          <Save className="mr-2 h-4 w-4" />
          Save Progress
        </Button>
      </div>

      <div className="grid gap-6">
        {/* Diet Type Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Diet Type</CardTitle>
            <CardDescription>Select your current diet approach</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue={dietType} onValueChange={setDietType} className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fasting" id="fasting" />
                <Label htmlFor="fasting" className="font-medium">
                  Fasting Day
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="keto" id="keto" />
                <Label htmlFor="keto" className="font-medium">
                  Keto Day
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="refeed" id="refeed" />
                <Label htmlFor="refeed" className="font-medium">
                  Refeed Day
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Meal Logger */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Meal Logger</CardTitle>
              <CardDescription>Track what you eat and when</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={handleAddMeal}>
              <Plus className="h-4 w-4 mr-2" />
              Add Meal
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {meals.map((meal) => (
                <div key={meal.id} className="grid grid-cols-4 gap-4 items-start">
                  <div className="col-span-1">
                    <Label htmlFor={`time-${meal.id}`}>Time</Label>
                    <div className="flex items-center mt-2">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Input
                        id={`time-${meal.id}`}
                        type="time"
                        value={meal.time}
                        onChange={(e) => handleMealChange(meal.id, "time", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <Label htmlFor={`notes-${meal.id}`}>Food Notes</Label>
                    <Textarea
                      id={`notes-${meal.id}`}
                      placeholder="What did you eat?"
                      className="mt-2"
                      value={meal.notes}
                      onChange={(e) => handleMealChange(meal.id, "notes", e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Supplement Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Supplement Schedule</CardTitle>
            <CardDescription>Track supplements to take before or after meals</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="morning" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="morning">Morning</TabsTrigger>
                <TabsTrigger value="afternoon">Afternoon</TabsTrigger>
                <TabsTrigger value="evening">Evening</TabsTrigger>
              </TabsList>
              <TabsContent value="morning">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg bg-muted/30">
                    <h3 className="font-medium mb-2">Before Breakfast</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Toggle aria-label="Toggle Vitamin D" className="justify-start">
                        Vitamin D (2000 IU)
                      </Toggle>
                      <Toggle aria-label="Toggle Magnesium" className="justify-start">
                        Magnesium (400mg)
                      </Toggle>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">After Breakfast</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Toggle aria-label="Toggle Berberine" className="justify-start">
                        Berberine (500mg)
                      </Toggle>
                      <Toggle aria-label="Toggle Chromium" className="justify-start">
                        Chromium (200mcg)
                      </Toggle>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="afternoon">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg bg-muted/30">
                    <h3 className="font-medium mb-2">Before Lunch</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Toggle aria-label="Toggle ALA" className="justify-start">
                        Alpha Lipoic Acid (600mg)
                      </Toggle>
                      <Toggle aria-label="Toggle Cinnamon" className="justify-start">
                        Cinnamon Extract (500mg)
                      </Toggle>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">After Lunch</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Toggle aria-label="Toggle Berberine" className="justify-start">
                        Berberine (500mg)
                      </Toggle>
                      <Toggle aria-label="Toggle Omega-3" className="justify-start">
                        Omega-3 (1000mg)
                      </Toggle>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="evening">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg bg-muted/30">
                    <h3 className="font-medium mb-2">Before Dinner</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Toggle aria-label="Toggle Gymnema" className="justify-start">
                        Gymnema Sylvestre (400mg)
                      </Toggle>
                      <Toggle aria-label="Toggle Bitter Melon" className="justify-start">
                        Bitter Melon Extract (500mg)
                      </Toggle>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">After Dinner</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Toggle aria-label="Toggle Berberine" className="justify-start">
                        Berberine (500mg)
                      </Toggle>
                      <Toggle aria-label="Toggle Magnesium" className="justify-start">
                        Magnesium Glycinate (200mg)
                      </Toggle>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Hydration Tracker */}
        <Card>
          <CardHeader>
            <CardTitle>Hydration Reminder</CardTitle>
            <CardDescription>Track your water intake throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Droplets className="h-6 w-6 text-green-500 mr-2" />
              <div className="flex-1">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((level) => (
                    <button
                      key={level}
                      className={`h-8 flex-1 rounded-sm transition-colors ${
                        level <= hydrationLevel ? "bg-green-500" : "bg-muted hover:bg-muted-foreground/20"
                      }`}
                      onClick={() => setHydrationLevel(level)}
                      aria-label={`Set hydration level to ${level}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{hydrationLevel} of 8 glasses consumed today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
