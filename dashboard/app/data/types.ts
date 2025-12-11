export type Metric = {
    id: string
    name: string
    value: number
    timestamp: number
    tags: Record<string, string>
}
  
  export type LogEntry = {
    id: string
    level: "info" | "warn" | "error"
    message: string
    timestamp: number
    tags: Record<string, string>
}
  
  export type EventEntry = {
    id: string
    title: string
    message: string
    severity: "info" | "warning" | "error"
    timestamp: number
    tags: Record<string, string>
}