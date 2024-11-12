import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import BooksPage from "./BooksPage"
import BookDetails from "./BookDetails"
import Home from "./Home"
import SearchResult from "./SearchResult"
import SearchForm from "./SearchForm"
import "./index.css"

const root = createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="books" element={<BooksPage />}>
          <Route path=":bookId" element={<BookDetails />} />
        </Route>
        <Route path="search" element={<SearchForm />}>
          <Route path="result" element={<SearchResult />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
