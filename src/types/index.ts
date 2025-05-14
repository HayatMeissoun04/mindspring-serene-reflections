
export interface MoodOption {
  id: number;
  name: string;
  bgColor: string;
  emoji: string;
}

export interface Insight {
  id: string;
  mood: string;
  dailyMessage: string;
  breathingTip: string;
  journalingPrompt: string;
  date: Date;
  userId?: string;
}
