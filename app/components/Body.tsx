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
        <div id="imgHolder">
          <img id="profilePicture"alt="me" src="https://cdn.midjourney.com/fe42195e-b152-49c1-b0ef-b9276f82874a/0_3.png" />
          <p id="blurb">
            Web Development, Software Engineering, Design,<br/> and Data Science
          </p>
        </div>
        <h2>Main Tools</h2>
        <div className="tools">
          <FaReact size="300px" color="#61DBFB"/>
          <SiRemix size="250px" color="rgba(235,235,235,0.87)" />
          <IoLogoJavascript size="300px" color="yellow" />
          <SiTypescript size="300px" color="#007acc" />
          <FaPython size="300px" color="#37DA96"/>
        </div>
      </div>
    </div>
  )
}