
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ShareButtons from "./ShareButtons";

interface InsightResultProps {
  mood: string;
  dailyMessage: string;
  breathingTip: string;
  journalingPrompt: string;
}

const InsightResult = ({
  mood,
  dailyMessage,
  breathingTip,
  journalingPrompt,
}: InsightResultProps) => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // In the future, this will save to Supabase
    // For now, just show the success state
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Daily Message Card */}
        <div className="insight-card col-span-1 md:col-span-2 p-8 rounded-3xl bg-white shadow-soft border border-gray-100">
          <h3 className="text-2xl font-playfair mb-3 text-gray-800">Your Daily Message</h3>
          <p className="text-lg text-gray-600 leading-relaxed">{dailyMessage}</p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between">
            <Button 
              onClick={handleSave} 
              variant={saved ? "outline" : "default"}
              className="mb-4 sm:mb-0"
            >
              {saved ? "✓ Saved to History" : "Save This Insight"}
            </Button>
            
            <ShareButtons quote={dailyMessage} />
          </div>
        </div>

        {/* Breathing Exercise Card */}
        <div className="insight-card p-8 rounded-3xl bg-gradient-to-br from-pastel-blue to-white shadow-soft">
          <h3 className="text-2xl font-playfair mb-4 text-gray-800">Breathing Exercise</h3>
          <div className="flex items-center justify-center mb-6">
            <div className="breathing-animation w-20 h-20 bg-blue-400/30 rounded-full"></div>
          </div>
          <p className="text-gray-600">{breathingTip}</p>
        </div>

        {/* Journaling Prompt Card */}
        <div className="insight-card p-8 rounded-3xl bg-gradient-to-br from-pastel-peach to-white shadow-soft">
          <h3 className="text-2xl font-playfair mb-4 text-gray-800">Journal Prompt</h3>
          <p className="text-gray-600 mb-4">{journalingPrompt}</p>
          <div className="p-3 bg-white/60 rounded-xl border border-gray-100 text-sm text-gray-500">
            Write your thoughts in a journal to reflect on this prompt
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightResult;
