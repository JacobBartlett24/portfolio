import TexasTechLogo from "../../public/TexasTechLogo.png"

export default function Education(){
  return(
    <>
      <div className="education">
        <img className="TexasTechLogo"src={TexasTechLogo}  alt="Texas Tech Logo" />
        <p className="blurb">Pursuing Bachelor In Computer Science</p>
      </div>
    </>
  )
}