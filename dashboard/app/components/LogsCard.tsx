import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LogEntry } from "@/app/data/types";
import { logs } from "@/app/data/mock";

const levelVariant = (level: string) => {
    switch (level) {
        case "error":
            return "destructive";
        case "warn":
            return "secondary";
        case "info":
        default:
            return "outline";
    }
};

export default function LogsCard() {
    return (
        <div className="p-4 rounded-xl border border-white mb-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Level</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Tags</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {logs.map((log: LogEntry) => (
                        <TableRow key={log.id}>
                            <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                            <TableCell>
                                <Badge variant={levelVariant(log.level)}>
                                    {log.level.toUpperCase()}
                                </Badge>
                            </TableCell>
                            <TableCell>{log.message}</TableCell>
                            <TableCell className="flex flex-wrap gap-2">
                                {Object.entries(log.tags).map(([key, value]) => (
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