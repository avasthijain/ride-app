"use client"

import { useMemo } from "react"
import RideResults from "@/components/RideResults"
import { useToast } from "@/components/ToastProvider"

type Ride = {
  id: string
  driverName: string
  carType: string
  price: string
  eta: string
}

function buildMockRides(rideType: string): Ride[] {
  return [
    {
      id: "r1",
      driverName: "Aarav Mehta",
      carType: `${rideType} · Honda City`,
      price: "₹185",
      eta: "3 min",
    },
    {
      id: "r2",
      driverName: "Sara Khan",
      carType: `${rideType} · Hyundai Verna`,
      price: "₹210",
      eta: "5 min",
    },
    {
      id: "r3",
      driverName: "Rohan Patel",
      carType: `${rideType} · Toyota Innova`,
      price: "₹260",
      eta: "7 min",
    },
    {
      id: "r4",
      driverName: "Neha Sharma",
      carType: `${rideType} · Tata Tiago`,
      price: "₹175",
      eta: "4 min",
    },
  ]
}

export default function RidesClient({
  pickup,
  destination,
  rideType,
  time,
}: {
  pickup: string
  destination: string
  rideType: string
  time: string
}) {
  const { showToast } = useToast()
  const rides = useMemo(() => buildMockRides(rideType), [rideType])

  return (
    <main className="min-h-[calc(100vh-64px)] px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8 2xl:px-12">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6 lg:gap-8">
        <header className="flex flex-col gap-1">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
            Ride results
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            {pickup && destination ? `${pickup} → ${destination}` : "Available rides"}
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            {time ? `For: ${time}` : "Choose a ride to continue."}
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <section className="rounded-3xl bg-white/80 p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5 dark:bg-zinc-950/60 dark:ring-white/10 sm:p-6">
            <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Trip summary
            </h2>
            <div className="mt-3 grid gap-2 text-sm text-zinc-700 dark:text-zinc-200">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 dark:text-zinc-400">Pickup</span>
                <span className="font-medium">{pickup || "—"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 dark:text-zinc-400">Destination</span>
                <span className="font-medium">{destination || "—"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 dark:text-zinc-400">Ride type</span>
                <span className="font-medium">{rideType}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 dark:text-zinc-400">Time</span>
                <span className="font-medium">{time}</span>
              </div>
            </div>
          </section>

          <RideResults
            rides={rides}
            onBookRide={(ride) => {
              showToast(`Booked ${ride.driverName}. ETA ${ride.eta}.`, "success")
            }}
          />
        </div>
      </div>
    </main>
  )
}

