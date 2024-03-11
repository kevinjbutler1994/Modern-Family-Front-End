import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav>
    <NavLink to="/" style = {{ marginRight: 30, marginLeft: 30}}>Home</NavLink>
    <NavLink to="/characters" style = {{ marginRight: 30, marginLeft: 30}}>Character Directory</NavLink>
    <NavLink to="/add-character" style = {{ marginRight: 30, marginLeft: 30}}>Add New Character</NavLink>
    <NavLink to='Quotes' style = {{marginRight: 30, marginLeft: 30}}>Quotes</NavLink>
    <NavLink to='Seasons' style = {{marginRight: 30, marginLeft: 30}}>Seasons</NavLink>
    </nav>
  )
}

export default Nav