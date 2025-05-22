"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Generate sample data based on time range
const generateTaskData = (timeRange: string) => {
  if (timeRange === "daily") {
    return [
      { name: "Completed", value: 17 },
      { name: "Pending", value: 3 },
    ]
  } else if (timeRange === "weekly") {
    return [
      { name: "Completed", value: 119 },
      { name: "Pending", value: 21 },
    ]
  } else {
    return [
      { name: "Completed", value: 510 },
      { name: "Pending", value: 90 },
    ]
  }
}

export function TaskCompletionChart({ timeRange }: { timeRange: string }) {
  const data = generateTaskData(timeRange)
  const COLORS = ["var(--color-completed, #10b981)", "var(--color-pending, #d1d5db)"]

  return (
    <ChartContainer
      config={{
        completed: {
          label: "Completed",
          color: "hsl(142, 76%, 36%)",
        },
        pending: {
          label: "Pending",
          color: "hsl(220, 9%, 46%)",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 flex justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#10b981]" />
          <span className="text-sm">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#d1d5db]" />
          <span className="text-sm">Pending</span>
        </div>
      </div>
    </ChartContainer>
  )
}
