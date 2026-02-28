import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import { useQuery } from "@tanstack/react-query";

const Analytics = () => {
  const { data: analytics } = useQuery({
    queryKey: ["analytics"],
    queryFn: async () => {
      const response = await fetch(
        "https://task-api-eight-flax.vercel.app/api/analytics",
      );
      return response.json();
    },
  });

  // Chart Data Formatting
  const chartData = analytics?.map((item) => ({
    name: new Date(item.date).toLocaleDateString("en-US", {
      weekday: "narrow",
    }),
    value: item.views,
    percentage: Math.round((item.conversions / item.clicks) * 100) || 0,
  }));
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-6">Products Analytics</h3>
      <div className="h-37">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af" }}
              dy={10}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={<CustomTooltip />}
            />
            <Bar dataKey="value" radius={[20, 20, 20, 20]} barSize={45}>
              {chartData?.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    index % 2 === 0
                      ? "url(#stripes)"
                      : index === 1
                        ? "#15803d"
                        : index === 3
                          ? "#14532d"
                          : "#4ade80"
                  }
                />
              ))}
            </Bar>
            <defs>
              <pattern
                id="stripes"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
                patternTransform="rotate(45)"
              >
                <rect width="4" height="8" fill="#f3f4f6" />
                <path
                  d="M0 0h8v8H0z"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-green-100 px-2 py-1 rounded-md text-xs text-green-600 font-bold shadow-md">
        {payload[0].payload.percentage}%
      </div>
    );
  }
  return null;
};

export default Analytics;
