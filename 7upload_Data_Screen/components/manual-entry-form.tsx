"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Save } from "lucide-react"

interface ReadingEntry {
  id: string
  timestamp: string
  glucoseLevel: string
  insulinDose: string
  mealType: string
}

export function ManualEntryForm() {
  const [entries, setEntries] = useState<ReadingEntry[]>([])
  const [currentEntry, setCurrentEntry] = useState<Omit<ReadingEntry, "id">>({
    timestamp: new Date().toISOString().slice(0, 16),
    glucoseLevel: "",
    insulinDose: "",
    mealType: "none",
  })

  const handleAddEntry = () => {
    if (!currentEntry.glucoseLevel) return

    const newEntry: ReadingEntry = {
      ...currentEntry,
      id: Date.now().toString(),
    }

    setEntries([...entries, newEntry])
    setCurrentEntry({
      timestamp: new Date().toISOString().slice(0, 16),
      glucoseLevel: "",
      insulinDose: "",
      mealType: "none",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCurrentEntry((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setCurrentEntry((prev) => ({ ...prev, mealType: value }))
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="timestamp">Date & Time</Label>
          <Input
            id="timestamp"
            name="timestamp"
            type="datetime-local"
            value={currentEntry.timestamp}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="glucoseLevel">Glucose Level (mg/dL)</Label>
          <Input
            id="glucoseLevel"
            name="glucoseLevel"
            type="number"
            placeholder="120"
            value={currentEntry.glucoseLevel}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="insulinDose">Insulin Dose (units)</Label>
          <Input
            id="insulinDose"
            name="insulinDose"
            type="number"
            placeholder="0"
            value={currentEntry.insulinDose}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mealType">Meal Type</Label>
          <Select value={currentEntry.mealType} onValueChange={handleSelectChange}>
            <SelectTrigger id="mealType">
              <SelectValue placeholder="Select meal type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No meal</SelectItem>
              <SelectItem value="breakfast">Breakfast</SelectItem>
              <SelectItem value="lunch">Lunch</SelectItem>
              <SelectItem value="dinner">Dinner</SelectItem>
              <SelectItem value="snack">Snack</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="button" onClick={handleAddEntry} className="w-full" disabled={!currentEntry.glucoseLevel}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Entry
      </Button>

      {entries.length > 0 && (
        <>
          <Separator />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Glucose (mg/dL)</TableHead>
                  <TableHead>Insulin (units)</TableHead>
                  <TableHead>Meal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>{new Date(entry.timestamp).toLocaleString()}</TableCell>
                    <TableCell>{entry.glucoseLevel}</TableCell>
                    <TableCell>{entry.insulinDose || "-"}</TableCell>
                    <TableCell className="capitalize">{entry.mealType === "none" ? "-" : entry.mealType}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Button className="w-full">
            <Save className="mr-2 h-4 w-4" />
            Save All Entries
          </Button>
        </>
      )}
    </div>
  )
}
