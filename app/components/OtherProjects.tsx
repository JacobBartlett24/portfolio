import data from '../data/projects.json'

export default function OtherProjects(){

  return(
    <>
      <h2 id="OtherProjects">Other Projects</h2>
      <div className="otherProjects">
        <div className="top">
          <div className="projectTile" id="left1">
            <img src={data.projects[1].image} alt="" />
          </div>
          <div className="projectTile" id="right1">
          <img src={data.projects[2].image} alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="projectTile" id="left2">
            <img src={data.projects[0].image} alt="" />
          </div>
          <div className="projectTile" id="right2">
            <img src={data.projects[3].image} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}