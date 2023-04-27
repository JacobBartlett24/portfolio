import type { LinksFunction } from "@remix-run/node";
import styles from "../styles/body.css";

import albumdleImg from "../../public/albumdle.png";
import { FaPython, FaReact } from "react-icons/fa";
import { SiChakraui, SiRemix, SiSupabase, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Body() {

  const [animateClass, setAnimateClass] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

      // if(offset > 230){
      //   setAnimateClass('scrollBottom');
      // }else{
      //   setAnimateClass('');
      // }

const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

useEffect(() => {
  if(scrollPosition > 230){
    setAnimateClass('scrollBottom');
  }else{
    setAnimateClass('');
  }
}, [scrollPosition]);

  return(
    <div className="body">
      <h1 className="portfolioTitle">Jacob Bartlett's <br /> Portfolio</h1>
      <div className="mainContent">
        <div id="imgHolder">
          <img className={animateClass} id="profilePicture"alt="me" src="https://cdn.midjourney.com/fe42195e-b152-49c1-b0ef-b9276f82874a/0_3.png" />
          <p id="blurb">
            Web Development, Software Engineering, Design,<br/> and Data Science
          </p>
        </div>
        <h2>Main Tools</h2>
        <div className="tools">
          <div className="tooltip">
            <FaReact size="300px" color="#61DBFB"/>
            <span>React</span>
          </div>
          <div className="tooltip">
            <SiRemix size="250px" color="rgba(235,235,235,0.87)" />
            <span>Remix</span>
          </div>
          <div className="tooltip">
            <IoLogoJavascript size="300px" color="yellow" />
            <span>Javscript</span>
          </div>
          <div className="tooltip">
            <SiTypescript size="300px" color="#007acc" />
            <span>TypeScript</span>
          </div>
          <div className="tooltip">
            <FaPython size="300px" color="#37DA96"/>
            <span>Python</span>
          </div>
        </div>
        <h2>Project I'm Most Proud Of</h2>
        <div className="projectSpotlight">
          <div id="projectWrapper">
            <img alt="Albumdle" src={albumdleImg} />
            <Link className="overlay" to="https://www.albumdle.app"><p>Wordle for music</p></Link>
          </div>
          <div className="projectTools">
            <FaReact />
            <SiTypescript />
            <SiRemix />
            <SiSupabase />
            <SiChakraui />
          </div>
        </div>
      </div>
    </div>
  )
}