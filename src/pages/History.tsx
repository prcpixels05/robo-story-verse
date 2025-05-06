
import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Home, Library, History as HistoryIcon, User, LogOut, Search, Calendar } from "lucide-react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock reading history data
const readingHistory = [
  {
    id: "101",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    cover: "/placeholder.svg",
    lastRead: "May 5, 2025",
    progress: 35,
    chapter: "Chapter 3: A Caucus-Race and a Long Tale"
  },
  {
    id: "102",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "/placeholder.svg",
    lastRead: "May 3, 2025",
    progress: 20,
    chapter: "Chapter 2: Roast Mutton"
  },
  {
    id: "103",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "/placeholder.svg",
    lastRead: "April 28, 2025",
    progress: 15,
    chapter: "Chapter 1: Introduction"
  },
  {
    id: "104",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "/placeholder.svg",
    lastRead: "April 15, 2025",
    progress: 45,
    chapter: "Chapter 7: A Ball at Netherfield"
  }
];

// Mock listening history
const listeningHistory = [
  {
    id: "201",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "/placeholder.svg",
    lastListened: "May 4, 2025",
    duration: "32 minutes",
    progress: 28
  },
  {
    id: "202",
    title: "Moby Dick",
    author: "Herman Melville",
    cover: "/placeholder.svg",
    lastListened: "May 1, 2025",
    duration: "45 minutes",
    progress: 15
  },
  {
    id: "203",
    title: "1984",
    author: "George Orwell",
    cover: "/placeholder.svg",
    lastListened: "April 30, 2025",
    duration: "28 minutes",
    progress: 10
  }
];

const History = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
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
                      <HistoryIcon className="h-5 w-5 text-literary-primary" />
                      <span className="font-medium text-literary-primary">History</span>
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
                    <Link to="/library" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                      <Library className="h-4 w-4" />
                      <span className="text-sm">My Library</span>
                    </Link>
                    <Link to="/history" className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
                      <HistoryIcon className="h-4 w-4 text-literary-primary" />
                      <span className="text-sm font-medium text-literary-primary">History</span>
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

              {/* History Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold font-playfair mb-2">History</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Your recent reading and listening activity
                </p>
              </div>

              {/* Tabs for Reading vs Listening History */}
              <Tabs defaultValue="reading" className="mb-8">
                <TabsList className="mb-6">
                  <TabsTrigger value="reading">Reading History</TabsTrigger>
                  <TabsTrigger value="listening">Listening History</TabsTrigger>
                </TabsList>
                
                {/* Reading History Tab */}
                <TabsContent value="reading">
                  <div className="space-y-6">
                    {readingHistory.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/5 h-[150px] md:h-auto">
                            <img src={item.cover} alt={item.title} className="h-full w-full object-cover" />
                          </div>
                          <CardContent className="p-6 md:w-4/5 flex flex-col md:flex-row justify-between">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                              <p className="text-gray-500 dark:text-gray-400 mb-2">{item.author}</p>
                              <p className="mb-1">{item.chapter}</p>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-3">
                                <div 
                                  className="bg-literary-primary h-2 rounded-full"
                                  style={{ width: `${item.progress}%` }}
                                ></div>
                              </div>
                              <p className="text-right text-sm text-gray-500 mt-1">{item.progress}% completed</p>
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-start md:items-end justify-between">
                              <div className="flex items-center gap-2 text-gray-500">
                                <Calendar className="h-4 w-4" />
                                <span className="text-sm">{item.lastRead}</span>
                              </div>
                              <Button className="mt-4 md:mt-auto literary-button">Continue Reading</Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Listening History Tab */}
                <TabsContent value="listening">
                  <div className="space-y-6">
                    {listeningHistory.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/5 h-[150px] md:h-auto">
                            <img src={item.cover} alt={item.title} className="h-full w-full object-cover" />
                          </div>
                          <CardContent className="p-6 md:w-4/5 flex flex-col md:flex-row justify-between">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                              <p className="text-gray-500 dark:text-gray-400 mb-2">{item.author}</p>
                              <p className="mb-1">Listened for {item.duration}</p>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-3">
                                <div 
                                  className="bg-literary-primary h-2 rounded-full"
                                  style={{ width: `${item.progress}%` }}
                                ></div>
                              </div>
                              <p className="text-right text-sm text-gray-500 mt-1">{item.progress}% completed</p>
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-start md:items-end justify-between">
                              <div className="flex items-center gap-2 text-gray-500">
                                <Calendar className="h-4 w-4" />
                                <span className="text-sm">{item.lastListened}</span>
                              </div>
                              <Button className="mt-4 md:mt-auto literary-button">Continue Listening</Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default History;
