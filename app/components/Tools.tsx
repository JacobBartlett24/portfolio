import { IconContext } from "react-icons";
import { FaReact, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRemix, SiTypescript } from "react-icons/si";

export default function Tools(){
  return(
    <>
    <h2 id="Tools" className="sectionTitle">Main Tools</h2>
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
        <SiTypescript color="#007acc" />
      </IconContext.Provider>
        <span>TypeScript</span>
      </div>
      <div className="tooltip">
      <IconContext.Provider value={{className: 'icon'}}>
        <FaPython  color="#37DA96"/>
      </IconContext.Provider>
        <span>Python</span>
      </div>
    </div>
    </>
  )
}