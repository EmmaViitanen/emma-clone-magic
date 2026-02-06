import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
            <Link to="/" className="text-primary hover:underline">
              Back to Works
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Get related projects (excluding current)
  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <Layout>
      <div className="px-8 md:px-12 py-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm tracking-wider">BACK</span>
        </Link>

        {/* Project Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          {project.title}
        </h1>

        {/* Project Images */}
        <div className="max-w-5xl mx-auto space-y-8 mb-12">
          {project.images.map((image, index) => (
            <div key={index} className="w-full">
              <img 
                src={image} 
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Project Description */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-muted-foreground leading-relaxed text-center">
            {project.description}
          </p>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-border pt-12">
            <h2 className="text-xl font-bold text-foreground text-center mb-8">
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectDetail;
