"use client"

const mockHistory = [
  {
    id: "h1",
    date: "Today · 9:20 AM",
    from: "IIT Bombay",
    to: "BKC",
    fare: "₹210",
    driverName: "Vikram Singh",
  },
  {
    id: "h2",
    date: "Yesterday · 7:05 PM",
    from: "Andheri East",
    to: "Powai",
    fare: "₹190",
    driverName: "Priya Nair",
  },
  {
    id: "h3",
    date: "Sat · 4:40 PM",
    from: "Dadar",
    to: "Lower Parel",
    fare: "₹160",
    driverName: "Arjun Rao",
  },
]

export default function HistoryPage() {
  return (
    <main className="min-h-[calc(100vh-64px)] px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Ride history
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Previous rides saved locally (mock data for now).
          </p>
        </header>

        <div className="grid gap-3">
          {mockHistory.map((ride) => (
            <div
              key={ride.id}
              className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-3xl bg-white/80 px-5 py-4 shadow-sm ring-1 ring-black/5 dark:bg-zinc-950/60 dark:ring-white/10"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {ride.from} → {ride.to}
                </p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {ride.date} • {ride.driverName}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  {ride.fare}
                </p>
                <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                  Completed
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}