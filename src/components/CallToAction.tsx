
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-literary-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Literary Journey Today</h2>
          <p className="text-lg mb-8 opacity-90">
            Join our community of readers and experience storytelling like never before. 
            Explore classic and modern literature with the help of our AI companion.
          </p>
          <Button 
            className="bg-white text-literary-primary hover:bg-literary-accent hover:text-literary-primary px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300"
            onClick={() => navigate("/signup")}
          >
            Get Started For Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
