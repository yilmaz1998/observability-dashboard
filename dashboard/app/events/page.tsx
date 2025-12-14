import React from 'react'
import EventsCard from '@/app/components/EventsCard'

const page = () => {
  return (
    <div className='p-6'>
        <h1 className='text-4xl mb-8'>System Events</h1>
        <EventsCard />
    </div>
  )
}

export default page