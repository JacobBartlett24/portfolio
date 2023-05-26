import { Link } from "@remix-run/react";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiRemix, SiSupabase, SiChakraui } from "react-icons/si";
import albumdleImg from "../../public/albumdle.png";

export default function ProjectSpotlight(){
  return(
    <>
    <a href="#" id="Project" className="anchor"></a>
    <h2 className="sectionTitle">Project I'm Most Proud Of</h2>
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
    </>
  )
}