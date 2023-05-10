import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/body.css";

import { FaPython, FaReact } from "react-icons/fa";
import { SiChakraui, SiRemix, SiSupabase, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import ProjectSpotlight from "./ProjectSpotlight";
import Tools from "./Tools";
import ProfilePicture from "./ProfilePicture";
import OtherProjects from "./OtherProjects";

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
        <ProfilePicture  animateClass={animateClass}/>
        <Tools />
        <ProjectSpotlight />
        <OtherProjects />       
      </div>
    </div>
  )
}