import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/contact.css"
import {BsMailbox, BsLinkedin} from "react-icons/bs"
import { Link } from "@remix-run/react";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
};

export default function Contact(){
  return(
    <div className="contactPage">
      <h1>Contact Me</h1>
      <div className="contactWrapper">
        <div className="contactCard">
          <div className="cardHeader">
            Jacob Bartlett
          </div>
          <div className="cardBody">
            <div className="contactMethod">
              <h2>Phone</h2>
              <p>(806)626-5522</p>
            </div>
            <div className="contactMethod">
              <h2>Email  <BsMailbox /></h2>
              <p><a href="mailto:">mbart6869@gmail.com</a></p>
            </div>
          </div>
          <div className="cardFooter">
            <Link to="https://www.linkedin.com/in/michael-bartlett-1b1b1b1b1/"><BsLinkedin /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}