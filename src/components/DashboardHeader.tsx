
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context/UserContext";

interface DashboardHeaderProps {
  greeting: string;
}

const DashboardHeader = ({ greeting }: DashboardHeaderProps) => {
  const { user } = useUser();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation delay for welcome message
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`flex flex-col md:flex-row items-center md:items-start justify-between bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center mb-4 md:mb-0">
        <Avatar className="h-14 w-14 mr-4 border-2 border-literary-accent">
          <AvatarImage src={user.profileImage} alt={user.name} />
          <AvatarFallback className="bg-literary-secondary text-white">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <h2 className="text-2xl font-semibold">
            {greeting}, <span className="text-literary-primary">{user.name}</span>!
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

export default DashboardHeader;
