
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockSavedInsights } from "@/lib/data";
import QuoteCard from "@/components/QuoteCard";
import { Button } from "@/components/ui/button";

const History = () => {
  const [insights, setInsights] = useState(mockSavedInsights);

  const handleDelete = (id: string) => {
    setInsights((prev) => prev.filter(insight => insight.id !== id));
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-playfair text-center mb-2 text-gray-800">
            Your Mindfulness Journey
          </h1>
          <p className="text-center text-gray-600 mb-10">Review your past insights and reflections</p>
          
          {insights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {insights.map((insight) => (
                <QuoteCard
                  key={insight.id}
                  id={insight.id}
                  quote={insight.dailyMessage}
                  mood={insight.mood}
                  date={insight.date}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl mb-4 text-gray-700">No saved insights yet</h3>
              <p className="text-gray-500 mb-6">
                Your saved insights and reflections will appear here
              </p>
              <Button asChild>
                <a href="/check-in">Start a Check-in</a>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default History;
