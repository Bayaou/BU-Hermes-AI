// src/pages/Login.tsx
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] px-4 py-12 relative overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="text-3xl font-bold text-white/90 hover:text-pink-300 transition-colors inline-block">
              ✦ Hermes
            </Link>
            <h2 className="text-2xl font-bold text-white/90 mt-4">Welcome Back</h2>
            <p className="text-white/50 text-sm mt-2">Log in to continue with Hermes</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm text-white/60 mb-1.5">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/90 
                           placeholder:text-white/30 focus:border-pink-400/50 focus:outline-none 
                           transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-white/60 mb-1.5">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/90 
                           placeholder:text-white/30 focus:border-pink-400/50 focus:outline-none 
                           transition-all duration-300"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a href="#" className="text-sm text-pink-400 hover:text-pink-300 transition-colors">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <Button 
              variant="primary" 
              size="lg"
              className="w-full"
            >
              Log In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0a0a0f] text-white/30">or</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 
                             hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <span>G</span> Continue with Google
            </button>
            <button className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 
                             hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <span>◆</span> Continue with GitHub
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-white/40 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-pink-400 hover:text-pink-300 transition-colors">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}