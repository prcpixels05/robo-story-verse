
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { ArrowLeft, PauseCircle, PlayCircle, Volume2, FileText } from "lucide-react";

// 3D robot placeholder until we implement WebGL
const Robot3D = () => {
  return (
    <div className="relative w-full h-64 md:h-96 bg-literary-dark rounded-lg overflow-hidden flex items-center justify-center">
      <img 
        src="/placeholder.svg" 
        alt="3D Robot Narrator" 
        className="w-1/2 h-1/2 object-contain opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <p className="absolute text-white text-center p-4 bottom-0">
        3D Robot Narrator (WebGL implementation coming soon)
      </p>
    </div>
  );
};

const Story = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [mode, setMode] = useState<"audio" | "text">("audio");
  
  // Mock story data - would come from API in real app
  const story = {
    id: "1",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    summary: "Alice's Adventures in Wonderland tells the story of a girl named Alice who falls down a rabbit hole into a fantasy world populated by peculiar creatures.",
    moral: "Curiosity can lead to wonderful adventures, but it's important to maintain your sense of identity amidst chaos and absurdity.",
    authorInfo: "Lewis Carroll was the pen name of Charles Lutwidge Dodgson (1832-1898), an English writer, mathematician, and photographer. His most famous writings are Alice's Adventures in Wonderland and its sequel Through the Looking-Glass.",
    relatedWorks: ["Through the Looking-Glass", "The Hunting of the Snark", "Sylvie and Bruno"],
    content: "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations?'\n\nSo she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her."
  };

  return (
    <div className="min-h-screen bg-literary-light">
      {/* Header with back button */}
      <header className="bg-literary-primary py-4 px-6">
        <div className="container mx-auto flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/")}
            className="text-white hover:bg-literary-primary/80"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl md:text-2xl font-bold text-white ml-2">{story.title}</h1>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {/* 3D Robot section */}
        <section className="mb-8">
          <Robot3D />
          
          {/* Playback controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setIsPlaying(!isPlaying)}
                className="h-12 w-12 rounded-full"
              >
                {isPlaying ? (
                  <PauseCircle className="h-6 w-6 text-literary-primary" />
                ) : (
                  <PlayCircle className="h-6 w-6 text-literary-primary" />
                )}
              </Button>
              
              <div className="w-full max-w-md bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-literary-primary h-full w-[35%]"></div>
              </div>
              
              <span className="text-sm text-gray-600">3:45 / 10:21</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Toggle 
                pressed={mode === "audio"} 
                onPressedChange={() => setMode("audio")}
                className={`${mode === "audio" ? "bg-literary-primary text-white" : ""}`}
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Robo
              </Toggle>
              
              <Toggle 
                pressed={mode === "text"} 
                onPressedChange={() => setMode("text")}
                className={`${mode === "text" ? "bg-literary-primary text-white" : ""}`}
              >
                <FileText className="h-4 w-4 mr-2" />
                Text
              </Toggle>
            </div>
          </div>
        </section>

        {/* Information panels */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Author Information */}
          <Card className="literary-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-literary-primary">Author Information</h3>
              <p className="text-gray-700">{story.authorInfo}</p>
            </CardContent>
          </Card>
          
          {/* Story Summary */}
          <Card className="literary-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-literary-primary">Story Summary</h3>
              <p className="text-gray-700">{story.summary}</p>
            </CardContent>
          </Card>
          
          {/* Moral/Message */}
          <Card className="literary-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-literary-primary">Moral/Message</h3>
              <p className="text-gray-700">{story.moral}</p>
            </CardContent>
          </Card>
          
          {/* Related Works */}
          <Card className="literary-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-literary-primary">Related Works</h3>
              <ul className="list-disc list-inside text-gray-700">
                {story.relatedWorks.map((work, index) => (
                  <li key={index} className="mb-1">{work}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Text content (only if in text mode) */}
        {mode === "text" && (
          <section className="my-8">
            <Card className="literary-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">{story.title}</h3>
                <div className="prose max-w-none">
                  {story.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-literary-dark text-white py-8 px-4">
        <div className="container mx-auto">
          <p className="text-center">© 2025 Robo Story Verse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Story;
