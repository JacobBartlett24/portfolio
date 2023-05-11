import data from '../data/projects.json'
import {Link} from '@remix-run/react'
export function Slides(){
  return(
    <div className="firstSlide">
      <Link to={data.projects[1].url}>
        <img src={data.projects[1].image} alt="" />
      </Link>
      <Link to={data.projects[2].url}>
        <img src={data.projects[2].image} alt="" />
      </Link>
      <Link to={data.projects[0].url}>
        <img src={data.projects[0].image} alt="" />
      </Link>
      <Link to={data.projects[3].url}>
        <img src={data.projects[3].image} alt="" />
      </Link>
    </div>
  )
}

export default function OtherProjects(){

  return(
    <>
      <h2 id="OtherProjects" className="sectionTitle">Other Projects</h2>
      <div className="otherProjects">
        <Slides />
        <Slides />
        <Slides />
      </div>
    </>
  )
}