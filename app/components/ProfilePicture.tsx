type Props={
  animateClass: string
}

export default function ProfilePicture({animateClass} : Props) {
  return(
    <div className="imgHolder">
      <img className={animateClass} id={animateClass ? "" : "profilePicture"}alt="me" src="https://cdn.midjourney.com/fe42195e-b152-49c1-b0ef-b9276f82874a/0_3.png" />
      <span className={animateClass ? "placeholder" : ""} hidden={animateClass == "" ? true : false}>asd</span>
      <p id="blurb" className={animateClass ? "changeColor" : ""}>
        Web Development, Software Engineering, Design,<br/> and Data Science
      </p>
    </div>
  )
}