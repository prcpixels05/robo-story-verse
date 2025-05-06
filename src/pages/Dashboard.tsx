import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Home, 
  Library, 
  History, 
  User, 
  LogOut, 
  Search,
  Play,
  Moon,
  Sun
} from "lucide-react";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarFooter
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import DashboardHeader from "@/components/DashboardHeader";
import { useUser } from "@/context/UserContext";
import StoryCard from "@/components/StoryCard";
import { Card, CardTitle } from "@/components/ui/card";
import { Command, CommandInput, CommandList, CommandGroup, CommandItem } from "@/components/ui/command";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import StorySuggestion from "@/components/StorySuggestion";

// Mock data - would come from API in real app
const suggestions = [
  "Pride and Prejudice",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "1984",
  "Jane Austen",
  "F. Scott Fitzgerald",
  "Harper Lee",
  "George Orwell",
  "Romeo and Juliet",
  "Hamlet",
  "The Odyssey"
];

const categories = [
  {
    id: "short-stories",
    title: "Short Stories",
    items: [
      {
        id: "1",
        title: "The Tell-Tale Heart",
        author: "Edgar Allan Poe",
        cover: "/placeholder.svg",
        description: "A murderer's guilt leads to his confession.",
        progress: 0
      },
      {
        id: "2",
        title: "The Gift of the Magi",
        author: "O. Henry",
        cover: "/placeholder.svg",
        description: "A story of selfless love and sacrifice.",
        progress: 0
      },
      {
        id: "3",
        title: "The Lottery",
        author: "Shirley Jackson",
        cover: "/placeholder.svg",
        description: "A small town's dark tradition.",
        progress: 0
      }
    ]
  },
  {
    id: "literature",
    title: "Literature",
    items: [
      {
        id: "4",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        cover: "/placeholder.svg",
        description: "A classic tale of manners, marriage, and misconception.",
        progress: 0
      },
      {
        id: "5",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover: "/placeholder.svg",
        description: "A powerful exploration of racial injustice.",
        progress: 0
      },
      {
        id: "6",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "/placeholder.svg",
        description: "The American Dream and its discontents.",
        progress: 0
      }
    ]
  },
  {
    id: "novels",
    title: "Novels",
    items: [
      {
        id: "7",
        title: "1984",
        author: "George Orwell",
        cover: "/placeholder.svg",
        description: "A dystopian vision of total surveillance.",
        progress: 0
      },
      {
        id: "8",
        title: "Moby Dick",
        author: "Herman Melville",
        cover: "/placeholder.svg",
        description: "One man's obsessive pursuit of a white whale.",
        progress: 0
      },
      {
        id: "9",
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        cover: "/placeholder.svg",
        description: "The misadventures of a would-be knight.",
        progress: 0
      }
    ]
  },
  {
    id: "children",
    title: "Children's Tales",
    items: [
      {
        id: "10",
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        cover: "/placeholder.svg",
        description: "A girl's journey through a fantastical world.",
        progress: 35
      },
      {
        id: "11",
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        cover: "/placeholder.svg",
        description: "A young prince's travels among the stars.",
        progress: 0
      },
      {
        id: "12",
        title: "Winnie-the-Pooh",
        author: "A.A. Milne",
        cover: "/placeholder.svg",
        description: "Tales from the Hundred Acre Wood.",
        progress: 0
      }
    ]
  }
];

// In-progress stories
const currentReading = [
  {
    id: "10",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    cover: "/placeholder.svg",
    description: "A girl's journey through a fantastical world.",
    progress: 35,
    chapter: "Chapter 3: A Caucus-Race and a Long Tale"
  }
];

// Recommendations
const recommendations = [
  {
    id: "13",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover: "/placeholder.svg",
    description: "A teenager's alienation in post-war New York.",
    progress: 0
  },
  {
    id: "14",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    cover: "/placeholder.svg",
    description: "The multi-generational story of the Buendía family.",
    progress: 0
  },
  {
    id: "15",
    title: "Brave New World",
    author: "Aldous Huxley",
    cover: "/placeholder.svg",
    description: "A futuristic society where humans are genetically bred.",
    progress: 0
  },
  {
    id: "16",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "/placeholder.svg",
    description: "A hobbit's adventure to reclaim a treasure from a dragon.",
    progress: 0
  }
];

const Dashboard = () => {
  const { user, logout } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Set greeting based on time of day
    const hours = new Date().getHours();
    let greetingText = "";
    
    if (hours < 12) {
      greetingText = "Good morning";
    } else if (hours < 18) {
      greetingText = "Good afternoon";
    } else {
      greetingText = "Good evening";
    }
    
    setGreeting(greetingText);
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = suggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogout = () => {
    logout();
    // In a real app with proper routing, you would redirect to login page here
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full min-h-screen bg-literary-light dark:bg-literary-dark">
          {/* Sidebar for desktop */}
          <Sidebar className="hidden md:flex">
            <SidebarHeader className="p-4 border-b">
              <Link to="/" className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-literary-primary" />
                <span className="text-xl font-bold text-literary-primary">Stobo.ai</span>
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Home">
                    <Link to="/dashboard" className="flex items-center gap-3">
                      <Home className="h-5 w-5" />
                      <span>Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="My Library">
                    <Link to="/library" className="flex items-center gap-3">
                      <Library className="h-5 w-5" />
                      <span>My Library</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="History">
                    <Link to="/history" className="flex items-center gap-3">
                      <History className="h-5 w-5" />
                      <span>History</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Profile">
                    <Link to="/profile" className="flex items-center gap-3">
                      <User className="h-5 w-5" />
                      <span>Profile</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="mt-auto border-t p-4">
              <SidebarMenuButton asChild tooltip="Logout">
                <Link to="/login" className="flex items-center gap-3 text-red-500" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </Link>
              </SidebarMenuButton>
            </SidebarFooter>
          </Sidebar>

          {/* Main content */}
          <main className="flex-1 overflow-auto">
            {/* Mobile header navigation */}
            <header className="md:hidden bg-white dark:bg-literary-dark shadow p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-literary-primary" />
                <span className="text-xl font-bold text-literary-primary">Stobo.ai</span>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <User className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-0">
                  <div className="border-b p-2">
                    <p className="text-sm font-medium">{user.name}</p>
                  </div>
                  <div className="p-2">
                    <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                      <Home className="h-4 w-4" />
                      <span className="text-sm">Home</span>
                    </Link>
                    <Link to="/library" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                      <Library className="h-4 w-4" />
                      <span className="text-sm">My Library</span>
                    </Link>
                    <Link to="/history" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                      <History className="h-4 w-4" />
                      <span className="text-sm">History</span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                      <User className="h-4 w-4" />
                      <span className="text-sm">Profile</span>
                    </Link>
                    <div className="border-t mt-2 pt-2">
                      <Link to="/login" className="flex items-center gap-2 p-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md" onClick={handleLogout}>
                        <LogOut className="h-4 w-4" />
                        <span className="text-sm">Logout</span>
                      </Link>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </header>

            <div className="p-4 md:p-8">
              {/* Dark mode toggle */}
              <div className="flex justify-end mb-4">
                <Toggle 
                  pressed={isDarkMode} 
                  onPressedChange={toggleDarkMode}
                  aria-label="Toggle dark mode"
                  className="p-2"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Toggle>
              </div>

              {/* Welcome header */}
              <DashboardHeader greeting={greeting} />

              {/* Search bar with autocomplete */}
              <div className="relative max-w-3xl mx-auto mt-8 mb-12">
                <Command className="w-full rounded-lg border shadow-md overflow-visible">
                  <div className="flex items-center border-b px-3">
                    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    <CommandInput 
                      placeholder="Search for stories, authors, or genres..."
                      value={searchQuery}
                      onValueChange={setSearchQuery}
                      className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none"
                    />
                  </div>
                  {showSuggestions && (
                    <CommandList className="absolute w-full bg-white dark:bg-gray-800 shadow-lg rounded-b-lg max-h-64 overflow-auto z-10">
                      <CommandGroup heading="Suggestions">
                        {filteredSuggestions.length > 0 ? (
                          filteredSuggestions.map((suggestion, index) => (
                            <CommandItem 
                              key={index} 
                              onSelect={() => handleSuggestionClick(suggestion)}
                              className="cursor-pointer"
                            >
                              <StorySuggestion suggestion={suggestion} />
                            </CommandItem>
                          ))
                        ) : (
                          <CommandItem disabled>No results found</CommandItem>
                        )}
                      </CommandGroup>
                    </CommandList>
                  )}
                </Command>
              </div>

              {/* Continue Reading Section */}
              {currentReading.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-playfair font-semibold mb-4">Continue Reading</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {currentReading.map(story => (
                      <Card key={story.id} className="literary-card overflow-hidden hover:shadow-xl transition-all">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 h-[200px] md:h-auto">
                            <img 
                              src={story.cover} 
                              alt={story.title} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="p-6 md:w-3/4 flex flex-col justify-between">
                            <div>
                              <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
                              <p className="text-gray-500 dark:text-gray-400 mb-2">{story.author}</p>
                              <p className="mb-4">{story.description}</p>
                              <p className="text-literary-primary font-medium">{story.chapter}</p>
                              
                              {/* Progress bar */}
                              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-4">
                                <div 
                                  className="bg-literary-primary h-2 rounded-full"
                                  style={{ width: `${story.progress}%` }}
                                ></div>
                              </div>
                              <p className="text-right text-sm text-gray-500 mt-1">{story.progress}% completed</p>
                            </div>
                            <div className="mt-4 flex gap-4">
                              <Button className="literary-button flex items-center gap-2">
                                <Play className="h-4 w-4" />
                                Continue Listening
                              </Button>
                              <Button variant="outline">Read More</Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Category sections with horizontal scrolling */}
              {categories.map(category => (
                <section key={category.id} className="mb-12">
                  <h2 className="text-2xl font-playfair font-semibold mb-4">{category.title}</h2>
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-4">
                      {category.items.map(story => (
                        <CarouselItem key={story.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                          <StoryCard story={story} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </section>
              ))}

              {/* Recommendations Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-playfair font-semibold mb-4">Recommended For You</h2>
                <Carousel className="w-full">
                  <CarouselContent className="-ml-4">
                    {recommendations.map(story => (
                      <CarouselItem key={story.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <StoryCard story={story} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </section>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
