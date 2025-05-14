
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-pastel-purple/30 to-white">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-[10%] right-[20%] w-72 h-72 rounded-full bg-pastel-blue blur-3xl"></div>
            <div className="absolute bottom-[20%] left-[10%] w-60 h-60 rounded-full bg-pastel-pink blur-3xl"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-gray-800">
                Welcome to MindSpring
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Discover personalized mindfulness insights based on your mood, helping you navigate each day with greater awareness and peace.
              </p>
              <Link to="/check-in">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg hover:scale-105 transition-transform">
                  Start Your Daily Check-in
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16">How MindSpring Helps You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-pastel-blue rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  😊
                </div>
                <h3 className="text-xl font-playfair mb-3">Mood Tracking</h3>
                <p className="text-gray-600">
                  Check in with your emotions daily and track your mood patterns over time.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  💭
                </div>
                <h3 className="text-xl font-playfair mb-3">AI Insights</h3>
                <p className="text-gray-600">
                  Receive personalized messages, breathing exercises, and journal prompts.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-pastel-peach rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  📝
                </div>
                <h3 className="text-xl font-playfair mb-3">Journal History</h3>
                <p className="text-gray-600">
                  Save your favorite insights and review your mindfulness journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-pastel-blue/30 to-pastel-purple/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">Ready to Begin Your Mindfulness Journey?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of others who have improved their daily well-being with MindSpring's personalized guidance.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link to="/check-in">
                  <Button size="lg" className="rounded-full px-8">
                    Try a Check-in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    Create an Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
