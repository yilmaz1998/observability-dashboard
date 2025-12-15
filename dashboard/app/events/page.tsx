"use client";

import { useState } from 'react';
import EventsCard from '@/app/components/EventsCard'
import { events } from '@/app/data/mock';
import { filterByTags } from '@/app/TagsFiltering';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup
} from "@/components/ui/select"

const page = () => {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const filteredEvents = filterByTags(events, filters);

  return (
    <div className='p-6'>
      <h1 className='text-4xl mb-8'>System Events</h1>
      <div className='flex gap-4 mb-6'>
        <Select
          onValueChange={(value) =>
            setFilters((prev) => {
              const next = { ...prev };
              if (value && value !== "__clear") {
                next.env = value;
              } else {
                delete next.env;
              }
              return next;
            })
          }
          defaultValue="__clear"
        >
          <SelectTrigger>
            <SelectValue placeholder="All envs" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Environments</SelectLabel>
              <SelectItem value="__clear">All envs</SelectItem>
              <SelectItem value="prod">prod</SelectItem>
              <SelectItem value="dev">dev</SelectItem>
              <SelectItem value="staging">staging</SelectItem>
              <SelectItem value="test">test</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) =>
            setFilters((prev) => {
              const next = { ...prev };
              if (value && value !== "__clear") {
                next.service = value;
              } else {
                delete next.service;
              }
              return next;
            })
          }
          defaultValue="__clear"
        >
          <SelectTrigger>
            <SelectValue placeholder="All services" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Services</SelectLabel>
              <SelectItem value="__clear">All services</SelectItem>
              <SelectItem value="api">api</SelectItem>
              <SelectItem value="backend">backend</SelectItem>
              <SelectItem value="frontend">frontend</SelectItem>
              <SelectItem value="auth">auth</SelectItem>
              <SelectItem value="db">db</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) =>
            setFilters((prev) => {
              const next = { ...prev };
              if (value && value !== "__clear") {
                next.version = value;
              } else {
                delete next.version;
              }
              return next;
            })
          }
          defaultValue="__clear"

        >
          <SelectTrigger>
            <SelectValue placeholder="All versions" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Versions</SelectLabel>
              <SelectItem value="__clear">All versions</SelectItem>
              <SelectItem value="2.4.1">2.4.1</SelectItem>
              <SelectItem value="2.5.0">2.5.0</SelectItem>
              <SelectItem value="2.5.1">2.5.1</SelectItem>
              <SelectItem value="2.6.1">2.6.1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <EventsCard events={filteredEvents} />
    </div>
  )
}

export default page