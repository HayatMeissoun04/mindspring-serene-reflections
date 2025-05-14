import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoodSelector from "@/components/MoodSelector";
import InsightResult from "@/components/InsightResult";
import { getInsightsForMood } from "@/lib/data";
import type { MoodOption } from "@/types";

const CheckIn = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const moodParam = searchParams.get("mood");
  
  // State to track the selected mood
  const [selectedMood, setSelectedMood] = useState<MoodOption | null>(null);
  
  // Show results if mood is in URL params
  const showResults = !!moodParam;
  
  const handleMoodSubmit = (mood: MoodOption | null) => {
    if (mood) {
      // Use URL params to enable refresh while keeping state
      navigate(`/check-in?mood=${encodeURIComponent(mood.name)}`);
      setSelectedMood(mood);
    }
  };
  
  // Get insights based on mood
  const insights = moodParam ? getInsightsForMood(moodParam) : null;

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
              <p className="text-center text-gray-600 mb-10">Based on your {moodParam} mood today</p>
              
              {insights && (
                <InsightResult
                  mood={moodParam as string}
                  dailyMessage={insights.dailyMessage}
                  breathingTip={insights.breathingTip}
                  journalingPrompt={insights.journalingPrompt}
                />
              )}
              
              <div className="text-center mt-12">
                <button
                  onClick={() => navigate("/check-in")}
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
