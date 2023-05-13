import { IconContext } from "react-icons";
import {MdOutlineEmail} from "react-icons/md";
import {RxDiscordLogo} from "react-icons/rx";

export default function Contact() {
  return (
    <>
    <h2 id="Contact" className="sectionTitle">Contact</h2>
    <div className="contactWrapper">
      <div className="contactCard">
          <a href="mailto: jacobart@ttu.edu" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{className: 'iconSmall'}}>
              <MdOutlineEmail />
            </IconContext.Provider>
          </a>
      </div>
      <div className="contactCard">
          <a href="https://discordapp.com/users/183262216726904832" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{className: 'iconSmall'}}>
              <RxDiscordLogo />
            </IconContext.Provider>
          </a>
      </div>
      
    </div>
    </>
  )
}