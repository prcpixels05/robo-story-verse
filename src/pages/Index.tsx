
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, BookOpen, BookText, Search } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";

// Components
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturedBooksSection from "@/components/FeaturedBooksSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

// Mock data - will be replaced with API data later
const featuredBooks = [
  {
    id: "1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    type: "Novel",
    cover: "/placeholder.svg",
    preview: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
  },
  {
    id: "2",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    type: "Novel",
    cover: "/placeholder.svg",
    preview: "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since."
  },
  {
    id: "3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    type: "Novel",
    cover: "/placeholder.svg",
    preview: "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow."
  },
  {
    id: "4",
    title: "1984",
    author: "George Orwell",
    type: "Novel",
    cover: "/placeholder.svg",
    preview: "It was a bright cold day in April, and the clocks were striking thirteen."
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Mock function to simulate search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real app, this would trigger a search API call
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Hero />
        <FeaturesSection />
        <FeaturedBooksSection />
        <TestimonialsSection />
        
        {/* Explore Our Library section replacing the login form */}
        <section className="py-16 bg-literary-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-literary-primary">Explore Our Literary Collection</h2>
                <p className="text-gray-600 mt-2">Discover thousands of stories narrated by our AI companion</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-literary-light p-6 rounded-lg text-center hover:shadow-md transition-all">
                  <BookOpen className="w-12 h-12 text-literary-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Classic Literature</h3>
                  <p className="text-gray-600 mb-4">Timeless works from the world's greatest authors</p>
                  <Button 
                    onClick={() => navigate("/login")} 
                    variant="outline" 
                    className="border-literary-primary text-literary-primary hover:bg-literary-primary hover:text-white"
                  >
                    Explore Classics
                  </Button>
                </div>
                
                <div className="bg-literary-light p-6 rounded-lg text-center hover:shadow-md transition-all">
                  <Book className="w-12 h-12 text-literary-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Modern Stories</h3>
                  <p className="text-gray-600 mb-4">Contemporary tales for the modern reader</p>
                  <Button 
                    onClick={() => navigate("/signup")} 
                    variant="outline" 
                    className="border-literary-primary text-literary-primary hover:bg-literary-primary hover:text-white"
                  >
                    Discover Stories
                  </Button>
                </div>
                
                <div className="bg-literary-light p-6 rounded-lg text-center hover:shadow-md transition-all">
                  <BookText className="w-12 h-12 text-literary-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">AI Narration</h3>
                  <p className="text-gray-600 mb-4">Experience stories through our AI voice technology</p>
                  <Button 
                    onClick={() => navigate("/login")} 
                    className="bg-literary-primary text-white hover:bg-literary-secondary"
                  >
                    Start Listening
                  </Button>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Ready to begin your literary journey?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={() => navigate("/signup")} 
                    className="bg-literary-primary text-white hover:bg-literary-secondary"
                  >
                    Create Free Account
                  </Button>
                  <Button 
                    onClick={() => navigate("/login")} 
                    variant="outline"
                    className="border-literary-primary text-literary-primary hover:bg-literary-primary hover:text-white"
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
