// "use client"

import { useEffect } from "react"
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken = "YOUR_MAPBOX_TOKEN"

export default function MapView(){

useEffect(()=>{

const map = new mapboxgl.Map({
container:"map",
style:"mapbox://styles/mapbox/streets-v11",
center:[77.2090,28.6139],
zoom:10
})

},[])

return <div id="map" className="w-full h-full rounded-2xl"></div>

}