import type { LinksFunction } from "@remix-run/node";
import styles from "../styles/body.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Body() {
  return(
    <div className="body">
      <h1 className="portfolioTitle">Jacob Bartlett's <br /> Portfolio</h1>
    </div>
  )
}