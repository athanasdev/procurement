import { Navigation } from "@/components/landing/Navigation";
import { HeroSection } from "@/components/landing/HeroSection";
import { SectorsSection } from "@/components/landing/SectorsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process millions of transactions with sub-second response times"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption with PCI DSS compliance built-in"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Multi-currency, multi-timezone support for worldwide operations"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and sector-specific KPI dashboards"
  },
  {
    icon: Clock,
    title: "Real-time Processing",
    description: "Instant invoice generation and payment processing"
  },
  {
    icon: Users,
    title: "Multi-tenant Ready",
    description: "Serve thousands of organizations from a single deployment"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CFO, MediCore Healthcare",
    content: "eUBS transformed our billing operations. The healthcare module handles complex insurance splits seamlessly.",
    sector: "Healthcare"
  },
  {
    name: "Marcus Rodriguez", 
    role: "VP Finance, TelCorp",
    content: "The telecommunications module's usage-based billing capabilities are unmatched. Our ARPU increased by 23%.",
    sector: "Telecom"
  },
  {
    name: "Dr. Amina Hassan",
    role: "Director, EduTech Solutions",
    content: "Student billing has never been easier. The education module handles everything from tuition to course fees perfectly.",
    sector: "Education"
  }
];

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SectorsSection />
      
      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Enterprise-Grade Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Built for Scale, Designed for Speed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every feature is engineered to handle enterprise workloads while maintaining 
              the flexibility to adapt to your unique business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="p-6 hover:shadow-elevated transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-xl group-hover:shadow-primary transition-smooth">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Customer Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="p-6 hover:shadow-card transition-smooth">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3">
                      {testimonial.sector}
                    </Badge>
                    <p className="text-muted-foreground italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-hero rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Billing?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of organizations already using eUBS to streamline their billing operations 
              and boost revenue across multiple sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">eUBS</span>
            </div>
            <p className="text-muted-foreground">
              Electronic Universal Billing System - The future of modular billing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;