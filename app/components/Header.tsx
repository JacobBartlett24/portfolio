import type { LinksFunction } from "@remix-run/node";
import styles from "../styles/header.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Header(){
  return(
    <>
      <div className="header">
        <span id="title">
          Portfolio
        </span>
        <span id="icons">
         <BsGithub />
         <BsLinkedin />
        </span>
      </div>
    </>
  )
}