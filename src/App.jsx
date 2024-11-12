import { Outlet } from "react-router-dom"
import Menu from "./Menu"
import "./App.css"

const App = () => {
  return (
    <>
      <Menu />
      <div className="mx-4 my-2">
        <Outlet />
      </div>
    </>
  )
}
export default App
