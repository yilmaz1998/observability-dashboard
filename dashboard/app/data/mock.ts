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

const eventSeverities = ["info", "warning", "error"] as const;

export const events: EventEntry[] = Array.from({ length: 20 }).map(() => ({
  id: uuidv4(),
  title: "Mock Event Title",
  severity: eventSeverities[Math.floor(Math.random() * eventSeverities.length)],
  message: "Mock event message",
  timestamp: now - Math.floor(Math.random() * 1000 * 3600 * 24),
  tags: {
    env: ["prod", "dev", "staging", "test"][Math.floor(Math.random() * 4)],
    service: ["api", "backend", "auth", "frontend", "db"][Math.floor(Math.random() * 5)],
    version: ["2.4.1", "2.5.0", "2.5.1", "2.6.1"][Math.floor(Math.random() * 4)]
  },
}));