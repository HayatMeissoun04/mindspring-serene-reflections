
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      setError("Please agree to the terms of service");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    try {
      // Simulate registration - will be replaced with Supabase
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show simulated error for now
      setError("Sign up will be implemented with Supabase integration");
    } catch (err) {
      setError("An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12 px-4 bg-gradient-to-b from-pastel-purple/20 to-white">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl p-8 shadow-soft">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-playfair font-bold">Create Account</h1>
              <p className="text-gray-600 mt-2">Join MindSpring to begin your mindfulness journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  required
                  className="rounded-xl"
                />
                <p className="text-xs text-gray-500">
                  Password must be at least 8 characters
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => 
                    setAgreedToTerms(checked as boolean)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    terms of service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    privacy policy
                  </a>
                </label>
              </div>

              {error && (
                <div className="p-3 text-sm bg-red-50 text-red-500 rounded-lg">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl"
              >
                {isLoading ? "Creating Account..." : "Sign Up"}
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
