import { IconContext } from "react-icons";
import {MdOutlineEmail} from "react-icons/md";
import {RxDiscordLogo} from "react-icons/rx";

export default function Contact() {
  return (
    <>
    <h2 id="Contact" className="sectionTitle">Contact</h2>
    <div className="contactWrapper">
      <div className="contactCard">
          <IconContext.Provider value={{className: 'iconSmall'}}>
            <MdOutlineEmail />
          </IconContext.Provider>
      </div>
      <div className="contactCard">
          <IconContext.Provider value={{className: 'iconSmall'}}>
            <RxDiscordLogo />
          </IconContext.Provider>
      </div>
      
    </div>
    </>
  )
}