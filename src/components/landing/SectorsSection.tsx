import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Radio, 
  Zap, 
  ShoppingBag, 
  Cloud, 
  Truck, 
  Hotel, 
  GraduationCap, 
  Building2 
} from "lucide-react";
import sectorsImage from "@/assets/sectors-grid.jpg";

const sectors = [
  {
    icon: Heart,
    name: "Healthcare",
    description: "Patient billing, insurance splits, recurring subscriptions",
    metrics: "Patient balance, claim ratios",
    color: "bg-red-500"
  },
  {
    icon: Radio,
    name: "Telecommunications",
    description: "Usage-based billing, prepaid vs postpaid management",
    metrics: "ARPU, churn rate analysis",
    color: "bg-blue-500"
  },
  {
    icon: Zap,
    name: "Utilities",
    description: "Meter readings, tiered pricing, consumption tracking",
    metrics: "Usage trends, aging reports",
    color: "bg-yellow-500"
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    description: "Cart management, discounts, tax calculations",
    metrics: "Sales analytics, top products",
    color: "bg-green-500"
  },
  {
    icon: Cloud,
    name: "SaaS & Cloud",
    description: "Subscription tiers, usage-based API billing",
    metrics: "MRR/ARR, customer LTV",
    color: "bg-purple-500"
  },
  {
    icon: Truck,
    name: "Transport & Logistics",
    description: "Weight/distance/time billing calculations",
    metrics: "Fleet revenue, delivery costs",
    color: "bg-orange-500"
  },
  {
    icon: Hotel,
    name: "Hospitality",
    description: "Room rates, extras billing, seasonal pricing",
    metrics: "Occupancy rate, RevPAR",
    color: "bg-pink-500"
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Tuition billing, course fees, scholarships",
    metrics: "Collection efficiency, outstanding tuition",
    color: "bg-indigo-500"
  },
  {
    icon: Building2,
    name: "Finance & Insurance",
    description: "Loan schedules, insurance premiums",
    metrics: "Claim ratios, overdue analysis",
    color: "bg-teal-500"
  },
];

export const SectorsSection = () => {
  return (
    <section id="sectors" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Universal Compatibility
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            One Platform, Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            eUBS adapts to your industry's unique billing requirements with specialized modules 
            while maintaining a unified core system for consistency and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sectors.map((sector, index) => (
            <Card key={sector.name} className="p-6 hover:shadow-elevated transition-smooth group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${sector.color} bg-opacity-10 group-hover:bg-opacity-20 transition-smooth`}>
                  <sector.icon className={`w-6 h-6 ${sector.color.replace('bg-', 'text-')}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{sector.name}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    {sector.description}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    Analytics: {sector.metrics}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-10 blur-3xl"></div>
          <img 
            src={sectorsImage} 
            alt="Industry Sectors" 
            className="relative rounded-3xl shadow-card w-full max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};