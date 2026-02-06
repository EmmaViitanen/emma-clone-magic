import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Bio = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-8 md:px-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" 
                alt="Emma Viitanen"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Hi, I'm Emma
            </h1>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm a graphic designer and web developer based in Finland. 
              I specialize in creating visual identities, illustrations, 
              and modern web experiences.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With a passion for clean design and attention to detail, 
              I help brands tell their stories through thoughtful and 
              impactful design solutions.
            </p>
            
            <Link 
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-medium tracking-wider hover:bg-primary/90 transition-colors"
            >
              LET'S WORK TOGETHER
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bio;
