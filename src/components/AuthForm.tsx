
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface AuthFormProps {
  onLogin?: (email: string, password: string) => void;
  onSignup?: (email: string, password: string, name: string) => void;
  isSignUp?: boolean;
  isLoading?: boolean;
}

// Admin credentials - in a real app these would be stored securely on the server
const ADMIN_EMAIL = "admin@stobo.ai";
const ADMIN_PASSWORD = "admin123";

const AuthForm = ({ onLogin, onSignup, isSignUp = false, isLoading = false }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for admin credentials
    if (!isSignUp && email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      toast.success("Admin logged in successfully!");
      // In a real app, you'd set some admin state/context here
      navigate("/dashboard");
      return;
    }
    
    // Regular user authentication - accept any email and password
    if (isSignUp && onSignup) {
      onSignup(email, password, name);
      toast.success("Account created successfully!");
    } else if (onLogin) {
      onLogin(email, password);
      toast.success("Logged in successfully!");
    }
    
    // Redirect to dashboard after form submission
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSignUp && (
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="literary-input"
          />
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="literary-input"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="literary-input"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full literary-button"
        disabled={isLoading}
      >
        {isLoading ? 
          "Loading..." : 
          (isSignUp ? "Create Account" : "Sign In")
        }
      </Button>
    </form>
  );
};

export default AuthForm;
