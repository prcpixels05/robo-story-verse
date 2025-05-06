
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  const [greeting, setGreeting] = useState("");
  const userName = "Reader"; // This would come from user profile/auth in a real app

  useEffect(() => {
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

  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-between bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md my-6 animate-fade-in">
      <div className="flex items-center mb-4 md:mb-0">
        <Avatar className="h-14 w-14 mr-4 border-2 border-literary-accent">
          <AvatarImage src="/placeholder.svg" alt={userName} />
          <AvatarFallback className="bg-literary-secondary text-white">
            {userName.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <h2 className="text-2xl font-semibold">
            {greeting}, <span className="text-literary-primary">{userName}</span>!
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Continue your literary journey...
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-end">
        <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Currently Reading</p>
          <p className="text-literary-primary font-semibold">
            Alice's Adventures in Wonderland
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Chapter 3 • 35% complete</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
