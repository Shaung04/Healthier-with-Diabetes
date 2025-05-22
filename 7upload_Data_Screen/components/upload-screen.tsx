"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2, Clock, FileUp, Mail, AlertCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ManualEntryForm } from "@/components/manual-entry-form"
import { UpgradePrompt } from "@/components/upgrade-prompt"

type UploadStatus = "idle" | "uploading" | "success" | "error"

interface UploadState {
  cgm: UploadStatus
  pump: UploadStatus
  cgmProgress: number
  pumpProgress: number
}

export function UploadScreen() {
  const [uploadState, setUploadState] = useState<UploadState>({
    cgm: "idle",
    pump: "idle",
    cgmProgress: 0,
    pumpProgress: 0,
  })

  const [uploadCount, setUploadCount] = useState(2) // Remaining uploads for free users

  const simulateUpload = (type: "cgm" | "pump") => {
    // Set status to uploading
    setUploadState((prev) => ({
      ...prev,
      [type]: "uploading",
      [`${type}Progress`]: 0,
    }))

    // Simulate progress
    const interval = setInterval(() => {
      setUploadState((prev) => {
        const progress = prev[`${type}Progress` as keyof UploadState] as number

        if (progress >= 100) {
          clearInterval(interval)
          return {
            ...prev,
            [type]: "success",
            [`${type}Progress`]: 100,
          }
        }

        return {
          ...prev,
          [`${type}Progress`]: progress + 10,
        }
      })
    }, 300)

    // Decrease upload count for free users
    if (uploadCount > 0) {
      setUploadCount((prev) => prev - 1)
    }
  }

  const handleFileUpload = (type: "cgm" | "pump") => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      simulateUpload(type)
    }
  }

  const getStatusIcon = (status: UploadStatus) => {
    switch (status) {
      case "idle":
        return <FileUp className="h-5 w-5 text-muted-foreground" />
      case "uploading":
        return <Clock className="h-5 w-5 text-blue-500 animate-pulse" />
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Diabetes Data Upload</h1>
        <p className="text-muted-foreground mt-2">Upload your device data or manually enter readings</p>
      </div>

      <div className="grid gap-6">
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Device Upload</TabsTrigger>
            <TabsTrigger value="manual">Manual Entry</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upload Device Data</CardTitle>
                <CardDescription>Upload data from your CGM or insulin pump</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* CGM Upload */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(uploadState.cgm)}
                      <Label htmlFor="cgm-upload" className="font-medium">
                        CGM Data
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Label
                        htmlFor="cgm-upload"
                        className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
                          uploadCount === 0
                            ? "bg-gray-100 text-gray-400"
                            : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                      >
                        Select File
                      </Label>
                      <Input
                        id="cgm-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileUpload("cgm")}
                        disabled={uploadCount === 0}
                      />
                    </div>
                  </div>
                  {uploadState.cgm === "uploading" && (
                    <div className="space-y-1">
                      <Progress value={uploadState.cgmProgress} className="h-2" />
                      <p className="text-xs text-muted-foreground text-right">{uploadState.cgmProgress}%</p>
                    </div>
                  )}
                </div>

                {/* Insulin Pump Upload */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(uploadState.pump)}
                      <Label htmlFor="pump-upload" className="font-medium">
                        Insulin Pump Data
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Label
                        htmlFor="pump-upload"
                        className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
                          uploadCount === 0
                            ? "bg-gray-100 text-gray-400"
                            : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                      >
                        Select File
                      </Label>
                      <Input
                        id="pump-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileUpload("pump")}
                        disabled={uploadCount === 0}
                      />
                    </div>
                  </div>
                  {uploadState.pump === "uploading" && (
                    <div className="space-y-1">
                      <Progress value={uploadState.pumpProgress} className="h-2" />
                      <p className="text-xs text-muted-foreground text-right">{uploadState.pumpProgress}%</p>
                    </div>
                  )}
                </div>

                {uploadCount === 0 && <UpgradePrompt />}

                {uploadCount > 0 && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">{uploadCount}</span> uploads remaining on free plan
                  </p>
                )}
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Separator />
                <div className="flex flex-wrap gap-3 w-full">
                  <Button variant="outline" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Export to PDF
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email to Doctor
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="manual">
            <Card>
              <CardHeader>
                <CardTitle>Manual Data Entry</CardTitle>
                <CardDescription>Manually enter your glucose readings and insulin doses</CardDescription>
              </CardHeader>
              <CardContent>
                <ManualEntryForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
