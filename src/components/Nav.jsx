import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/characters">Character Search</NavLink>
    <NavLink to="/add-character">Add New Character!</NavLink>
    </nav>
  )
}

export default Nav