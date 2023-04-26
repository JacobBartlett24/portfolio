import type { LinksFunction } from '@remix-run/node';
import styles from '~/styles/project.css'
import data from '../data/projects.json'
import { Link, Outlet } from '@remix-run/react';

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
      <h1 id="title">Projects</h1>
      <div className='projectContainer'>
        <div className='projectBox'>
          <div id='projectTitle'>
            Title
          </div>
          <div className='projectsNav'>
            {projects.map((project, index) => {
              return(
                <Link key={index} to={`/projects/${project.name}`}>
                  <div className='projectNav'>
                    {project.name}
                  </div>
                </Link>
              )
            })}
          </div>
          <div className='projectBody'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}