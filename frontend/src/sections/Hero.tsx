// src/sections/Hero.tsx
import Button from "../components/Button";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class with random properties
    class Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
      brightness: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speed = (Math.random() * 0.3 + 0.05) * (Math.random() > 0.5 ? 1 : -1);
        this.opacity = Math.random() * 0.8 + 0.2;
        this.twinkleSpeed = Math.random() * 0.03 + 0.01;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.brightness = Math.random();
        const colors = [
          '255,255,255',
          '200,220,255',
          '255,240,200',
          '255,200,230',
          '180,200,255'
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(time: number) {
        this.twinklePhase += this.twinkleSpeed;
        const twinkle = Math.sin(this.twinklePhase) * 0.3 + 0.7;
        this.opacity = twinkle * (0.5 + this.brightness * 0.5);
        this.x += this.speed * 0.1;
        this.y += Math.sin(this.twinklePhase * 0.5) * 0.02;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.opacity * (0.5 + this.brightness * 0.5);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * (0.5 + this.brightness * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
        ctx.fill();

        if (this.brightness > 0.7) {
          ctx.shadowColor = `rgba(${this.color}, ${alpha * 0.3})`;
          ctx.shadowBlur = 15 * this.brightness;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    // Create stars
    const stars: Star[] = [];
    const starCount = Math.min(
      Math.floor((canvas.width * canvas.height) / 2000),
      400
    );

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Shooting star class
    class ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5;
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 10 + 5;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
        this.opacity = 1;
        this.active = false;
        this.life = 0;
        this.maxLife = 60 + Math.random() * 60;
      }

      activate() {
        this.x = Math.random() * canvas.width * 0.8 + canvas.width * 0.1;
        this.y = Math.random() * canvas.height * 0.4;
        this.active = true;
        this.life = 0;
        this.opacity = 1;
      }

      update() {
        if (!this.active) {
          if (Math.random() < 0.001) {
            this.activate();
          }
          return;
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life++;
        this.opacity = 1 - (this.life / this.maxLife);

        if (this.life > this.maxLife || this.x > canvas.width || this.y > canvas.height) {
          this.active = false;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (!this.active || this.opacity <= 0) return;

        const endX = this.x - Math.cos(this.angle) * this.length;
        const endY = this.y - Math.sin(this.angle) * this.length;

        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
        gradient.addColorStop(0, `rgba(255,255,255,${this.opacity})`);
        gradient.addColorStop(0.3, `rgba(255,255,255,${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(255,255,255,0)`);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.fill();
      }
    }

    const shootingStars: ShootingStar[] = [];
    for (let i = 0; i < 3; i++) {
      shootingStars.push(new ShootingStar());
    }

    // Animation loop
    let animationId: number;
    let time = 0;

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update(time);
        star.draw(ctx);
      });

      shootingStars.forEach(star => {
        star.update();
        star.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section 
     id="hero" 
    className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      
      {/* Canvas for dynamic stars */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />

      {/* Nebula glow effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          <span className="text-white/70 text-sm font-medium">
            ✦ Welcome to Hermes
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="text-white/90">Your AI</span>
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
            Digital Assistant
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400 leading-relaxed">
          Meet Hermes - your intelligent AI assistant that helps you work smarter, 
          not harder. Experience the future of productivity today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <Button 
            variant="primary" 
            size="lg"
            className="min-w-[180px]"
            href="/register"
          >
            Get Started
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            className="min-w-[180px]"
            href="/#features"
          >
            Learn More
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/30 text-sm animate-fade-in-up animation-delay-800">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400/50"></span>
            10K+ Active Users
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400/50"></span>
            99.9% Uptime
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400/50"></span>
            24/7 Support
          </span>
        </div>
      </div>
    </section>
  );
}