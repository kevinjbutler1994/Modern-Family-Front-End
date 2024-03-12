import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav>
    <NavLink to="/" style = {{ marginRight: 30, marginLeft: 30}}>Home</NavLink>
    <NavLink to="/characters" style = {{ marginRight: 30, marginLeft: 30}}>Character Directory</NavLink>
    <NavLink to="/add-character" style = {{ marginRight: 30, marginLeft: 30}}>Add New Character</NavLink>
    <NavLink to='/quotes' style = {{marginRight: 30, marginLeft: 30}}>Quotes</NavLink>
    <NavLink to='/seasons' style = {{marginRight: 30, marginLeft: 30}}>Seasons</NavLink>
    </nav>
  )
}

export default Nav