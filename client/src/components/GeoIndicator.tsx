import { LocationIconDark } from "@/assets/icons";
import { useState, useEffect } from "react";

const GeoIndicator = () => {
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocationName(latitude, longitude);
        },
        (error) => {
          setLocation("Unable to retrieve location");
          console.error(error);
        },
      );
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  }, []);

  const fetchLocationName = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
      );
      const { city, countryName } = await response.json();
      setLocation(`${city}, ${countryName}`);
    } catch (err) {
      setLocation("Location not found");
      console.error(err);
    }
  };

  return (
    <div className="mb-2 flex flex-col">
      <p className="mb-[1px] text-xs text-[#6B7280]">Locación</p>
      <div className="flex items-center gap-1">
        <figure className="w-3 h-3 mr-1"> 
          <img src={LocationIconDark} alt="Location Icon in Dark" className="w-full h-full" />
        </figure>
        <span className="text-xs font-semibold text-[#374151]">{location}</span> {/* Texto más pequeño */}
      </div>
    </div>
  );
};

export default GeoIndicator;
