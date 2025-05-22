"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Generate sample data based on time range
const generateInsulinData = (timeRange: string) => {
  if (timeRange === "daily") {
    return [
      { time: "12 AM", basal: 1.0, bolus: 0 },
      { time: "3 AM", basal: 1.0, bolus: 0 },
      { time: "6 AM", basal: 1.0, bolus: 0 },
      { time: "9 AM", basal: 1.0, bolus: 4.5 },
      { time: "12 PM", basal: 1.0, bolus: 5.0 },
      { time: "3 PM", basal: 1.0, bolus: 0 },
      { time: "6 PM", basal: 1.0, bolus: 0 },
      { time: "9 PM", basal: 1.0, bolus: 0 },
    ]
  } else if (timeRange === "weekly") {
    return [
      { time: "Mon", basal: 24, bolus: 18.5 },
      { time: "Tue", basal: 24, bolus: 19.0 },
      { time: "Wed", basal: 24, bolus: 17.5 },
      { time: "Thu", basal: 24, bolus: 18.0 },
      { time: "Fri", basal: 24, bolus: 20.5 },
      { time: "Sat", basal: 24, bolus: 21.0 },
      { time: "Sun", basal: 24, bolus: 19.5 },
    ]
  } else {
    return [
      { time: "Week 1", basal: 168, bolus: 140 },
      { time: "Week 2", basal: 168, bolus: 135 },
      { time: "Week 3", basal: 168, bolus: 130 },
      { time: "Week 4", basal: 168, bolus: 125 },
    ]
  }
}

export function InsulinChart({ timeRange }: { timeRange: string }) {
  const data = generateInsulinData(timeRange)

  return (
    <ChartContainer
      config={{
        basal: {
          label: "Basal",
          color: "hsl(var(--chart-2))",
        },
        bolus: {
          label: "Bolus",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="time" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={10} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={10} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            iconSize={8}
            formatter={(value) => <span className="text-xs font-medium">{value}</span>}
          />
          <Bar dataKey="basal" fill="var(--color-basal)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="bolus" fill="var(--color-bolus)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
