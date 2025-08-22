import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Zap } from "lucide-react";
import heroImage from "@/assets/hero-billing.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Modular Billing Revolution
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                eUBS
                <span className="block text-3xl lg:text-4xl font-normal mt-2 text-white/90">
                  Electronic Universal Billing System
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                The world's first truly modular billing platform. One core system, infinite possibilities. 
                From healthcare to telecommunications, utilities to SaaS - scale across any sector seamlessly.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Building2 className="w-5 h-5" />
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">9+</div>
                <div className="text-white/80 text-sm">Industry Sectors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-white/80 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50M+</div>
                <div className="text-white/80 text-sm">Invoices Processed</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="eUBS Dashboard Interface" 
              className="relative rounded-3xl shadow-elevated w-full transform hover:scale-105 transition-smooth"
            />
          </div>
        </div>
      </div>
    </section>
  );
};