
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, User } from "lucide-react";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";

const Login = () => {
  const { login, updateUser } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const success = await login(email, password);
      
      if (success) {
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    
    // Simulate Google login with mock data
    setTimeout(() => {
      // This simulates what would happen after a successful Google login
      // In a real app, this would be handled by the Google OAuth flow
      const googleUserData = {
        name: "Google User",
        email: "googleuser@example.com",
        profileImage: "https://lh3.googleusercontent.com/a/default-user=s400-c",
        bio: "Logged in with Google"
      };
      
      updateUser(googleUserData);
      login(googleUserData.email, "google-auth-token");
      
      toast.success("Google login successful!");
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
          <p className="text-gray-600 mt-2">Welcome back! Sign in to your account.</p>
        </div>
        
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg animate-fade-in">
          <AuthForm onLogin={handleLogin} />
          
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
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <User className="mr-2 h-5 w-5" />
            Sign in with Google
          </Button>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-literary-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
