
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, BookOpen, BookText, Search } from "lucide-react";

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

  // Mock function to simulate search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real app, this would trigger a search API call
  };

  // Mock login function
  const handleLogin = (email: string, password: string) => {
    console.log("Login attempt:", email, password);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
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
  }

  return (
    <div className="min-h-screen bg-literary-light">
      {/* Header with Search */}
      <header className="bg-literary-primary py-4 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Robo Story Verse</h1>
          
          <form onSubmit={handleSearch} className="search-bar flex items-center gap-2">
            <Search className="h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search titles, authors, genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 focus:ring-0 w-full"
            />
          </form>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Dashboard Welcome */}
        <Dashboard />

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <Button 
            variant="outline" 
            className="p-6 flex flex-col items-center gap-2 h-auto literary-card hover:border-literary-accent"
          >
            <Book className="h-8 w-8 text-literary-primary" />
            <span className="text-lg font-medium">Literature</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="p-6 flex flex-col items-center gap-2 h-auto literary-card hover:border-literary-accent"
          >
            <BookText className="h-8 w-8 text-literary-primary" />
            <span className="text-lg font-medium">Short Stories</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="p-6 flex flex-col items-center gap-2 h-auto literary-card hover:border-literary-accent"
          >
            <BookOpen className="h-8 w-8 text-literary-primary" />
            <span className="text-lg font-medium">Novels</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="p-6 flex flex-col items-center gap-2 h-auto literary-card hover:border-literary-accent"
          >
            <Search className="h-8 w-8 text-literary-primary" />
            <span className="text-lg font-medium">Explore</span>
          </Button>
        </div>

        {/* Recommended Reads */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-6">Recommended Reads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
