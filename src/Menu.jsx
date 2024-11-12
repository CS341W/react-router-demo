import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            end
            to="/"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "font-bold" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "font-bold" : ""}`
            }
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "font-bold" : ""}`
            }
          >
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
