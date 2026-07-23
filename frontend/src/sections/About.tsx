// src/sections/About.tsx
import Button from "../components/Button";

export default function About() {
  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'Countries' },
    { number: '24/7', label: 'Support' },
  ];

  const features = [
    {
      icon: '✦',
      title: 'Cutting-Edge Technology',
      description: 'Leveraging the latest advancements in AI and machine learning.'
    },
    {
      icon: '◆',
      title: 'User-Centric Design',
      description: 'Every pixel crafted with your experience in mind.'
    },
    {
      icon: '●',
      title: 'Global Community',
      description: 'Join thousands of users from around the world.'
    }
  ];

  return (
    <section 
     id="about"
    className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a0a0f]">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-4">
            ✦ About Us
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white/90">Building the</span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Future Together
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize the digital landscape with 
            cutting-edge technology and human-centered design.
          </p>
        </div>

        {/* Why Hermes - Glass Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 animate-fade-in-up animation-delay-200">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300
                         hover:transform hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-blue-500/0 
                            group-hover:from-pink-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 
                            transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-pink-400">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white/90 mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-400">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300
                         hover:transform hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <Button 
            variant="primary" 
            size="lg"
            className="min-w-[200px]"
          >
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}