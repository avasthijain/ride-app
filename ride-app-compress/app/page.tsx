"use client"

import { useRouter } from "next/navigation"
import BookingCard from "@/components/BookingCard"
import MapView from "@/components/MapView"
import { useToast } from "@/components/ToastProvider"

export default function Home() {
  const router = useRouter()
  const { showToast } = useToast()

  function handleFindRides(params: {
    pickup: string
    destination: string
    rideType: string
    time: string
  }) {
    if (!params.pickup.trim() || !params.destination.trim()) {
      showToast("Enter pickup and destination to continue.", "error")
      return
    }

    const qs = new URLSearchParams({
      pickup: params.pickup,
      destination: params.destination,
      rideType: params.rideType,
      time: params.time,
    })

    router.push(`/rides?${qs.toString()}`)
  }

  return (
    <main className="min-h-[calc(100vh-64px)] px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8 2xl:px-12">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6 lg:gap-8">
        <header className="flex flex-col gap-1">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
            Welcome to RideApp
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Plan your next ride in a few taps.
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Choose pickup, destination, and ride type to see options, fares, and ETAs.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <BookingCard onFindRides={handleFindRides} />
          <MapView />
        </div>
      </div>
    </main>
  )
  
}