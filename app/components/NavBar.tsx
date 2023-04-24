import { Link } from "@remix-run/react"

export default function NavBar(){
  return(
    <div className="navBar">
      <ul className="sections">
        <Link prefetch="intent" to={"/resume"}>
          <li>Resume</li>
        </Link>
        <Link prefetch="intent" to="/projects">
          <li>Projects</li>
        </Link>
        <Link prefetch="intent" to="/education">
          <li>Education</li>
        </Link>
        <Link prefetch="intent" to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  )
}