
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

interface AuthFormProps {
  onLogin: (email: string, password: string) => void;
}

const AuthForm = ({ onLogin }: AuthFormProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl animate-fade-in">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <div className="space-y-4">
            <p className="text-center text-gray-700 mb-4">
              Sign in to access your personalized reading experience
            </p>
            
            <Button 
              className="w-full literary-button"
              asChild
            >
              <Link to="/login">Go to Login</Link>
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="signup">
          <div className="space-y-4">
            <p className="text-center text-gray-700 mb-4">
              Create an account to begin your literary journey
            </p>
            
            <Button 
              className="w-full literary-button"
              asChild
            >
              <Link to="/signup">Go to Sign Up</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForm;
