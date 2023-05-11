import data from '../data/projects.json'

export default function OtherProjects(){

  return(
    <>
      <h2 id="OtherProjects">Other Projects</h2>
      <div className="otherProjects">
        <div className="firstSlide">
          <img src={data.projects[1].image} alt="" />
          <img src={data.projects[2].image} alt="" />
          <img src={data.projects[0].image} alt="" />
          <img src={data.projects[3].image} alt="" />
        </div>
        <div className="firstSlide">
          <img src={data.projects[1].image} alt="" />
          <img src={data.projects[2].image} alt="" />
          <img src={data.projects[0].image} alt="" />
          <img src={data.projects[3].image} alt="" />
        </div>
        <div className="firstSlide">
          <img src={data.projects[1].image} alt="" />
          <img src={data.projects[2].image} alt="" />
          <img src={data.projects[0].image} alt="" />
          <img src={data.projects[3].image} alt="" />
        </div>
      </div>
    </>
  )
}