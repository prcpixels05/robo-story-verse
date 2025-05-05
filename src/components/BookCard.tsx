
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Book {
  id: string;
  title: string;
  author: string;
  type: string;
  cover: string;
  preview: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="literary-card group h-full flex flex-col hover:translate-y-[-5px] transition-all duration-300">
      <div className="relative pt-[70%] overflow-hidden bg-gray-100">
        <img 
          src={book.cover} 
          alt={book.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
          {book.type}
        </div>
      </div>
      
      <CardContent className="flex-grow py-4">
        <h3 className="font-semibold text-lg line-clamp-1">{book.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{book.author}</p>
        <p className="text-sm line-clamp-2 text-gray-700 italic">"{book.preview}"</p>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4">
        <Button 
          className="w-full gap-2 literary-button"
          asChild
        >
          <Link to={`/story/${book.id}`}>
            <BookOpen className="h-4 w-4" />
            Explore
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
