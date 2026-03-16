"use client"

import { useState } from "react"

type BookingCardProps = {
  onFindRides: (params: {
    pickup: string
    destination: string
    rideType: string
    time: string
  }) => void
}

export default function BookingCard({ onFindRides }: BookingCardProps) {
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [rideType, setRideType] = useState("Economy")
  const [time, setTime] = useState("Now")

  function handleSubmit() {
    onFindRides({
      pickup,
      destination,
      rideType,
      time,
    })
  }

  return (
    <section className="w-full overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5 dark:bg-zinc-950/60 dark:ring-white/10">
      <div className="relative px-6 pb-5 pt-6">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-500 opacity-95" />
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:18px_18px]" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-white">
                Book a ride
              </h2>
              <p className="mt-1 text-sm text-white/80">
                Quick pickup, smooth drop.
              </p>
            </div>

           
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <Chip icon={<BoltIcon />} label="Fast" />
            <Chip icon={<ShieldIcon />} label="Safe" />
            <Chip icon={<RupeeIcon />} label="Fair" />
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-5">
        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault()
            handleSubmit()
          }}
        >
          <Field label="Pickup">
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-500">
                <PinIcon />
              </span>
              <input
                className="h-11 w-full rounded-2xl border border-zinc-200 bg-white pl-10 pr-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15"
                placeholder="Enter pickup location"
                value={pickup}
                onChange={(event) => setPickup(event.target.value)}
              />
            </div>
          </Field>

          <Field label="Destination">
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-500">
                <TargetIcon />
              </span>
              <input
                className="h-11 w-full rounded-2xl border border-zinc-200 bg-white pl-10 pr-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15"
                placeholder="Where to?"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
              />
            </div>
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Ride type">
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-500">
                  <CarIcon />
                </span>
                <select
                  className="h-11 w-full appearance-none rounded-2xl border border-zinc-200 bg-white pl-10 pr-9 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15"
                  value={rideType}
                  onChange={(event) => setRideType(event.target.value)}
                >
                  <option value="Economy">Economy</option>
                  <option value="Premium">Premium</option>
                  <option value="SUV">SUV</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-zinc-500">
                  <ChevronDownIcon />
                </span>
              </div>
            </Field>

            <Field label="When">
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-500">
                  <ClockIcon />
                </span>
                <select
                  className="h-11 w-full appearance-none rounded-2xl border border-zinc-200 bg-white pl-10 pr-9 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                >
                  <option value="Now">Now</option>
                  <option value="In 15 min">In 15 min</option>
                  <option value="In 30 min">In 30 min</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-zinc-500">
                  <ChevronDownIcon />
                </span>
              </div>
            </Field>
          </div>

          <div className="rounded-2xl bg-zinc-50 px-4 py-3 ring-1 ring-zinc-900/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-900">
                <ReceiptIcon />
                Estimate
              </div>
              <div className="text-sm font-semibold text-emerald-700">
                ₹180–₹240
              </div>
            </div>
            <div className="mt-1 text-xs text-zinc-500">
              Final price may vary by traffic and availability.
            </div>
          </div>

          <button
            type="submit"
            className="group mt-1 inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-[0_12px_30px_-14px_rgba(16,185,129,0.85)] transition hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 active:translate-y-px"
          >
            Find Ride
            <ArrowRightIcon />
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-medium text-zinc-700">
        {label}
      </div>
      {children}
    </label>
  )
}

function Chip({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-white/12 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/15">
      <span className="text-white/90">{icon}</span>
      <span className="leading-none">{label}</span>
    </div>
  )
}

function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 22a10 10 0 1 1 7.07-17.07A10 10 0 0 1 12 22Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 16a4 4 0 1 1 2.83-6.83A4 4 0 0 1 12 16Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 12l8-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.5 4H20v3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 14.5V12a3 3 0 0 1 2.05-2.85l1.5-4.5A2.5 2.5 0 0 1 8.92 3h6.16a2.5 2.5 0 0 1 2.37 1.65l1.5 4.5A3 3 0 0 1 21 12v2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        fill="currentColor"
      />
      <path
        d="M17.5 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        fill="currentColor"
      />
      <path
        d="M3 14.5h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 11h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 20v-2M17 20v-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 22a10 10 0 1 1 7.07-17.07A10 10 0 0 1 12 22Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ReceiptIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 3h10a2 2 0 0 1 2 2v16l-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8h6M9 12h6M9 16h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="transition group-hover:translate-x-0.5"
    >
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2l1.1 6.1L19 9l-5.9 1L12 16l-1.1-6-5.9-1 5.9-.9L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13 2L3 14h8l-1 8 11-14h-8l0-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2l8 4v6c0 5-3.5 9.4-8 10-4.5-.6-8-5-8-10V6l8-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12l1.7 1.7L14.8 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RupeeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 6h10M7 10h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 6c4 0 8 1.5 8 5s-4 5-8 5h-1l9 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}