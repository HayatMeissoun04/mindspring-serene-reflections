
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoodOption } from "@/types";

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
      
      <div className="flex justify-center flex-wrap gap-6 mb-10">
        {moodOptions.map((mood) => (
          <button
            key={mood.id}
            onClick={() => handleMoodSelect(mood)}
            className={`relative group w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center transition-all duration-300 ${
              selectedMood?.id === mood.id ? "scale-110" : ""
            }`}
            aria-label={mood.name}
          >
            {/* Fuzzy mood ball */}
            <div 
              className={`w-full h-full rounded-full shadow-md transition-all duration-300
                ${selectedMood?.id === mood.id ? 'ring-4 ring-white/50' : ''}
                hover:scale-105 hover:shadow-lg`}
              style={{
                background: mood.name === "Very Happy" ? "#FEF7CD" : 
                           mood.name === "Happy" ? "#F2FCE2" : 
                           mood.name === "Neutral" ? "#D3E4FD" : 
                           mood.name === "Sad" ? "#E5DEFF" : "#FFDEE2",
                boxShadow: selectedMood?.id === mood.id ? '0 0 20px rgba(255,255,255,0.4)' : ''
              }}
            >
              {/* Face features for the mood ball */}
              <div className="relative w-full h-full">
                {/* Eyes */}
                <div className="absolute" style={{ top: '40%', left: '30%', width: '8px', height: '8px', borderRadius: '50%', background: '#333' }}></div>
                <div className="absolute" style={{ top: '40%', right: '30%', width: '8px', height: '8px', borderRadius: '50%', background: '#333' }}></div>
                
                {/* Different mouth shapes based on mood */}
                {mood.name === "Very Happy" && (
                  <div className="absolute" style={{ bottom: '35%', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '8px', borderRadius: '0 0 10px 10px', border: '2px solid #333', borderTop: 'none' }}></div>
                )}
                {mood.name === "Happy" && (
                  <div className="absolute" style={{ bottom: '35%', left: '50%', transform: 'translateX(-50%)', width: '14px', height: '6px', borderRadius: '0 0 10px 10px', border: '2px solid #333', borderTop: 'none' }}></div>
                )}
                {mood.name === "Neutral" && (
                  <div className="absolute" style={{ bottom: '35%', left: '50%', transform: 'translateX(-50%)', width: '14px', height: '2px', background: '#333' }}></div>
                )}
                {mood.name === "Sad" && (
                  <div className="absolute" style={{ bottom: '38%', left: '50%', transform: 'translateX(-50%)', width: '14px', height: '6px', borderRadius: '10px 10px 0 0', border: '2px solid #333', borderBottom: 'none' }}></div>
                )}
                {mood.name === "Very Sad" && (
                  <div className="absolute" style={{ bottom: '38%', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '8px', borderRadius: '10px 10px 0 0', border: '2px solid #333', borderBottom: 'none' }}></div>
                )}
              </div>
            </div>
            
            {/* Mood name */}
            <span className="mt-3 text-sm font-medium text-gray-700">{mood.name}</span>
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
