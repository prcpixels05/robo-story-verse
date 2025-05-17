
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Headphones, BookText } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-literary-primary/20 via-white to-literary-light -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-literary-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-literary-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Explore Literature Through <span className="text-literary-primary">AI Narration</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Immerse yourself in classic and modern stories narrated by our AI companion. 
              Discover insights, analysis, and the beauty of storytelling in a whole new way.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-literary-primary hover:bg-literary-secondary text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2" 
                onClick={() => navigate("/signup")}
              >
                <BookOpen className="h-5 w-5" />
                Start Reading
              </Button>
              <Button 
                variant="outline" 
                className="border-literary-primary text-literary-primary hover:bg-literary-primary hover:text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2" 
                onClick={() => navigate("/login")}
              >
                <Headphones className="h-5 w-5" />
                Listen Now
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="AI Robot Narrator" 
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <BookText className="h-5 w-5 text-literary-primary" />
                  <p className="text-sm font-medium">
                    Narrating the world's best stories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
