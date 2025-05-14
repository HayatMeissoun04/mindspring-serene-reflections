
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoodSelector from "@/components/MoodSelector";
import InsightResult from "@/components/InsightResult";
import { getInsightsForMood } from "@/lib/data";
import type { MoodOption } from "@/types";

const CheckIn = () => {
  const navigate = useNavigate();
  
  // State to track the selected mood and whether to show results
  const [selectedMood, setSelectedMood] = useState<MoodOption | null>(null);
  const [showResults, setShowResults] = useState(false);
  
  const handleMoodSubmit = (mood: MoodOption | null) => {
    if (mood) {
      // Don't use URL params - use state instead to prevent page refresh
      setSelectedMood(mood);
      setShowResults(true);
    }
  };
  
  const handleStartOver = () => {
    setShowResults(false);
    setSelectedMood(null);
  };
  
  // Get insights based on mood
  const insights = selectedMood ? getInsightsForMood(selectedMood.name) : null;

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="container">
          {!showResults ? (
            // Mood selection screen
            <div className="py-8">
              <MoodSelector onSubmit={handleMoodSubmit} />
            </div>
          ) : (
            // Results screen
            <div className="py-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair text-center mb-2 text-gray-800">
                Your Daily Insights
              </h2>
              <p className="text-center text-gray-600 mb-10">
                Based on your {selectedMood?.name} mood today
              </p>
              
              {insights && (
                <InsightResult
                  mood={selectedMood?.name as string}
                  dailyMessage={insights.dailyMessage}
                  breathingTip={insights.breathingTip}
                  journalingPrompt={insights.journalingPrompt}
                />
              )}
              
              <div className="text-center mt-12">
                <button
                  onClick={handleStartOver}
                  className="text-primary hover:underline"
                >
                  ← Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CheckIn;
