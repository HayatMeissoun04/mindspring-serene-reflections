
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MoodOption {
  id: number;
  name: string;
  bgColor: string;
  emoji: string;
}

interface MoodSelectorProps {
  onSubmit: (selectedMood: MoodOption | null) => void;
}

const moodOptions: MoodOption[] = [
  { id: 1, name: "Very Happy", bgColor: "bg-pastel-yellow", emoji: "😄" },
  { id: 2, name: "Happy", bgColor: "bg-pastel-green", emoji: "🙂" },
  { id: 3, name: "Neutral", bgColor: "bg-pastel-blue", emoji: "😐" },
  { id: 4, name: "Sad", bgColor: "bg-pastel-purple", emoji: "😔" },
  { id: 5, name: "Very Sad", bgColor: "bg-pastel-pink", emoji: "😢" },
];

const MoodSelector = ({ onSubmit }: MoodSelectorProps) => {
  const [selectedMood, setSelectedMood] = useState<MoodOption | null>(null);

  const handleMoodSelect = (mood: MoodOption) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      onSubmit(selectedMood);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-8 text-gray-800">
        How are you feeling today?
      </h2>
      
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {moodOptions.map((mood) => (
          <button
            key={mood.id}
            onClick={() => handleMoodSelect(mood)}
            className={`mood-icon w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center ${
              mood.bgColor
            } text-4xl md:text-5xl transition-all ${
              selectedMood?.id === mood.id ? "active" : ""
            }`}
            aria-label={mood.name}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      
      <div className="text-center">
        <p className="mb-6 text-lg text-gray-600">
          {selectedMood 
            ? `You selected: ${selectedMood.name}`
            : "Select your mood to continue"}
        </p>
        
        <Button
          onClick={handleSubmit}
          disabled={!selectedMood}
          className="px-8 py-2 rounded-full transition-all hover:scale-105"
          size="lg"
        >
          Show My Insights
        </Button>
      </div>
    </div>
  );
};

export default MoodSelector;
