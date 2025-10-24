export interface Concert {
  id: string
  date: string
  venue: string
  city: string
  status: "tickets" | "sold out"
  ticketLink?: string
}

export const concerts: Concert[] = [
  {
    id: "1",
    date: "1 KASIM 2025",
    venue: "Hell on Hawick",
    city: "Los Santos",
    status: "tickets",
    ticketLink: "https://example.com/tickets/1",
  },
]
