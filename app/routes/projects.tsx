import type { LinksFunction } from '@remix-run/node';
import styles from '~/styles/project.css'
import data from '../data/projects.json'
import { Link, NavLink, Outlet } from '@remix-run/react';
import { useState } from 'react';

export type Project = {
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
  const [title, setTitle] = useState<string>('') 

  return(
    <div className='projectPage'>
      <h1 id="title">Projects</h1>
      <div className='projectContainer'>
        <div className='projectBox'>
          <div id='projectTitle'>
            {title == '' ? 'Select a project' : title}
          </div>
          <div className='projectsNav'>
            {projects.map((project, index) => {
              return(
                <NavLink key={index} to={`${project.name}`}>
                  <div onClick={() => setTitle(project.name)} className='projectNav'>
                    {project.name}
                  </div>
                </NavLink>
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