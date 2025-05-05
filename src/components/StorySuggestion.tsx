
import { Search } from "lucide-react";

interface StorySuggestionProps {
  suggestion: string;
}

const StorySuggestion = ({ suggestion }: StorySuggestionProps) => {
  return (
    <div className="flex items-center gap-2 w-full p-1">
      <Search className="h-4 w-4 text-gray-400" />
      <span>{suggestion}</span>
    </div>
  );
};

export default StorySuggestion;
