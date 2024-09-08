interface InputProps {
  iconSrc: string
  placeholder: string
  type: string
  id: string
  name?: string
}

const Input = ({ iconSrc, placeholder, type, id, name }: InputProps) => {
  return (
    <div className="relative flex items-center">
      <img src={iconSrc} alt="" className="absolute left-2 h-5 w-5" aria-hidden="true" />
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 bg-gray-100 py-2 pl-10 text-sm font-bold focus:border-gray-400 focus:bg-gray-200 focus:outline-none"
        aria-label={placeholder}
      />
    </div>
  )
}

export default Input
