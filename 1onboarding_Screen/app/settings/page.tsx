"use client"

import { useState } from "react"
import { Bell, CreditCard, Lock, Share2, Smartphone, User, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  const [isPro, setIsPro] = useState(false)
  const [betaMode, setBetaMode] = useState(false)

  return (
    <div className="container max-w-4xl py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
        <Badge variant={isPro ? "default" : "outline"} className={isPro ? "bg-teal-600 hover:bg-teal-700" : ""}>
          {isPro ? "Pro Plan" : "Free Plan"}
        </Badge>
      </div>

      <div className="grid gap-6">
        {/* Account Information */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-teal-600" />
              <CardTitle>Account Information</CardTitle>
            </div>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Jane Smith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="jane.smith@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthdate">Date of Birth</Label>
                <Input id="birthdate" type="date" defaultValue="1985-06-15" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Save Changes</Button>
          </CardFooter>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-teal-600" />
              <CardTitle>Notification Preferences</CardTitle>
            </div>
            <CardDescription>Control how and when you receive alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="glucose-alerts">Glucose Alerts</Label>
                <p className="text-sm text-muted-foreground">Receive alerts for high and low glucose levels</p>
              </div>
              <Switch id="glucose-alerts" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="medication-reminders">Medication Reminders</Label>
                <p className="text-sm text-muted-foreground">Get reminders for insulin doses and medications</p>
              </div>
              <Switch id="medication-reminders" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="trend-reports">Weekly Trend Reports</Label>
                <p className="text-sm text-muted-foreground">Receive weekly summaries of your glucose trends</p>
              </div>
              <Switch id="trend-reports" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-updates">App Updates</Label>
                <p className="text-sm text-muted-foreground">Get notified about new features and updates</p>
              </div>
              <Switch id="app-updates" />
            </div>
          </CardContent>
        </Card>

        {/* Data Sharing Permissions */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Share2 className="h-5 w-5 text-teal-600" />
              <CardTitle>Data Sharing Permissions</CardTitle>
            </div>
            <CardDescription>Control who can access your health data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="share-doctor">Share with Healthcare Provider</Label>
                <p className="text-sm text-muted-foreground">Allow your doctor to view your glucose data</p>
              </div>
              <Switch id="share-doctor" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="share-caregiver">Share with Caregiver</Label>
                <p className="text-sm text-muted-foreground">Allow a family member or caregiver to view your data</p>
              </div>
              <Switch id="share-caregiver" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="research-data">Contribute to Research</Label>
                <p className="text-sm text-muted-foreground">Share anonymized data to help improve diabetes care</p>
              </div>
              <Switch id="research-data" />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="data-retention">Data Retention Period</Label>
              <Select defaultValue="12months">
                <SelectTrigger>
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3months">3 months</SelectItem>
                  <SelectItem value="6months">6 months</SelectItem>
                  <SelectItem value="12months">12 months</SelectItem>
                  <SelectItem value="forever">Indefinitely</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Device Connections */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Smartphone className="h-5 w-5 text-teal-600" />
              <CardTitle>Device Connections</CardTitle>
            </div>
            <CardDescription>Manage your connected diabetes devices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Insulin Pump</h3>
                  <p className="text-sm text-muted-foreground">MediTech Pro Pump</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 border-green-200">
                  Connected
                </Badge>
              </div>
              <div className="mt-4 flex space-x-2">
                <Button variant="outline" size="sm">
                  Disconnect
                </Button>
                <Button variant="outline" size="sm">
                  Settings
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Continuous Glucose Monitor</h3>
                  <p className="text-sm text-muted-foreground">GlucoSense G7</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 border-green-200">
                  Connected
                </Badge>
              </div>
              <div className="mt-4 flex space-x-2">
                <Button variant="outline" size="sm">
                  Disconnect
                </Button>
                <Button variant="outline" size="sm">
                  Calibrate
                </Button>
                <Button variant="outline" size="sm">
                  Settings
                </Button>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Connect New Device
            </Button>
          </CardContent>
        </Card>

        {/* Pro Plan Upgrade */}
        <Card className={isPro ? "bg-muted/50" : "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200"}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-teal-600" />
              <CardTitle>{isPro ? "Pro Plan Active" : "Upgrade to Pro Plan"}</CardTitle>
            </div>
            <CardDescription>
              {isPro ? "You're enjoying all premium features" : "Get advanced features to better manage your diabetes"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 text-teal-600">✓</div>
                <p className="text-sm">Advanced glucose trend analysis</p>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 text-teal-600">✓</div>
                <p className="text-sm">Unlimited data history</p>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 text-teal-600">✓</div>
                <p className="text-sm">AI-powered meal suggestions</p>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 text-teal-600">✓</div>
                <p className="text-sm">Priority customer support</p>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 text-teal-600">✓</div>
                <p className="text-sm">Share with unlimited caregivers</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {isPro ? (
              <div className="flex space-x-2 w-full">
                <Button variant="outline" className="flex-1">
                  Manage Subscription
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => setIsPro(false)}>
                  Cancel Plan
                </Button>
              </div>
            ) : (
              <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={() => setIsPro(true)}>
                Upgrade to Pro - $9.99/month
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* Beta Mode */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-teal-600" />
              <CardTitle>Beta Features</CardTitle>
            </div>
            <CardDescription>Try experimental features before they're released</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="beta-mode">Enable Beta Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Get early access to experimental features. These may change or be removed at any time.
                </p>
              </div>
              <Switch id="beta-mode" checked={betaMode} onCheckedChange={setBetaMode} />
            </div>

            {betaMode && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-sm text-yellow-800">
                  Beta features are experimental and may not work as expected. Your feedback helps us improve!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-teal-600" />
              <CardTitle>Security</CardTitle>
            </div>
            <CardDescription>Manage your account security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch id="two-factor" />
            </div>
            <Separator />
            <Button variant="outline">Change Password</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
