"use client";

import { useState } from "react";
import LogsCard from "@/app/components/LogsCard";
import { logs } from "@/app/data/mock";
import { filterByTags } from "@/app/TagsFiltering";

const Page = () => {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const filteredLogs = filterByTags(logs, filters);

  return (
    <div className="p-6">
      <h1 className="text-4xl mb-8">System Logs</h1>
      <div className="flex gap-4 mb-6">
        <select
          onChange={(e) =>
            setFilters((prev) => {
              const next = { ...prev };
              if (e.target.value) next.env = e.target.value;
              else delete next.env;
              return next;
            })
          }
          className="border rounded p-2"
        >
          <option value="">All envs</option>
          <option value="prod">prod</option>
          <option value="dev">dev</option>
          <option value="staging">staging</option>
          <option value="test">test</option>
        </select>

        <select
          onChange={(e) =>
            setFilters((prev) => {
              const next = { ...prev };
              if (e.target.value) next.service = e.target.value;
              else delete next.service;
              return next;
            })
          }
          className="border rounded p-2"
        >
          <option value="">All services</option>
          <option value="api">api</option>
          <option value="backend">backend</option>
          <option value="frontend">frontend</option>
          <option value="auth">auth</option>
          <option value="db">db</option>
        </select>
      </div>

      <LogsCard logs={filteredLogs} />
    </div>
  );
};

export default Page;