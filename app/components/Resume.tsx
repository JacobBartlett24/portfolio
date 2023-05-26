import resume from "../../public/resume (1)-1.png"

export default function Resume(){
  return (
    <>
      <a href="#" id="Resume" className="anchor"></a>
      <div>
        <div id="resumeWrapper">
          <a href={resume} id="downloadResumeButton" rel="noreferrer" target="_blank">Open Resume</a>
        </div>
      </div>
    </>
  )

}