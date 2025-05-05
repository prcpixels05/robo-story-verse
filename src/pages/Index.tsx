
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, BookOpen, BookText, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Components
import AuthForm from "@/components/AuthForm";
import Dashboard from "@/components/Dashboard";
import BookCard from "@/components/BookCard";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Mock function to simulate search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real app, this would trigger a search API call
  };

  // Mock login function
  const handleLogin = (email: string, password: string) => {
    console.log("Login attempt:", email, password);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Hero />
        <FeaturesSection />
        <FeaturedBooksSection />
        <TestimonialsSection />
        <CallToAction />
        
        {/* Login Form */}
        <section className="py-16 bg-literary-light">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-literary-primary">Join Our Community</h2>
                <p className="text-gray-600">Sign in to start your literary journey</p>
              </div>
              <AuthForm onLogin={handleLogin} />
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
