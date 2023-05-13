import TexasTechLogo from "../../public/TexasTechLogo.png"

export default function Education(){
  return(
    <>
      <div id="Education" className="education">
        <h2>Education</h2>
        <img className="TexasTechLogo"src={TexasTechLogo}  alt="Texas Tech Logo" />
        <p className="blurb">Pursuing Bachelor In Computer Science</p>
      </div>
    </>
  )
}