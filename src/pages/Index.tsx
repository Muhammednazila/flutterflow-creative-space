
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Linkedin, Github, Download } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="font-semibold text-lg">MNA</a>
          <div className="space-x-8">
            <a href="#" className="hover:text-secondary transition-colors">Home</a>
            <a href="#work" className="hover:text-secondary transition-colors">Work</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Portfolio Section */}
      <section id="work" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce App"
              description="Built with FlutterFlow, designed in Figma. A modern shopping experience."
              image="https://source.unsplash.com/random/800x600?social"
              caseStudyUrl="#"
            />
            <ProjectCard
              title="Social Platform"
              description="A community-driven platform with real-time features."
              image="https://source.unsplash.com/random/800x600?social"
              caseStudyUrl="#"
            />
            <ProjectCard
              title="Fitness Tracker"
              description="Health monitoring app with intuitive UI/UX."
              image="https://source.unsplash.com/random/800x600?fitness"
              caseStudyUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Skills & Tools</h2>
          <div className="flex justify-center gap-12 mb-8">
            <img src="https://source.unsplash.com/random/100x100?figma" alt="Figma" className="w-16 h-16 object-contain" />
            <img src="https://source.unsplash.com/random/100x100?flutter" alt="FlutterFlow" className="w-16 h-16 object-contain" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting pixel-perfect designs in Figma, transforming them into functional apps with FlutterFlow.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Let's Connect</h2>
          <p className="text-center text-muted-foreground mb-12">
            Let's collaborate! Reach out for projects or inquiries.
          </p>
          <ContactForm />
          <div className="flex justify-center gap-6 mt-12">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Muhammed Nazil Awwal. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Hire Me Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          asChild
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-white rounded-full shadow-lg"
        >
          <a href="#contact">Hire Me</a>
        </Button>
      </motion.div>

      {/* Download Resume Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="fixed top-4 right-4 z-50"
      >
        <Button
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={() => window.open('#', '_blank')}
        >
          <Download size={16} className="mr-2" />
          Resume
        </Button>
      </motion.div>
    </div>
  );
};

export default Index;
