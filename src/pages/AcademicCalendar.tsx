import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AcademicCalendar = () => {
  const academicEvents = [
    {
      date: "August 15, 2024",
      event: "Independence Day Holiday",
      category: "Holiday",
      color: "bg-red-100 text-red-800"
    },
    {
      date: "August 20, 2024", 
      event: "Semester Registration Starts",
      category: "Academic",
      color: "bg-blue-100 text-blue-800"
    },
    {
      date: "September 1, 2024",
      event: "Classes Begin - Odd Semester",
      category: "Academic", 
      color: "bg-blue-100 text-blue-800"
    },
    {
      date: "September 15, 2024",
      event: "Late Registration Deadline",
      category: "Academic",
      color: "bg-blue-100 text-blue-800"
    },
    {
      date: "October 2, 2024",
      event: "Gandhi Jayanti Holiday",
      category: "Holiday",
      color: "bg-red-100 text-red-800"
    },
    {
      date: "October 15-20, 2024",
      event: "Mid-Term Examinations",
      category: "Exam",
      color: "bg-orange-100 text-orange-800"
    },
    {
      date: "November 1, 2024",
      event: "Diwali Festival Break Starts",
      category: "Holiday",
      color: "bg-red-100 text-red-800"
    },
    {
      date: "November 10, 2024",
      event: "Classes Resume After Break",
      category: "Academic",
      color: "bg-blue-100 text-blue-800"
    },
    {
      date: "December 1-15, 2024",
      event: "End Semester Examinations",
      category: "Exam", 
      color: "bg-orange-100 text-orange-800"
    },
    {
      date: "December 20, 2024",
      event: "Winter Break Begins",
      category: "Holiday",
      color: "bg-red-100 text-red-800"
    },
    {
      date: "January 15, 2025",
      event: "Even Semester Registration",
      category: "Academic",
      color: "bg-blue-100 text-blue-800"
    },
    {
      date: "February 1, 2025",
      event: "Even Semester Classes Begin",
      category: "Academic",
      color: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-8 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Academic Calendar 2024-25</h1>
          <p className="text-white/90 mt-2">Important dates and academic events</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          {academicEvents.map((event, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground text-lg">{event.event}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <Badge className={`${event.color} border-0`}>
                    {event.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Event Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-100 rounded"></div>
                <span className="text-sm">Academic Events</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-100 rounded"></div>
                <span className="text-sm">Examinations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-100 rounded"></div>
                <span className="text-sm">Holidays</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AcademicCalendar;