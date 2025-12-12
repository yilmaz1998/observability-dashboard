import { Metric } from "../data/types";

interface MetricCardProps {
    metric: Metric;
};
  
  export default function MetricCard({ metric }: MetricCardProps) {
    const { name, value, tags, timestamp, unit } = metric;
  
    return (
      <div className="p-4 rounded-xl border border-white">
        <h3 className="text-2xl">{name}</h3>
        <p className="text-xl mt-3">{value} {unit ?? ""}</p>
        <div className="text-sm text-gray-400 mt-3">
          Updated at: {new Date(timestamp).toLocaleTimeString()}
        </div>
        <div className="text-xs text-gray-500 mt-3">
          {Object.entries(tags).map(([k, v]) => `${k}: ${v}`).join(" | ")}
        </div>
      </div>
    );
  }