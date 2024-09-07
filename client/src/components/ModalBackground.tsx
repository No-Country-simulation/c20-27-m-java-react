import { ReactNode } from "react"

interface ModalBackgroundProps {
  children: ReactNode
}

const ModalBackground = ({ children }: ModalBackgroundProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  )
}

export default ModalBackground
