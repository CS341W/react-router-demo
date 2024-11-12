import { useLocation } from "react-router-dom"
import booksData from "./booksData"

const SearchResult = () => {
  const location = useLocation()
  const { bookId } = location.state || {}

  const { title, author, description } = booksData["id_" + bookId] || {
    title: "No Title Selected!",
    author: "N/A",
    description: "N/A",
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Book Details</h2>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <dl>
          <dt className="font-medium">Author</dt>
          <dd className="mb-4">{author}</dd>

          <dt className="font-medium">Description</dt>
          <dd>{description}</dd>
        </dl>
      </div>
    </div>
  )
}

export default SearchResult
