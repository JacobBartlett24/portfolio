import type { LinksFunction } from "@remix-run/node";
import styles from "../styles/header.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link, NavLink } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Header(){
  return(
    <>
      <div className="header">
        
          <Link id="title" to="/">Portfolio</Link>
        
          <span className="icons">
          <ul  className="sections">
            <li>
              <NavLink prefetch="intent" to={"/resume"}>
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink prefetch="intent" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink prefetch="intent" to="/education">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink prefetch="intent" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <Link to="/">
            <BsGithub />
          </Link>
          <Link to="/">
            <BsLinkedin />
          </Link>
          </span>
      </div>
    </>
  )
}