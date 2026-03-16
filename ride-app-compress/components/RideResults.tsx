import RideCard from "./RideCard"

type Ride = {
  id: string
  driverName: string
  carType: string
  price: string
  eta: string
}

export default function RideResults({
  rides,
  onBookRide,
}: {
  rides: Ride[]
  onBookRide?: (ride: Ride) => void
}) {
  const hasRides = rides.length > 0

  return (
    <section className="w-full rounded-3xl bg-white/90 p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5 dark:bg-zinc-950/60 dark:ring-white/10 sm:p-6">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-lg">
            Available rides
          </h2>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Choose a driver to confirm your booking.
          </p>
        </div>

        <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-200 dark:ring-emerald-300/20">
          {rides.length} options
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {!hasRides && (
          <div className="flex min-h-[120px] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/80 px-4 py-6 text-center dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
              No rides yet
            </p>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Enter your trip details and tap <span className="font-semibold">Find Ride</span> to see available options.
            </p>
          </div>
        )}

        {hasRides &&
          rides.map((ride) => (
            <RideCard
              key={ride.id}
              driverName={ride.driverName}
              carType={ride.carType}
              price={ride.price}
              eta={ride.eta}
              onBookRide={onBookRide ? () => onBookRide(ride) : undefined}
            />
          ))}
      </div>
    </section>
  )
}