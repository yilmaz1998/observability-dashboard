import { v4 as uuidv4 } from "uuid";
import { Metric, LogEntry, EventEntry } from "./types";

const now = Date.now();

export const metrics: Metric[] = [
  {
    id: uuidv4(),
    name: "Request Count",
    value: 0,
    timestamp: now,
    tags: { env: "prod", service: "api", region: "us-east-1" },
    unit: "requests"
  },
  {
    id: uuidv4(),
    name: "CPU Usage",
    value: 0,
    timestamp: now,
    tags: { env: "prod", service: "backend", host: "server-3" },
    unit: "%"
  },
  {
    id: uuidv4(),
    name: "Memory Usage",
    value: 0,
    timestamp: now,
    tags: { env: "prod", service: "backend", host: "server-1" },
    unit: "MB"
  },
  {
    id: uuidv4(),
    name: "Latency",
    value: 0,
    timestamp: now,
    tags: { env: "prod", service: "web" },
    unit: "ms"
  },
];

const logLevels = ["info", "warn", "error"] as const;

export const logs: LogEntry[] = Array.from({ length: 50 }).map(() => ({
  id: uuidv4(),
  level: logLevels[Math.floor(Math.random() * logLevels.length)],
  message: "Mock log message",
  timestamp: now - Math.floor(Math.random() * 1000 * 3600),
  tags: {
    env: ["prod", "dev", "staging", "test"][Math.floor(Math.random() * 4)],
    service: ["api", "backend", "auth", "frontend", "db"][
      Math.floor(Math.random() * 5)
    ],
  },
}));

export const events: EventEntry[] = [
  {
    id: uuidv4(),
    title: "Deployment completed",
    message: "Version 2.4.1 successfully deployed",
    severity: "info",
    timestamp: now - 1000 * 200,
    tags: { env: "prod", service: "api", version: "2.4.1" },
  },
  {
    id: uuidv4(),
    title: "CPU threshold breached",
    message: "CPU usage exceeded 90%",
    severity: "warning",
    timestamp: now - 1000 * 300,
    tags: { env: "prod", service: "backend" },
  },
  {
    id: uuidv4(),
    title: "Database down",
    message: "Primary DB is unreachable",
    severity: "error",
    timestamp: now - 1000 * 360,
    tags: { env: "prod", service: "db" },
  },
];