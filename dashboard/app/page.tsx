'use client'

import { useState, useEffect } from "react";
import { metrics as initialMetrics } from "@/app/data/mock";
import MetricCard from "@/app/components/MetricCard";
import { Metric } from "@/app/data/types";

export default function DashboardOverview() {
  const [metrics, setMetrics] = useState<Metric[]>(
    initialMetrics.map(metric => ({ ...metric, value: 0 }))
  );

  useEffect(() => {
    setMetrics(prev =>
      prev.map(metric => ({ ...metric, value: generateRandom(metric.name) }))
    );

    const interval = setInterval(() => {
      setMetrics(prev =>
        prev.map(metric => ({
          ...metric,
          value: generateRandom(metric.name),
          timestamp: Date.now(),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  function generateRandom(name: string) {
    switch (name) {
      case "Request Count":
        return Math.floor(Math.random() * 2500);
      case "CPU Usage":
        return parseFloat((Math.random() * 80 + 20).toFixed(2));
      case "Memory Usage":
        return Math.floor(Math.random() * 4000 + 1000);
      case "Latency":
        return parseFloat((Math.random() * 200 + 50).toFixed(2));
      default:
        return 0;
    }
  }

  return (
    <div className="p-12 space-y-8">
      <h1 className="text-4xl font-semibold">Observability Dashboard</h1>

      <section>
        <h2 className="text-3xl mb-9">Metrics Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {metrics.map(metric => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>
    </div>
  );
}