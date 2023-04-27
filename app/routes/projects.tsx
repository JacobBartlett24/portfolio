import type { LinksFunction } from '@remix-run/node';
import styles from '~/styles/project.css'
import data from '../data/projects.json'
import { Link, NavLink, Outlet, useLocation } from '@remix-run/react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
        <AnimatePresence>
          <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}>
            <div className='projectBox'>
              <div id='projectTitle'>
                {title == '' ? 'Select a project' : title}
              </div>
              <div className='projectsNav'>
                {projects.map((project, index) => {
                  return(
                    <div className='navWrap' key={index}>
                      <NavLink className={""}  to={`${project.name}`}>
                        <div onClick={() => setTitle(project.name)} className='projectNav'>
                          {project.name}
                        </div>
                      </NavLink>
                    </div>
                  )
                })}
              </div>
              <AnimatePresence mode='wait' initial={false}>
                <motion.div
                  className='projectBody'
                  key={useLocation().pathname}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  {<Outlet />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}