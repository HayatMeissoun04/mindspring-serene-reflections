
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoodSelector from "@/components/MoodSelector";
import InsightResult from "@/components/InsightResult";
import { getInsightsForMood } from "@/lib/data";
import type { MoodOption } from "@/types";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

const CheckIn = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // State to track the selected mood and whether to show results
  const [selectedMood, setSelectedMood] = useState<MoodOption | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
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

  // Save insights to user's history
  const saveInsight = async () => {
    if (!user) {
      toast.error("Please sign in to save your insights");
      navigate('/signin');
      return;
    }

    if (!insights || !selectedMood) return;

    setIsSaving(true);
    
    try {
      const { error } = await supabase.from('user_insights').insert({
        user_id: user.id,
        mood: selectedMood.name,
        daily_message: insights.dailyMessage,
        breathing_tip: insights.breathingTip,
        journaling_prompt: insights.journalingPrompt,
        created_at: new Date().toISOString()
      });

      if (error) throw error;
      
      toast.success("Insight saved to your history");
    } catch (error: any) {
      toast.error(error.message || "Failed to save insight");
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

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
                <>
                  <InsightResult
                    mood={selectedMood?.name as string}
                    dailyMessage={insights.dailyMessage}
                    breathingTip={insights.breathingTip}
                    journalingPrompt={insights.journalingPrompt}
                  />
                  
                  <div className="flex justify-center mt-8">
                    <Button 
                      onClick={saveInsight} 
                      disabled={isSaving}
                      className="rounded-xl"
                    >
                      {isSaving ? "Saving..." : "Save to My History"}
                    </Button>
                  </div>
                </>
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
