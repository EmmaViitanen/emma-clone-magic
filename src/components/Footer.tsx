import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
