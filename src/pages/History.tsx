
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteCard from "@/components/QuoteCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { toast } from "@/components/ui/sonner";
import { Database } from "@/lib/database.types";

type Insight = {
  id: string;
  mood: string;
  dailyMessage: string;
  date: Date;
};

type UserInsight = Database['public']['Tables']['user_insights']['Row'];

const History = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Fetch user insights from Supabase
  useEffect(() => {
    const fetchInsights = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_insights')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;

        const formattedInsights = data.map((insight: UserInsight) => ({
          id: insight.id,
          mood: insight.mood,
          dailyMessage: insight.daily_message,
          date: new Date(insight.created_at)
        }));

        setInsights(formattedInsights);
      } catch (error: any) {
        console.error("Error fetching insights:", error);
        toast.error("Failed to load your insights");
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, [user]);

  const handleDelete = async (id: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_insights')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;

      setInsights((prev) => prev.filter(insight => insight.id !== id));
      toast.success("Insight deleted");
    } catch (error: any) {
      console.error("Error deleting insight:", error);
      toast.error("Failed to delete insight");
    }
  };

  if (!user) {
    return (
      <>
        <Navbar />
        <main className="flex-1 py-12 px-4">
          <div className="container">
            <div className="text-center py-12">
              <h3 className="text-xl mb-4 text-gray-700">Sign in to view your history</h3>
              <p className="text-gray-500 mb-6">
                Your saved insights will appear here after you sign in
              </p>
              <Button asChild>
                <a href="/signin">Sign In</a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-playfair text-center mb-2 text-gray-800">
            Your Mindfulness Journey
          </h1>
          <p className="text-center text-gray-600 mb-10">Review your past insights and reflections</p>
          
          {loading ? (
            <div className="text-center py-8">
              <p>Loading your insights...</p>
            </div>
          ) : insights.length > 0 ? (
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
