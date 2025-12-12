import { Metric } from "../data/types";

interface MetricCardProps {
    metric: Metric;
};
  
  export default function MetricCard({ metric }: MetricCardProps) {
    const { name, value, tags, timestamp, unit } = metric;
  
    return (
      <div className="p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-3xl font-bold mt-3">{value} {unit ?? ""}</p>
        <div className="text-sm text-gray-400 mt-1">
          Updated at: {new Date(timestamp).toLocaleTimeString()}
        </div>
        <div className="text-xs text-gray-500 mt-2">
          {Object.entries(tags).map(([k, v]) => `${k}: ${v}`).join(" | ")}
        </div>
      </div>
    );
  }