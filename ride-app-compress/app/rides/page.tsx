import RideResults from "@/components/RideResults"
import RidesClient from "./RidesClient"
import FeedbackForm from "@/components/FeedbackForm"

export default function RidesPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  const pickup = typeof searchParams?.pickup === "string" ? searchParams.pickup : ""
  const destination =
    typeof searchParams?.destination === "string" ? searchParams.destination : ""
  const rideType =
    typeof searchParams?.rideType === "string" ? searchParams.rideType : "Economy"
  const time = typeof searchParams?.time === "string" ? searchParams.time : "Now"

  return (
    <div className="flex flex-col gap-6 p-6">
  
      <RidesClient
        pickup={pickup}
        destination={destination}
        rideType={rideType}
        time={time}
      />
  
      <FeedbackForm />
  
    </div>
  )
}


