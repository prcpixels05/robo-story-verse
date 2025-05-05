
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const featuredBooks = [
  {
    id: "1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "/images/book-1.jpg",
    preview: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
  },
  {
    id: "2",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "/images/book-2.jpg",
    preview: "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since."
  },
  {
    id: "3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "/images/book-3.jpg",
    preview: "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow."
  }
];

const FeaturedBooksSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-literary-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Classics</h2>
          <Button variant="outline" className="border-literary-primary text-literary-primary">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4">{book.author}</p>
                <p className="italic text-sm mb-4">"{book.preview}"</p>
                <Button className="w-full literary-button flex items-center justify-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Explore Story
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooksSection;
