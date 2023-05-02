import type { LinksFunction } from "@remix-run/node";
import styles from "../styles/body.css";

import albumdleImg from "../../public/albumdle.png";
import { FaPython, FaReact } from "react-icons/fa";
import { SiChakraui, SiRemix, SiSupabase, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Body() {
  const SCROLL_MAX_POS = 450;
  const [animateClass, setAnimateClass] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

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
  if(scrollPosition > SCROLL_MAX_POS){
    setAnimateClass('scrollBottom');
  }else if(scrollPosition < 300){
    setAnimateClass('');
  }
}, [scrollPosition]);

  return(
    <div className="body">
      <h1 className="portfolioTitle">Jacob Bartlett's <br /> Portfolio</h1>
      <div className="mainContent">
        <div className="imgHolder">
            <img className={animateClass} id={animateClass ? "" : "profilePicture"}alt="me" src="https://cdn.midjourney.com/fe42195e-b152-49c1-b0ef-b9276f82874a/0_3.png" />
            <span className={animateClass == "" ? "" : "placeholder"} hidden={animateClass == "" ? true : false}>asd</span>
            <p id="blurb" hidden={animateClass ? true : false}>
              Web Development, Software Engineering, Design,<br/> and Data Science
            </p>
        </div>
        <h2 id="Tools">Main Tools</h2>
        <div className="tools">
          <div className="tooltip">
          <IconContext.Provider value={{className: 'icon'}}>
            <FaReact  color="#61DBFB"/>
          </IconContext.Provider>
            <span>React</span>
          </div>
          <div className="tooltip">
            <IconContext.Provider value={{className: 'icon'}}>
              <SiRemix color="rgba(235,235,235,0.87)" />
            </IconContext.Provider>
            <span>Remix</span>
          </div>
          <div className="tooltip">
          <IconContext.Provider value={{className: 'icon'}}>
            <IoLogoJavascript color="yellow" />
          </IconContext.Provider>
            <span>Javscript</span>
          </div>
          <div className="tooltip">
          <IconContext.Provider value={{className: 'icon'}}>
            <SiTypescript size="300px" color="#007acc" />
          </IconContext.Provider>
            <span>TypeScript</span>
          </div>
          <div className="tooltip">
          <IconContext.Provider value={{className: 'icon'}}>
            <FaPython size="300px" color="#37DA96"/>
          </IconContext.Provider>
            <span>Python</span>
          </div>
        </div>
        <h2 id="Project">Project I'm Most Proud Of</h2>
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