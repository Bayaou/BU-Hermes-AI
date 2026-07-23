// src/sections/Features.tsx
import Card from "../components/Card";
import Button from "../components/Button";

export default function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'AI Chat',
      description: 'Talk naturally with Hermes to complete everyday tasks.',
      color: 'from-pink-500/20 to-pink-400/20',
      borderColor: 'border-pink-400/30',
      glowColor: 'shadow-pink-500/20',
      iconColor: 'text-pink-400'
    },
    {
      icon: '📅',
      title: 'Calendar Assistant',
      description: 'Manage meetings and organize your schedule using AI.',
      color: 'from-purple-500/20 to-purple-400/20',
      borderColor: 'border-purple-400/30',
      glowColor: 'shadow-purple-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: '📧',
      title: 'Email Assistant',
      description: 'Read, summarize and draft emails in seconds.',
      color: 'from-blue-500/20 to-blue-400/20',
      borderColor: 'border-blue-400/30',
      glowColor: 'shadow-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: '📚',
      title: 'Research Assistant',
      description: 'Search the web, summarize papers and collect references.',
      color: 'from-green-500/20 to-green-400/20',
      borderColor: 'border-green-400/30',
      glowColor: 'shadow-green-500/20',
      iconColor: 'text-green-400'
    },
    {
      icon: '🧠',
      title: 'Memory',
      description: 'Hermes remembers important information across conversations.',
      color: 'from-yellow-500/20 to-yellow-400/20',
      borderColor: 'border-yellow-400/30',
      glowColor: 'shadow-yellow-500/20',
      iconColor: 'text-yellow-400'
    },
    {
      icon: '⚡',
      title: 'Automation',
      description: 'Connect tools together and automate repetitive tasks.',
      color: 'from-red-500/20 to-red-400/20',
      borderColor: 'border-red-400/30',
      glowColor: 'shadow-red-500/20',
      iconColor: 'text-red-400'
    }
  ];

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#0f0a14]">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      {/* Decorative floating orbs */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-4">
            ✦ Features
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white/90">Powerful AI</span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Built to automate your daily workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="text-center group relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
              </div>
              
              {/* Glow ring on hover */}
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-blue-500/0 
                            group-hover:from-pink-500/20 group-hover:via-purple-500/20 group-hover:to-blue-500/20 
                            transition-all duration-500 blur-sm opacity-0 group-hover:opacity-100`}>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="relative inline-block mb-4">
                  <div className={`text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-300 ${feature.iconColor}`}>
                    {feature.icon}
                  </div>
                  {/* Orbital ring around icon */}
                  <div className={`absolute inset-0 rounded-full border ${feature.borderColor} 
                                group-hover:border-white/20 transition-all duration-300 scale-110 opacity-0 group-hover:opacity-100`}>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/70 transition-colors">
                  {feature.description}
                </p>

                {/* Learn more link - appears on hover */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-sm ${feature.iconColor} hover:text-white cursor-pointer inline-flex items-center gap-1`}>
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Small Get Started Button - Right aligned with arrow */}
        <div className="flex justify-end animate-fade-in-up animation-delay-600">
          <Button 
            variant="secondary" 
            size="sm"
            className="group flex items-center gap-2"
            href="/register"
          >
            Get Started
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}