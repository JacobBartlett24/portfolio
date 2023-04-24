import type { LinksFunction } from "@remix-run/node";
import styles from "../styles/header.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Header(){
  return(
    <>
      <div className="header">
        
          <Link id="title" to="/">Portfolio</Link>
        
          <span className="icons">
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