import { NavLink } from "@remix-run/react"

export default function NavBar(){
  return(
    <div className="navBar">
      <ul  className="sections">
        <NavLink prefetch="intent" to={"/resume"}>
          <li>Resume</li>
        </NavLink>
        <NavLink prefetch="intent" to="/projects">
          <li>Projects</li>
        </NavLink>
        <NavLink prefetch="intent" to="/education">
          <li>Education</li>
        </NavLink>
        <NavLink prefetch="intent" to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  )
}