import type { LinksFunction } from '@remix-run/node';
import styles from '~/styles/project.css'
import data from '../data/projects.json'

type Project = {
  name: string,
  tools: string,
  description: string,
  url: string,
  image: string
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
};

export default function Projects(){
  const projects: Project[] = data.projects
  return(
    <div className='projectPage'>
      <h1>Projects</h1>
      <div className='projectContainer'>
        {projects.map((project: Project) => {
          return(
            <div key={project.name} className='projectCard'>
              <img className='projectImage' src={project.image} alt={project.name} />
              <div className='lowerCard'>
                <h2 className='projectName'><a href={project.url}>{project.name}</a></h2>
                <h3 className='projectDescription'>{project.description}</h3>
                <p className='projectTools'>Tools: {project.tools}</p>
              </div>
            </div>
          )
        })}
        </div>
    </div>
  )
}