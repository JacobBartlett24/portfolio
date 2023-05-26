import data from '../data/projects.json'
import {Link} from '@remix-run/react'

export function Slides(){
  return(
    <div className="firstSlide">
      <Link to={data.projects[1].url}>
        <img src={data.projects[1].image} alt="" />
        <div className='projectOverlay'>
          <p>Description: {data.projects[1].description}<br/><br/> Tools: {data.projects[1].tools}</p>
        </div>
      </Link>
      <Link to={data.projects[2].url}>
        <img src={data.projects[2].image} alt="" />
        <div className='projectOverlay'>
          <p>Description: {data.projects[2].description}<br/><br/> Tools: {data.projects[2].tools}</p>
        </div>
      </Link>
      <Link to={data.projects[0].url}>
        <img src={data.projects[0].image} alt="" />
        <div className='projectOverlay'>
          <p>Description: {data.projects[0].description}<br/><br/> Tools: {data.projects[0].tools}</p>
        </div>
      </Link>
      <Link to={data.projects[3].url}>
        <img src={data.projects[3].image} alt="" />
        <div className='projectOverlay'>
          <p>Description: {data.projects[3].description}<br/><br/> Tools: {data.projects[3].tools}</p>
        </div>
      </Link>
    </div>
  )
}

export default function OtherProjects(){

  return(
    <>
      <a href="#" id="OtherProjects" className="anchor"></a>

      <h2 className="sectionTitle">Other Projects</h2>
      <div className="otherProjects">
        <Slides />
        <Slides />
        <Slides />
      </div>
    </>
  )
}