
import { Play } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Story {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  progress: number;
}

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <Card className="literary-card hover-lift h-full flex flex-col overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={story.cover} 
          alt={story.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg line-clamp-1">{story.title}</CardTitle>
        <p className="text-sm text-gray-500 dark:text-gray-400">{story.author}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm line-clamp-3">{story.description}</p>
        
        {story.progress > 0 && (
          <div className="mt-3">
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full">
              <div 
                className="bg-literary-primary h-1.5 rounded-full"
                style={{ width: `${story.progress}%` }}
              ></div>
            </div>
            <p className="text-right text-xs text-gray-500 mt-1">{story.progress}% completed</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="w-full literary-button flex items-center justify-center gap-1 text-sm">
          <Play className="h-3 w-3" />
          Start Listening
        </Button>
        <Button variant="outline" size="sm" className="w-full text-sm">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;
