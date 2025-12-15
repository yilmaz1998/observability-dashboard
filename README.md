## Observability Dashboard

A React + TypeScript dashboard for visualizing logs, events, and metrics with dynamic filtering, mock data, and tag-based organization. 
This project is designed for learning and testing observability concepts similar to Datadog, enabling users to explore logs, events, metrics, and tag-based filters in a realistic dashboard environment.

[Live Demo](https://observability-dashboard-nu.vercel.app/)


## Features

#### Metrics
- Randomized numeric metrics (Request count, CPU Usage, Memory Usage and Latency)
- Live numbers, updated dynamically
- Each metric has a name, value, timestamp, and tags
- Displaying historical metrics on bar charts

#### Logs

- Randomized mock logs with info, warn, error levels
- Mock log message
- Each log has tags (e.g., env, service)

#### Events
- Mock events with info, warning, error severities
- Mock event title and message
- Tags include env, service, version

#### Tag Filtering
- Allows real-time dashboard updates when filters change
- Generic filtering function works for logs and events
- Supports dynamic addition and removal of filters

## Tech Stacks
- TypeScript
- Next.js 16
- Shadcn UI (Bar Charts, Tables, Select, Dark mode)
- Tailwind CSS

## ScreenShots
<img width="1772" height="903" alt="Screenshot 2025-12-15 at 10 48 33 AM" src="https://github.com/user-attachments/assets/972f582e-6a00-4249-9f8e-bd87987bd66d" />
<img width="1769" height="891" alt="Screenshot 2025-12-15 at 11 25 31 AM" src="https://github.com/user-attachments/assets/168c8b77-99ca-46c0-9f25-4a498577d1cc" />
<img width="1771" height="894" alt="Screenshot 2025-12-15 at 11 25 44 AM" src="https://github.com/user-attachments/assets/a1956d70-2ecd-4810-8dd0-600b680cbff9" />
