
// Mock data for insights based on mood
export const getInsightsForMood = (mood: string) => {
  const insights = {
    "Very Happy": {
      dailyMessage: "Your joy is radiant today! Embrace this positive energy and channel it into something creative or meaningful. Your happiness can be infectious and uplifting for those around you.",
      breathingTip: "Try a gratitude breath: Inhale for 4 counts focusing on something you're grateful for, hold for 2, then exhale for 6 counts spreading that gratitude outward.",
      journalingPrompt: "What three things contributed most to your happiness today, and how can you create more of these moments in the future?"
    },
    "Happy": {
      dailyMessage: "It's wonderful to see you in good spirits! This positive state is perfect for tackling challenges with optimism and connecting with others. Let your smile brighten someone else's day.",
      breathingTip: "Practice the 4-7-8 breathing technique: Inhale for 4 counts, hold for 7, and exhale for 8 counts, imagining releasing any lingering tensions.",
      journalingPrompt: "What small victory or pleasant surprise made you smile today? How did it affect your outlook?"
    },
    "Neutral": {
      dailyMessage: "Your balanced mood today offers clarity and perspective. This is an excellent time for planning, reflection, and mindful awareness of your surroundings. Notice the little things around you.",
      breathingTip: "Try box breathing to maintain your center: Inhale for 4 counts, hold for 4, exhale for 4, and hold empty lungs for 4. Visualize tracing a square with your breath.",
      journalingPrompt: "What area of your life feels most stable right now, and what area might benefit from more attention or care?"
    },
    "Sad": {
      dailyMessage: "It's okay to feel down sometimes. Your feelings are valid and deserve to be acknowledged. Remember that all emotions are temporary visitors, and gentleness with yourself is important right now.",
      breathingTip: "Practice comforting breath: Place a hand on your heart, breathe deeply into that space for 4 counts, and exhale slowly for 6, imagining the breath as a warm, soothing light.",
      journalingPrompt: "What would you say to a friend feeling the way you do now? Can you offer yourself that same compassion?"
    },
    "Very Sad": {
      dailyMessage: "I see you're having a difficult day. Remember that experiencing deep emotions is part of being human, and reaching out for support is a sign of strength, not weakness. This feeling won't last forever.",
      breathingTip: "Try grounding breaths: Breathe in deeply for 5 counts while pressing your feet firmly into the floor. Hold for 1 count, then exhale for 6 counts, repeating the phrase 'I am here now.'",
      journalingPrompt: "Without judgment, what is one small step you could take today that might bring even a moment of peace or comfort?"
    }
  };
  
  return insights[mood as keyof typeof insights] || insights["Neutral"];
};

// Mock saved insights for history page
export const mockSavedInsights = [
  {
    id: "1",
    mood: "Happy",
    dailyMessage: "It's wonderful to see you in good spirits! This positive state is perfect for tackling challenges with optimism and connecting with others.",
    breathingTip: "Practice the 4-7-8 breathing technique: Inhale for 4 counts, hold for 7, and exhale for 8 counts.",
    journalingPrompt: "What small victory or pleasant surprise made you smile today?",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
  },
  {
    id: "2",
    mood: "Neutral",
    dailyMessage: "Your balanced mood today offers clarity and perspective. This is an excellent time for planning, reflection, and mindful awareness.",
    breathingTip: "Try box breathing to maintain your center: Inhale for 4 counts, hold for 4, exhale for 4, and hold empty lungs for 4.",
    journalingPrompt: "What area of your life feels most stable right now?",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
  },
  {
    id: "3",
    mood: "Very Happy",
    dailyMessage: "Your joy is radiant today! Embrace this positive energy and channel it into something creative or meaningful.",
    breathingTip: "Try a gratitude breath: Inhale for 4 counts focusing on something you're grateful for, hold for 2, then exhale for 6 counts.",
    journalingPrompt: "What three things contributed most to your happiness today?",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 7 days ago
  }
];
