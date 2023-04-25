import type { LinksFunction } from "@remix-run/node";
import styles from "../styles/body.css";
import { FaPython, FaReact } from "react-icons/fa";
import { SiRemix, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";


export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Body() {
  return(
    <div className="body">
      <h1 className="portfolioTitle">Jacob Bartlett's <br /> Portfolio</h1>
      <div className="mainContent">
        <div className="tools">
          <FaReact size="300px" color="#61DBFB"/>
          <SiRemix size="250px" color="red" />
          <IoLogoJavascript size="300px" color="yellow" />
          <SiTypescript size="300px" color="#007acc" />
          <FaPython size="300px" color="red"/>
        </div>
      </div>
    </div>
  )
}