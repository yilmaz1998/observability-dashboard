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

export const logs: LogEntry[] = [
  {
    id: uuidv4(),
    level: "info",
    message: "User successfully authenticated",
    timestamp: now - 1000 * 10,
    tags: { env: "prod", service: "auth" },
  },
  {
    id: uuidv4(),
    level: "warn",
    message: "High memory usage detected",
    timestamp: now - 1000 * 30,
    tags: { env: "prod", service: "backend", host: "server-1" },
  },
  {
    id: uuidv4(),
    level: "error",
    message: "Database connection timeout",
    timestamp: now - 1000 * 60,
    tags: { env: "prod", service: "db" },
  },
  {
    id: uuidv4(),
    level: "info",
    message: "Request processed",
    timestamp: now - 1000 * 90,
    tags: { env: "prod", service: "api" },
  },
];

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