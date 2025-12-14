import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { EventEntry } from "@/app/data/types";
import { events } from "@/app/data/mock";

const levelSeverity = (severity: string) => {
    switch (severity) {
        case "error":
            return "destructive";
        case "warning":
            return "secondary";
        case "info":
        default:
            return "outline";
    }
};


export default function EventsCard() {
    return (
        <div className="p-4 rounded-xl border border-white mb-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Severity</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Tags</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {events.map((event: EventEntry) => (
                        <TableRow key={event.id}>
                            <TableCell>{new Date(event.timestamp).toLocaleString()}</TableCell>
                            <TableCell>{event.title}</TableCell>
                            <TableCell>
                                <Badge variant={levelSeverity(event.severity)}>
                                    {event.severity.toUpperCase()}
                                </Badge>
                            </TableCell>
                            <TableCell>{event.message}</TableCell>
                            <TableCell className="flex flex-wrap gap-2">
                                {Object.entries(event.tags).map(([key, value]) => (
                                    <Badge key={key} variant="outline">
                                        {key}:{value}
                                    </Badge>
                                ))}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
