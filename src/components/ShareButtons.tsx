
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Facebook,
  Twitter,
  Linkedin,
  Share2
} from "lucide-react";

interface ShareButtonsProps {
  quote: string;
  showLabel?: boolean;
}

const ShareButtons = ({ quote, showLabel = true }: ShareButtonsProps) => {
  const [showOptions, setShowOptions] = useState(false);
  
  const shareText = `"${quote}" - Shared from MindSpring`;
  
  const handleShare = (platform: string) => {
    let shareUrl = "";
    
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
        break;
      default:
        // Use Web Share API if available
        if (navigator.share) {
          navigator.share({
            title: "MindSpring Insight",
            text: shareText,
            url: window.location.href
          }).catch(err => console.error("Error sharing:", err));
          return;
        }
        // Copy to clipboard as fallback
        navigator.clipboard.writeText(shareText + " " + window.location.href)
          .then(() => {
            alert("Link copied to clipboard!");
          })
          .catch(() => {
            alert("Failed to copy link.");
          });
        return;
    }
    
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center gap-2"
      >
        <Share2 size={16} />
        {showLabel && <span>Share</span>}
      </Button>

      {showOptions && (
        <div className="absolute right-0 bottom-12 bg-white shadow-lg rounded-lg p-3 z-10 flex gap-2 animate-fade-in">
          <Button
            variant="outline"
            size="icon"
            className="bg-[#1877f2] hover:bg-[#166fe5] text-white rounded-full w-10 h-10"
            onClick={() => handleShare("facebook")}
          >
            <Facebook size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-[#1da1f2] hover:bg-[#1a94da] text-white rounded-full w-10 h-10"
            onClick={() => handleShare("twitter")}
          >
            <Twitter size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-[#0a66c2] hover:bg-[#0958a8] text-white rounded-full w-10 h-10"
            onClick={() => handleShare("linkedin")}
          >
            <Linkedin size={18} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
