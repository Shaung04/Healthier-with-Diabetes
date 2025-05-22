import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"

export function UpgradePrompt() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-yellow-100 border border-yellow-200 rounded-lg p-4">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-shrink-0 bg-yellow-200 p-3 rounded-full">
          <Crown className="h-6 w-6 text-yellow-600" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-semibold text-yellow-800">Upgrade to Pro</h3>
          <p className="text-sm text-yellow-700 mt-1">
            Unlock unlimited uploads, advanced analytics, and priority support
          </p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Upgrade Now</Button>
      </div>
    </div>
  )
}
