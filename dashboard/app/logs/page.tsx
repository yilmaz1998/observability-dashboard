import React from 'react'
import LogsCard from '@/app/components/LogsCard'

export default function Logs () {
  return (
    <div className='p-6'>
        <h1 className='text-4xl mb-8'>System Logs</h1>
        <LogsCard />
    </div>
  )
}