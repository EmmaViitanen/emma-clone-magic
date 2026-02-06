import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <Layout showFooter={false}>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-background/60" />
        
        <div className="relative z-10 px-8 md:px-12 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
            EMMA<br />VIITANEN
          </h1>
          <p className="text-sm md:text-base text-muted-foreground tracking-wider mb-6">
            GRAPHIC DESIGNER<br />WEB DEVELOPER
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:viitanen.emma@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-8 md:px-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:viitanen.emma@gmail.com"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-primary text-sm">2025 E.VIITANEN</p>
      </footer>
    </Layout>
  );
};

export default Index;
