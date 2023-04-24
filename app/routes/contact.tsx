import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/contact.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
};

export default function Contact(){
  return(
    <div className="contactPage">
      <h1>Contact Me</h1>
      <div className="contactCard">
        <h2>Phone</h2>
        <p>(806)626-5522</p>
        <h2>Email</h2>
        <p>
          <a href="mailto:">mbart6869@gmail.com</a>
        </p>
        <h2>LinkedIn</h2>
        <p>
          <a href="https://www.linkedin.com/in/michael-bartlett-1b1b1b1b1/">https://www.linkedin.com/in/michael-bartlett-1b1b1b1b1/</a>
        </p>
        <h2>Github</h2>
        

      </div>
    </div>
  )
}