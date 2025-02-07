
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  caseStudyUrl: string;
}

export function ProjectCard({ title, description, image, caseStudyUrl }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button
          asChild
          variant="secondary"
          className="w-full rounded-lg"
        >
          <a href={caseStudyUrl} target="_blank" rel="noopener noreferrer">
            View Case Study
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
