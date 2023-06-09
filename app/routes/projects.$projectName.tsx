import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import data from "~/data/projects.json"

import type { Project } from "./projects";

export function loader({params}: LoaderArgs){
  const projects = data.projects
  const project: Project | undefined = projects.find(project => project.name == params.projectName)
  if(!project){ 
    return json({project: {name: '', tools: '', description: '', url: '', image: '' } as Project } )
  }
  return json({project: project})
}

export default function Projects() {
  const data = useLoaderData<typeof loader>()
  const project: Project = data.project;
  return (
    <>
      <div className="projectDisplay">
        <img className="projectImage" src={project.image} alt={project.name} />
        <Link className="overlay" to={project.url}>
          <p>Description: {project.description}<br/><br/> Tools: {project.tools}</p>
        </Link>
      </div>
    </>
  );
}