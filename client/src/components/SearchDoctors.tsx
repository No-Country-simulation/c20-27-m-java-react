import { useState, ChangeEvent } from "react"
import { SearchIcon } from "../assets/icons/index"
import React from "react"

interface SearchProps {
  onSearch: (query: string) => void
}

const Search = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  return (
    <div className="relative">
      <figure className="absolute top-2 pl-4">
        <img src={SearchIcon} alt="" />
      </figure>
      <input
        type="text"
        className="h-[40px] w-full rounded-xl bg-[#f3f4f6] pl-[52px] shadow-2.5xl outline-none *:focus:bg-red-500"
        value={query}
        onChange={handleChange}
        placeholder="Search doctors..."
      />
    </div>
  )
}

export default Search
