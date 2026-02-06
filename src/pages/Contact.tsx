import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-8 md:px-12">
        <div className="max-w-md mx-auto text-center w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            LET'S TALK!
          </h1>
          
          <p className="text-primary text-sm mb-2">FOR INQUIRIES:</p>
          <a 
            href="mailto:viitanen.emma@gmail.com" 
            className="text-primary hover:underline mb-12 block"
          >
            viitanen.emma@gmail.com
          </a>

          <form onSubmit={handleSubmit} className="space-y-6 mt-12">
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider"
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
