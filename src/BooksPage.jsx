import { Outlet, useNavigate } from "react-router-dom"
const BooksPage = () => {
  const navigate = useNavigate()
  const lookUpBook = (e) => {
    navigate(`/books/${e.target.dataset.id}`)
  }
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Books Page</h1>
      <button
        data-id="123"
        onClick={lookUpBook}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mr-5"
      >
        Tom Sawyer
      </button>
      <button
        data-id="456"
        onClick={lookUpBook}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Huckleberry Finn
      </button>
      <Outlet />
    </div>
  )
}

export default BooksPage
