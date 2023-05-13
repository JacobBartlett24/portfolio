import type { LinksFunction } from "@remix-run/node";
import styles from "../styles/header.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link, NavLink } from "@remix-run/react";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Header(){
  const [isDropdownActive, setIsDropdownActive] = useState("")

  function toggleDropdown(){
    if(isDropdownActive == ""){
      setIsDropdownActive("active")
    }else{
      setIsDropdownActive("")
    }
  }

  return(
    <>
      <div className="header">
          <div className="menuWrapper">
            <button className="hamburgerMenu" onClick={() => toggleDropdown()}>
              <FaHamburger />
              <div className={`dropDown ${isDropdownActive}`}>
                <ul>
                  <li>
                    <Link prefetch="intent" to={"/resume"}>
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link prefetch="intent" to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link prefetch="intent" to="/education">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link prefetch="intent" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </button>
          </div>
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
              {/* <NavLink prefetch="intent" to="/education">
                Education
              </NavLink> */}
            </li>
            <li>
              {/* <NavLink prefetch="intent" to="/contact">
                Contact
              </NavLink> */}
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