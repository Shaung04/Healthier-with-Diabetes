"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Generate sample data based on time range
const generateGlucoseData = (timeRange: string) => {
  if (timeRange === "daily") {
    return [
      { time: "12 AM", glucose: 110 },
      { time: "3 AM", glucose: 105 },
      { time: "6 AM", glucose: 112 },
      { time: "9 AM", glucose: 140 },
      { time: "12 PM", glucose: 125 },
      { time: "3 PM", glucose: 118 },
      { time: "6 PM", glucose: 132 },
      { time: "9 PM", glucose: 120 },
    ]
  } else if (timeRange === "weekly") {
    return [
      { time: "Mon", glucose: 118 },
      { time: "Tue", glucose: 125 },
      { time: "Wed", glucose: 115 },
      { time: "Thu", glucose: 110 },
      { time: "Fri", glucose: 122 },
      { time: "Sat", glucose: 128 },
      { time: "Sun", glucose: 118 },
    ]
  } else {
    return [
      { time: "Week 1", glucose: 122 },
      { time: "Week 2", glucose: 118 },
      { time: "Week 3", glucose: 115 },
      { time: "Week 4", glucose: 110 },
    ]
  }
}

export function GlucoseChart({ timeRange }: { timeRange: string }) {
  const data = generateGlucoseData(timeRange)

  return (
    <ChartContainer
      config={{
        glucose: {
          label: "Glucose",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
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
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={10}
            domain={[70, 180]}
            ticks={[70, 100, 140, 180]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <defs>
            <linearGradient id="colorGlucose" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-glucose)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--color-glucose)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="glucose"
            stroke="var(--color-glucose)"
            strokeWidth={2}
            fill="url(#colorGlucose)"
            activeDot={{ r: 6 }}
          />
          {/* Target range */}
          <rect x="0%" y="100" width="100%" height="40" fill="rgba(0, 200, 0, 0.1)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
