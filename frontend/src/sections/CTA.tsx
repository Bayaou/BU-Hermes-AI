// src/sections/CTA.tsx (Option 3 - Dynamic)
import Button from "../components/Button";
import { Link } from "react-router-dom";

type CTAProps = {
  isLoggedIn?: boolean;
};

export default function CTA({ isLoggedIn = false }: CTAProps) {
  return (
    <section 
      id="cta"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#0f0a14]"
    >
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 
                       hover:bg-white/10 hover:border-white/20 transition-all duration-500">
          
          {/* Dynamic Heading based on login state */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            {isLoggedIn ? (
              <span className="text-white/90">
                Welcome Back!
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                  Ready to Continue?
                </span>
              </span>
            ) : (
              <>
                <span className="text-white/90">Your AI Workspace</span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                  Starts Here
                </span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            {isLoggedIn 
              ? "Continue where you left off and let Hermes supercharge your productivity."
              : "Join thousands of users building smarter workflows with Hermes AI."
            }
          </p>

          {/* Dynamic Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              className="min-w-[200px]"
              href={isLoggedIn ? "/dashboard" : "/register"}
            >
              {isLoggedIn ? "Go to Dashboard" : "Create Free Account"}
            </Button>
          </div>

          {/* Secondary Link */}
          {!isLoggedIn && (
            <p className="text-sm text-white/40 mt-6 text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-pink-400 hover:text-pink-300 transition-colors hover:underline">
                Sign In
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}