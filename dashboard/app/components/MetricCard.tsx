"use client";

import { Metric } from "../data/types";
import { historicalMetrics } from "../data/historicalMetrics";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

interface MetricCardProps {
  metric: Metric;
}

export default function MetricCard({ metric }: MetricCardProps) {
  const { name, value, tags, timestamp, unit } = metric;

  const metricHistory = historicalMetrics
    .filter(m => m.name === name)
    .sort((a, b) => a.timestamp - b.timestamp)

  return (
    <div className="p-4 rounded-xl border border-white mb-4">
      <h3 className="text-2xl">{name}</h3>
      <p className="text-xl mt-3">{value} {unit ?? ""}</p>
      <div className="text-sm text-gray-400 mt-3">
        Updated at: {new Date(timestamp).toLocaleTimeString()}
      </div>
      <div className="text-xs text-gray-500 mt-3">
        {Object.entries(tags).map(([k, v]) => `${k}: ${v}`).join(" | ")}
      </div>

      {metricHistory.length > 0 && (
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={metricHistory}>
              <XAxis
                dataKey="timestamp"
                tickFormatter={tick => new Date(tick).toLocaleTimeString()}
                interval="preserveStartEnd"
              />
              <Tooltip
                formatter={(value: number) => `${value} ${metric.unit}`}
              />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
