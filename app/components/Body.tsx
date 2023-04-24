import type { LinksFunction } from "@remix-run/node";
import NavBar  from "./NavBar";


export default function Body() {
  return(
    <div className="body">
      <NavBar />
      <h1 className="portfolioTitle">Jacob Bartlett's <br/> Portfolio</h1>

    </div>
  )
}