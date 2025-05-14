
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-pastel-green/30 to-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-800">
                About MindSpring
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our mission is to help people develop a more mindful relationship with their emotions through daily reflection and personalized guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair mb-8 text-center">Our Story</h2>
              
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  MindSpring was born from a simple observation: in our busy modern lives, we often neglect to check in with ourselves and acknowledge how we're feeling.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team of mental health professionals, meditation practitioners, and technology experts came together with a shared vision: to create an accessible tool that helps people build emotional awareness through brief but meaningful daily check-ins.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that mindfulness shouldn't be complicated. Sometimes, all it takes is pausing for a moment, recognizing your current emotional state, and receiving gentle guidance tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gradient-to-r from-pastel-blue/20 to-pastel-purple/20">
          <div className="container">
            <h2 className="text-3xl font-playfair mb-12 text-center">How MindSpring Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-soft text-center">
                <div className="w-14 h-14 bg-pastel-yellow rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  1
                </div>
                <h3 className="text-xl font-playfair mb-3">Check In Daily</h3>
                <p className="text-gray-600">
                  Take a moment to identify and acknowledge how you're feeling using our intuitive mood selector.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-soft text-center">
                <div className="w-14 h-14 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  2
                </div>
                <h3 className="text-xl font-playfair mb-3">Receive Insights</h3>
                <p className="text-gray-600">
                  Get personalized messages, breathing exercises, and journal prompts based on your current emotional state.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-soft text-center">
                <div className="w-14 h-14 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  3
                </div>
                <h3 className="text-xl font-playfair mb-3">Track Progress</h3>
                <p className="text-gray-600">
                  Save meaningful insights and observe patterns in your emotional wellbeing over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-playfair mb-6">Join Our Community</h2>
              <p className="text-lg text-gray-600 mb-8">
                Take the first step toward a more mindful relationship with your emotions. Create an account to start your personalized journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg" className="rounded-full px-8">
                    Sign Up for Free
                  </Button>
                </Link>
                <Link to="/check-in">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    Try Without Account
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

export default About;
