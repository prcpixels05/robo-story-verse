import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Mail, User, UserCog } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import Footer from "@/components/Footer";
import ProfileImageUploader from "@/components/ProfileImageUploader";
import { useUser } from "@/context/UserContext";

const Profile = () => {
  const { user, updateUser } = useUser();
  
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
    profileImage: user.profileImage,
    preferences: {
      genres: ["Fiction", "Fantasy", "Mystery"],
      authors: ["Jane Austen", "George Orwell", "J.K. Rowling"],
      readingTime: "Evening",
    }
  });

  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    bio: userData.bio,
  });

  // Update the form data when user context changes
  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      bio: user.bio,
    });
    setUserData(prev => ({
      ...prev,
      name: user.name,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage
    }));
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Update local state
    setUserData(prev => ({
      ...prev,
      name: formData.name,
      email: formData.email,
      bio: formData.bio,
    }));
    
    // Update global context
    updateUser({
      name: formData.name,
      email: formData.email,
      bio: formData.bio,
    });
    
    toast("Profile updated successfully", {
      description: "Your profile information has been saved.",
    });
  };

  const handleProfileImageChange = (imageUrl: string) => {
    setUserData(prev => ({
      ...prev,
      profileImage: imageUrl
    }));
    
    // Update global context
    updateUser({
      profileImage: imageUrl
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-literary-light dark:bg-literary-dark p-4 md:p-8">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-literary-primary mr-2" />
            <h1 className="text-3xl font-bold text-literary-primary">Stobo.ai</h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3">
              <Card className="shadow-md">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <ProfileImageUploader
                      currentImage={userData.profileImage}
                      fallbackText={userData.name.charAt(0)}
                      onImageChange={handleProfileImageChange}
                    />
                  </div>
                  <CardTitle className="text-2xl font-serif">{userData.name}</CardTitle>
                  <CardDescription className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-300">
                    <Mail className="h-4 w-4" />
                    {userData.email}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center italic mb-6">"{userData.bio}"</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-medium mb-1">Favorite Genres</h3>
                      <div className="flex flex-wrap gap-1">
                        {userData.preferences.genres.map(genre => (
                          <span key={genre} className="bg-literary-light dark:bg-gray-700 text-literary-primary px-2 py-1 rounded-md text-sm">
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-1">Favorite Authors</h3>
                      <div className="flex flex-wrap gap-1">
                        {userData.preferences.authors.map(author => (
                          <span key={author} className="bg-literary-light dark:bg-gray-700 text-literary-primary px-2 py-1 rounded-md text-sm">
                            {author}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-1">Preferred Reading Time</h3>
                      <span className="bg-literary-light dark:bg-gray-700 text-literary-primary px-2 py-1 rounded-md text-sm">
                        {userData.preferences.readingTime}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full lg:w-2/3">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserCog className="h-5 w-5" />
                    Profile Settings
                  </CardTitle>
                  <CardDescription>
                    Manage your profile information and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="general" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="general">General</TabsTrigger>
                      <TabsTrigger value="preferences">Preferences</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="general" className="space-y-4 mt-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          className="literary-input"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          className="literary-input"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Input 
                          id="bio" 
                          name="bio" 
                          value={formData.bio} 
                          onChange={handleChange} 
                          className="literary-input"
                        />
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input 
                          id="current-password" 
                          type="password" 
                          placeholder="••••••••" 
                          className="literary-input"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input 
                          id="new-password" 
                          type="password" 
                          placeholder="••••••••" 
                          className="literary-input"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="preferences" className="space-y-6 mt-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Reading Preferences</h3>
                        
                        <div className="space-y-2">
                          <Label>Favorite Genres</Label>
                          <div className="flex flex-wrap gap-2">
                            {["Fiction", "Fantasy", "Mystery", "Sci-Fi", "Romance", "Biography", "History", "Poetry"].map(genre => (
                              <Button 
                                key={genre}
                                variant={userData.preferences.genres.includes(genre) ? "default" : "outline"} 
                                size="sm"
                                className="text-sm"
                              >
                                {genre}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Preferred Reading Time</Label>
                          <div className="flex flex-wrap gap-2">
                            {["Morning", "Afternoon", "Evening", "Night"].map(time => (
                              <Button 
                                key={time}
                                variant={userData.preferences.readingTime === time ? "default" : "outline"} 
                                size="sm"
                                className="text-sm"
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">App Settings</h3>
                        
                        <div className="space-y-2">
                          <Label>Reading Font</Label>
                          <div className="flex flex-wrap gap-2">
                            {["Serif", "Sans-serif", "Monospace"].map(font => (
                              <Button 
                                key={font}
                                variant="outline" 
                                size="sm"
                                className="text-sm"
                              >
                                {font}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Font Size</Label>
                          <div className="flex flex-wrap gap-2">
                            {["Small", "Medium", "Large"].map(size => (
                              <Button 
                                key={size}
                                variant="outline" 
                                size="sm"
                                className="text-sm"
                              >
                                {size}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button className="literary-button" onClick={handleSave}>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
