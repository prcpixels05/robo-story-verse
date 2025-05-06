
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { toast } from "sonner";

interface ProfileImageUploaderProps {
  currentImage: string;
  fallbackText: string;
  onImageChange: (imageUrl: string) => void;
}

const ProfileImageUploader = ({
  currentImage,
  fallbackText,
  onImageChange,
}: ProfileImageUploaderProps) => {
  const [previewUrl, setPreviewUrl] = useState<string>(currentImage);
  const [isHovering, setIsHovering] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) return;
    
    // Validate file type
    if (!file.type.match(/image\/(jpeg|jpg|png|gif|webp)/i)) {
      toast.error("Invalid file type. Please upload an image file.");
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File too large. Maximum size is 5MB.");
      return;
    }
    
    // Create object URL for preview
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onImageChange(url);
    
    toast.success("Profile image updated successfully!");
    
    // In a real app, you would upload to a server/storage here
    // For now we're just using local object URLs
  };

  return (
    <div className="relative">
      <input
        type="file"
        id="profile-image"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <label 
        htmlFor="profile-image" 
        className="cursor-pointer block"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative">
          <Avatar className="h-24 w-24 border-2 border-literary-accent">
            <AvatarImage src={previewUrl} alt="Profile" />
            <AvatarFallback className="bg-literary-secondary text-white text-xl">
              {fallbackText}
            </AvatarFallback>
          </Avatar>
          
          <div 
            className={`absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center transition-opacity ${
              isHovering ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <User className="h-8 w-8 text-white" />
          </div>
        </div>
      </label>
      
      <p className="text-sm text-center mt-2 text-gray-600 dark:text-gray-400">
        Click to change
      </p>
    </div>
  );
};

export default ProfileImageUploader;
