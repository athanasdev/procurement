import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Users, 
  Receipt, 
  TrendingUp, 
  ArrowUp, 
  ArrowDown,
  Activity
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$2.4M",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs last month"
  },
  {
    title: "Active Customers",
    value: "1,249",
    change: "+8.2%",
    trend: "up", 
    icon: Users,
    description: "across all sectors"
  },
  {
    title: "Invoices Issued",
    value: "3,847",
    change: "+15.3%",
    trend: "up",
    icon: Receipt,
    description: "this month"
  },
  {
    title: "Payment Success Rate",
    value: "98.7%",
    change: "-0.3%",
    trend: "down",
    icon: Activity,
    description: "average success rate"
  }
];

const sectorBreakdown = [
  { sector: "Telecommunications", revenue: "$845K", percentage: 35.2, color: "bg-blue-500" },
  { sector: "Healthcare", revenue: "$612K", percentage: 25.5, color: "bg-red-500" },
  { sector: "Utilities", revenue: "$487K", percentage: 20.3, color: "bg-yellow-500" },
  { sector: "SaaS & Cloud", revenue: "$298K", percentage: 12.4, color: "bg-purple-500" },
  { sector: "Others", revenue: "$158K", percentage: 6.6, color: "bg-gray-500" }
];

export const DashboardStats = () => {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="hover:shadow-card transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="flex items-center gap-2">
                <Badge 
                  variant={stat.trend === 'up' ? 'default' : 'destructive'}
                  className="text-xs px-2 py-1"
                >
                  {stat.trend === 'up' ? (
                    <ArrowUp className="w-3 h-3 mr-1" />
                  ) : (
                    <ArrowDown className="w-3 h-3 mr-1" />
                  )}
                  {stat.change}
                </Badge>
                <span className="text-xs text-muted-foreground">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue by Sector */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Revenue by Sector
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sectorBreakdown.map((item, index) => (
                <div key={item.sector} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.sector}</span>
                    <span className="text-muted-foreground">{item.revenue}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color} transition-smooth`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.percentage}% of total revenue
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-success mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Payment Received</p>
                  <p className="text-xs text-muted-foreground">Invoice #INV-2025-0847 paid by TelCorp Ltd.</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
                <Badge variant="default" className="text-xs">$12,500</Badge>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New Invoice Generated</p>
                  <p className="text-xs text-muted-foreground">Healthcare Services Inc. - Monthly subscription</p>
                  <p className="text-xs text-muted-foreground">15 minutes ago</p>
                </div>
                <Badge variant="default" className="text-xs">$8,750</Badge>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-warning mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Payment Overdue</p>
                  <p className="text-xs text-muted-foreground">Invoice #INV-2025-0823 is 3 days overdue</p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
                <Badge variant="destructive" className="text-xs">$3,200</Badge>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New Customer Registered</p>
                  <p className="text-xs text-muted-foreground">EduTech Solutions - Education sector</p>
                  <p className="text-xs text-muted-foreground">6 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};