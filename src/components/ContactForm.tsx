
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully!");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <Input
          placeholder="Your Name"
          required
          className="rounded-lg"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          required
          className="rounded-lg"
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          required
          className="rounded-lg min-h-[150px]"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
