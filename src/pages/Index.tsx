import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  Utensils, 
  Users, 
  Bus, 
  CalendarDays, 
  Building, 
  Coffee, 
  Clock3, 
  UserSearch 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const dashboardCards = [
  {
    title: "Timetable",
    description: "View class schedules",
    icon: Calendar,
    path: "/timetable",
    color: "bg-gradient-primary"
  },
  {
    title: "Mess Menu",
    description: "Weekly dining options",
    icon: Utensils,
    path: "/mess-menu",
    color: "bg-gradient-hero"
  },
  {
    title: "Faculty Directory",
    description: "Find faculty members",
    icon: Users,
    path: "/faculty",
    color: "bg-gradient-primary"
  },
  {
    title: "Bus Schedule",
    description: "College transport times",
    icon: Bus,
    path: "/bus-schedule",
    color: "bg-gradient-hero"
  },
  {
    title: "Academic Calendar",
    description: "Important dates & events",
    icon: CalendarDays,
    path: "/academic-calendar",
    color: "bg-gradient-primary"
  },
  {
    title: "Hostel Information",
    description: "Accommodation details",
    icon: Building,
    path: "/hostel-info",
    color: "bg-gradient-hero"
  },
  {
    title: "Campus Cafes",
    description: "Food courts & hangouts",
    icon: Coffee,
    path: "/campus-cafes",
    color: "bg-gradient-primary"
  },
  {
    title: "Hostel Timings",
    description: "In/Out time rules",
    icon: Clock3,
    path: "/hostel-timings",
    color: "bg-gradient-hero"
  },
  {
    title: "Student Directory",
    description: "Find fellow students",
    icon: UserSearch,
    path: "/student-directory",
    color: "bg-gradient-primary"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="bg-gradient-hero text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Jaypee University Student Hub
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Your one-stop portal for all campus information
          </p>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Link 
                key={card.path} 
                to={card.path}
                className="block group"
              >
                <Card className="h-full bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Unofficial Student Hub • Made by students, for students
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
