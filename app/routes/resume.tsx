import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/resume.css"
import resume from "../../public/resume (1)-1.png"
import { AnimatePresence, motion } from "framer-motion";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
};

export default function Resume(){
  return(
    <>
      <div className="resumePage">
        <h1 id="resumeTitle">
          Resume
        </h1>
        <AnimatePresence mode='wait' initial={true}>
          <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          >
            <img src={resume} alt="resume" id="image" />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}