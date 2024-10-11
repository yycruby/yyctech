'use client'

import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'
import { FiExternalLink } from 'react-icons/fi'
import { events } from '@/data/events'

export function Events() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <Event key={event.title} event={event} />
      ))}
    </div>
  )
}

function Event({ event }: { event: any }) {
  return (
    <Card className="flex h-full flex-col">
      <Card.Content>
        <Card.Title href={event.link}>{event.title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={event.date} decorate className="mt-2">
          {formatDate(event.date)}
        </Card.Eyebrow>
        <div className="mt-4">
          <Card.Description>{event.description}</Card.Description>
        </div>
        <Card.Cta>
          <a href={event.link} className="flex items-center">
            Learn more
            <FiExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Card.Cta>
      </Card.Content>
    </Card>
  )
}
