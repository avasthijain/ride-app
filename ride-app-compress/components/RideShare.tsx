"use client"

import { useState } from "react"

export default function RideShare({ fare }: { fare:number }){

const [people,setPeople] = useState(1)

const splitFare = (fare/people).toFixed(2)

return(

<div className="mt-4 p-4 border rounded-xl">

<h3 className="font-semibold mb-2">
Ride Sharing
</h3>

<label className="text-sm">
Number of passengers
</label>

<input
type="number"
min={1}
max={4}
value={people}
onChange={(e)=>setPeople(Number(e.target.value))}
className="border p-2 rounded w-full mt-1"
/>

<p className="mt-2 text-green-600 font-semibold">
Each pays: ₹{splitFare}
</p>

</div>

)

}