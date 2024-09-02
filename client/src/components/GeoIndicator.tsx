import { LocationIconDark } from "@/assets/icons"
import { useState, useEffect } from "react"

const GeoIndicator = () => {
  const [location, setLocation] = useState<string>("")

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords
          fetchLocationName(latitude, longitude)
        },
        error => {
          setLocation("Unable to retrieve location")
          console.error(error)
        },
      )
    } else {
      setLocation("Geolocation is not supported by this browser.")
    }
  }, [])

  const fetchLocationName = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
      )
      const { city, countryName } = await response.json()
      setLocation(`${city}, ${countryName}`)
    } catch (err) {
      setLocation("Location not found")
      console.error(err)
    }
  }

  return (
    <>
      <div className="mb-4 flex flex-col">
        <p className="mb-[3px] text-sm text-[#6B7280]">Location</p>
        <div className="flex items-center gap-2">
          <figure>
            <img src={LocationIconDark} alt="Location Icon in Dark" />
          </figure>
          <span className="text-sm font-semibold text-[#374151]">{location}</span>
        </div>
      </div>
    </>
  )
}

export default GeoIndicator
