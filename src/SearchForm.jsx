import { useState } from "react"
import { useNavigate, Outlet } from "react-router-dom"

const SearchForm = () => {
  const [bookId, setBookId] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`result`, { state: { bookId } }) //sent location state to SearchResult
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Search Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select a book ID</option>
          <option value="123">The Adventures of Tom Sawyer</option>
          <option value="456">The Adventures of Huckleberry Finn</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      <Outlet />
    </>
  )
}

export default SearchForm
