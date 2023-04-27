import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/contact.css"
import {BsMailbox, BsLinkedin, BsGithub, BsFillPinMapFill, BsPhone} from "react-icons/bs"
import { Link } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
};

export default function Contact(){
  return(
    <div className="contactPage">
      <h1 id="title">Contact Me</h1>
      <div className="contactWrapper">
        <AnimatePresence>
          <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}>
            <div className="contactCard">
              <div className="cardHeader">
                Jacob Bartlett
              </div>
              <div className="cardBody">
                <div className="contactMethod">
                  <h2>Phone <BsPhone /></h2>
                  <p>(806)626-5522</p>
                </div>
                <div className="contactMethod">
                  <h2>Email  <BsMailbox /></h2>
                  <p><a id="email" href="mailto:">mbart6869@gmail.com</a></p>
                </div>
                <div className="contactMethod">
                  <h2>Location  <BsFillPinMapFill /></h2>
                  <p>Lubbock, Tx</p>
                </div>
              </div>
              <div className="cardFooter icons">
                <Link to="/">
                  <BsGithub />
                </Link>
                <Link to="/">
                  <BsLinkedin />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>
    </div>
  )
}