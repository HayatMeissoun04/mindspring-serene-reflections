
import { Card } from "@/components/ui/card";
import ShareButtons from "./ShareButtons";
import { formatDistanceToNow } from "date-fns";

interface QuoteCardProps {
  id: string;
  quote: string;
  mood: string;
  date: Date;
  onDelete?: (id: string) => void;
}

const QuoteCard = ({ id, quote, mood, date, onDelete }: QuoteCardProps) => {
  return (
    <Card className="p-6 rounded-2xl hover:shadow-md transition-shadow bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{getMoodEmoji(mood)}</span>
          <span className="text-sm text-gray-500">{formatDistanceToNow(date, { addSuffix: true })}</span>
        </div>
        <ShareButtons quote={quote} showLabel={false} />
      </div>
      
      <p className="text-gray-700 mb-4">{quote}</p>
      
      {onDelete && (
        <button 
          onClick={() => onDelete(id)}
          className="text-xs text-gray-400 hover:text-red-400 transition-colors"
        >
          Delete
        </button>
      )}
    </Card>
  );
};

function getMoodEmoji(mood: string): string {
  switch (mood.toLowerCase()) {
    case "very happy": return "😄";
    case "happy": return "🙂";
    case "neutral": return "😐";
    case "sad": return "😔";
    case "very sad": return "😢";
    default: return "😐";
  }
}

export default QuoteCard;
