import { v4 as uuidv4 } from "uuid";
import { Metric } from "./types";

const now = Date.now();

const baseMetrics: Metric[] = [
    {
        id: uuidv4(),
        name: "Request Count",
        value: 1200,
        timestamp: now - 1000 * 60 * 5,
        tags: { env: "prod", service: "api", region: "us-east-1" },
        unit: "requests"
    },
    {
        id: uuidv4(),
        name: "CPU Usage",
        value: 75,
        timestamp: now - 1000 * 60 * 5,
        tags: { env: "prod", service: "backend", host: "server-3" },
        unit: "%"
    },
    {
        id: uuidv4(),
        name: "Memory Usage",
        value: 2048,
        timestamp: now - 1000 * 60 * 5,
        tags: { env: "prod", service: "backend", host: "server-1" },
        unit: "MB"
    },
    {
        id: uuidv4(),
        name: "Latency",
        value: 120,
        timestamp: now - 1000 * 60 * 5,
        tags: { env: "prod", service: "web" },
        unit: "ms"
    },
];

const tempHistorical: Metric[] = [];

baseMetrics.forEach(metric => {
    for (let i = 100; i > 0; i--) {
      tempHistorical.push({
        id: uuidv4(),
        name: metric.name,
        value: generateRandom(metric.name),
        timestamp: now - i * 60 * 1000,
        tags: metric.tags,
        unit: metric.unit
      });
    }
  });
  
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

  export const historicalMetrics: Metric[] = [...baseMetrics, ...tempHistorical];
