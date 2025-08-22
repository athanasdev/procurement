import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Zap, 
  LayoutDashboard, 
  Users, 
  Receipt, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Bell,
  Search,
  User
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
  currentPage?: string;
}

const sidebarItems = [
  { label: "Dashboard", href: "#dashboard", icon: LayoutDashboard, active: true },
  { label: "Customers", href: "#customers", icon: Users },
  { label: "Invoices", href: "#invoices", icon: Receipt },
  { label: "Payments", href: "#payments", icon: CreditCard },
  { label: "Analytics", href: "#analytics", icon: BarChart3 },
  { label: "Settings", href: "#settings", icon: Settings },
];

export const AdminLayout = ({ children, currentPage = "Dashboard" }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">eUBS</span>
            <Badge variant="secondary" className="text-xs">Admin</Badge>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 bg-muted rounded-lg border-0 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></div>
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="p-6 pt-20 lg:pt-6">
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-smooth
                    ${item.label === currentPage 
                      ? 'bg-primary text-primary-foreground shadow-primary' 
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-8 p-4 bg-gradient-subtle rounded-lg">
              <div className="text-sm font-medium mb-2">Current Plan</div>
              <div className="text-xs text-muted-foreground mb-3">Enterprise</div>
              <Button variant="outline" size="sm" className="w-full">
                Upgrade Plan
              </Button>
            </div>
          </div>
        </aside>

        {/* Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 lg:hidden z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{currentPage}</h1>
              <p className="text-muted-foreground">
                Welcome back to your eUBS administration panel.
              </p>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};