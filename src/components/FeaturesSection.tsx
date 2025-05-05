
import { BookOpen, BookText, Star, Mic } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-literary-primary" />,
    title: "Classic Literature",
    description: "Explore timeless works from renowned authors with expert analysis and context."
  },
  {
    icon: <Mic className="h-10 w-10 text-literary-primary" />,
    title: "AI Narration",
    description: "Listen to stories narrated by our AI companion with realistic voice and emotion."
  },
  {
    icon: <BookText className="h-10 w-10 text-literary-primary" />,
    title: "Story Insights",
    description: "Gain deeper understanding with AI-generated summaries, themes, and moral lessons."
  },
  {
    icon: <Star className="h-10 w-10 text-literary-primary" />,
    title: "Personalized Experience",
    description: "Get recommendations based on your preferences and reading history."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-literary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover the Power of AI Storytelling</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform combines the beauty of literature with cutting-edge AI technology
            to create an immersive storytelling experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
