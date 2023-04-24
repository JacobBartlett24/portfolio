import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/resume.css"
import resume from "../../public/resume (1)-1.png"

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
        <img src={resume} alt="resume" id="image" />
      </div>
    </>
  )
}