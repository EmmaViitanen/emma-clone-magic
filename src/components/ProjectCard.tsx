import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link 
      to={`/project/${project.id}`}
      className="group relative block overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-primary tracking-wider">{project.subtitle}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
