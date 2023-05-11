import { NavLink } from "@remix-run/react"

export default function NavBar(){
  return(
    <div className="navBar">
      <div className="navSections">
        <a href="#Tools">Tools</a>
        <a href="#Project">Project</a>
        <a href="#OtherProjects">Other Projects</a>
        <a href="#Contact">Contact</a>
      </div>
    </div>
  )
}