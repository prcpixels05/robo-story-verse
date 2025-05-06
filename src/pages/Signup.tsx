
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, User } from "lucide-react";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";

const Signup = () => {
  const { updateUser, login } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (email: string, password: string, name: string) => {
    setIsLoading(true);
    
    // In a real app, this would submit to a backend
    setTimeout(() => {
      // Update user data with the form values
      updateUser({
        name,
        email,
        bio: "New user",
        profileImage: "/placeholder.svg"
      });
      
      // Log the user in
      login(email, password);
      
      toast.success("Account created successfully!");
      navigate("/dashboard");
      
      setIsLoading(false);
    }, 1000);
  };

  const handleGoogleSignup = () => {
    setIsLoading(true);
    
    // Simulate Google signup with mock data
    setTimeout(() => {
      // This simulates what would happen after a successful Google signup
      // In a real app, this would be handled by the Google OAuth flow
      const googleUserData = {
        name: "Google User",
        email: "googleuser@example.com",
        profileImage: "https://lh3.googleusercontent.com/a/default-user=s400-c",
        bio: "Signed up with Google"
      };
      
      updateUser(googleUserData);
      login(googleUserData.email, "google-auth-token");
      
      toast.success("Google signup successful!");
      navigate("/dashboard");
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-literary-primary/10 via-white to-literary-light py-12">
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-literary-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-literary-primary/10 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center gap-2">
            <BookOpen className="h-10 w-10 text-literary-primary" />
            <h1 className="text-3xl font-bold text-literary-primary">Stobo.ai</h1>
          </Link>
          <p className="text-gray-600 mt-2">Create your account to start your literary journey</p>
        </div>
        
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg animate-fade-in">
          <AuthForm isSignUp onSignup={handleSignup} />
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-sm text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <Button 
            type="button" 
            variant="outline" 
            className="w-full"
            onClick={handleGoogleSignup}
            disabled={isLoading}
          >
            <User className="mr-2 h-5 w-5" />
            Sign up with Google
          </Button>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-literary-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Signup;
