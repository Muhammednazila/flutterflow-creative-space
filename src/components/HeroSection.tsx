
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Muhammed Nazil Awwal
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
          Product Designer & FlutterFlow Developer
        </h2>
        <p className="text-lg md:text-xl mb-12 text-muted-foreground">
          Turning ideas into intuitive digital experiences
        </p>
        <Button
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8"
          onClick={scrollToWork}
        >
          View My Work
        </Button>
      </motion.div>
    </section>
  );
}
