import RideShare from "./RideShare"
import { useToast } from "./ToastProvider"


type RideCardProps = {
  driverName: string
  carType: string
  price: string
  eta: string
  onBookRide?: () => void
}

export default function RideCard({
  driverName,
  carType,
  price,
  eta,
  onBookRide,
}: RideCardProps) {

  const fare = Number(price.replace("₹", ""))
  const {showToast} = useToast()

  return (
    <div className="flex flex-col gap-3">

      <article className="flex items-center justify-between rounded-2xl border p-4">

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 text-white">
            {driverName
              .split(" ")
              .map((part: string) => part[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div>
            <p className="font-semibold">{driverName}</p>
            <p className="text-xs text-gray-500">{carType}</p>
            <p className="text-xs text-gray-400">{eta}</p>
          </div>

        </div>

        <div className="text-right">
          <p className="font-semibold">{price}</p>

          <button
            type="button"
            onClick={() => {
              showToast("Ride booked successfully 🚗", "success")
              onBookRide?.()
            }}
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-medium text-zinc-50"
          >
            Book ride
          </button>
        </div>

      </article>

      <RideShare fare={fare} />

    </div>
  )
}