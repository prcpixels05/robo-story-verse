
import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Home, History, User, LogOut, Search } from "lucide-react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import StoryCard from "@/components/StoryCard";

// Mock saved stories data
const savedStories = [
  {
    id: "20",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "/placeholder.svg",
    description: "A classic tale of manners, marriage, and misconception.",
    progress: 0
  },
  {
    id: "21",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "/placeholder.svg",
    description: "A powerful exploration of racial injustice.",
    progress: 15
  },
  {
    id: "22",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "/placeholder.svg",
    description: "The American Dream and its discontents.",
    progress: 0
  },
  {
    id: "23",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    cover: "/placeholder.svg",
    description: "A girl's journey through a fantastical world.",
    progress: 35
  }
];

// Mock collections data
const collections = [
  {
    id: "classic",
    name: "Classics",
    stories: 4
  },
  {
    id: "favorite",
    name: "Favorites",
    stories: 3
  },
  {
    id: "toread",
    name: "To Read",
    stories: 6
  }
];

const LibraryPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeView, setActiveView] = useState<'saved' | 'collections'>('saved');
  const userName = "Reader"; // This would come from user profile/auth in a real app

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full min-h-screen bg-literary-light dark:bg-literary-dark">
          {/* Sidebar for desktop */}
          <Sidebar>
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
                      <BookOpen className="h-5 w-5 text-literary-primary" />
                      <span className="font-medium text-literary-primary">My Library</span>
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
                <Link to="/login" className="flex items-center gap-3 text-red-500">
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
                    <p className="text-sm font-medium">{userName}</p>
                  </div>
                  <div className="p-2">
                    <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                      <Home className="h-4 w-4" />
                      <span className="text-sm">Home</span>
                    </Link>
                    <Link to="/library" className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
                      <BookOpen className="h-4 w-4 text-literary-primary" />
                      <span className="text-sm font-medium text-literary-primary">My Library</span>
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
                      <Link to="/login" className="flex items-center gap-2 p-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
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

              {/* Library Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold font-playfair mb-2">My Library</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Your personal collection of stories
                </p>
              </div>

              {/* View Toggle */}
              <div className="flex mb-6 space-x-2">
                <Button 
                  variant={activeView === 'saved' ? 'default' : 'outline'} 
                  onClick={() => setActiveView('saved')}
                  className={activeView === 'saved' ? 'bg-literary-primary' : ''}
                >
                  Saved Stories
                </Button>
                <Button 
                  variant={activeView === 'collections' ? 'default' : 'outline'}
                  onClick={() => setActiveView('collections')}
                  className={activeView === 'collections' ? 'bg-literary-primary' : ''}
                >
                  Collections
                </Button>
              </div>

              {/* Saved Stories View */}
              {activeView === 'saved' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedStories.map(story => (
                    <StoryCard key={story.id} story={story} />
                  ))}
                </div>
              )}

              {/* Collections View */}
              {activeView === 'collections' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collections.map(collection => (
                    <Card key={collection.id} className="p-6 hover:shadow-lg transition-all">
                      <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{collection.stories} stories</p>
                      <Button variant="outline" className="w-full">View Collection</Button>
                    </Card>
                  ))}
                  <Card className="p-6 border-dashed hover:shadow-lg transition-all flex flex-col items-center justify-center">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3 mb-4">
                      <BookOpen className="h-6 w-6 text-literary-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Create Collection</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
                      Organize your stories into custom collections
                    </p>
                    <Button variant="outline" className="w-full">Create New</Button>
                  </Card>
                </div>
              )}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default LibraryPage;
