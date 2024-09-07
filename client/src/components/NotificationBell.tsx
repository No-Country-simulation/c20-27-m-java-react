import { BellIcon, DotIcon } from "@/assets/icons"
import { useState } from "react"

const NotificationBell = () => {
  const [showDot, setShowDot] = useState(false)

  const handleButtonClick = () => {
    setShowDot(!showDot)
  }

  return (
    <button onClick={handleButtonClick} className="relative">
      <img src={BellIcon} alt="Beel icon for notifications" />
      {showDot && (
        <img src={DotIcon} alt="Notification Dot" className="absolute right-0 top-0 size-2" />
      )}
    </button>
  )
}

export default NotificationBell
