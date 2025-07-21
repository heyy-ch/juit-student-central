import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bus, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BusSchedule = () => {
  const busRoutes = [
    {
      route: "Route A - Waknaghat",
      stops: [
        { stop: "Main Gate", toCollege: "7:30 AM", fromCollege: "5:30 PM" },
        { stop: "Waknaghat Market", toCollege: "7:45 AM", fromCollege: "5:15 PM" },
        { stop: "Kandaghat", toCollege: "8:00 AM", fromCollege: "5:00 PM" }
      ]
    },
    {
      route: "Route B - Solan",
      stops: [
        { stop: "Solan Bus Stand", toCollege: "7:00 AM", fromCollege: "6:00 PM" },
        { stop: "Solan Mall", toCollege: "7:15 AM", fromCollege: "5:45 PM" },
        { stop: "Chambaghat", toCollege: "7:30 AM", fromCollege: "5:30 PM" }
      ]
    },
    {
      route: "Route C - Shimla",
      stops: [
        { stop: "Shimla Bus Stand", toCollege: "6:30 AM", fromCollege: "6:30 PM" },
        { stop: "Sanjauli", toCollege: "6:45 AM", fromCollege: "6:15 PM" },
        { stop: "Summer Hill", toCollege: "7:00 AM", fromCollege: "6:00 PM" }
      ]
    },
    {
      route: "Route D - Pinjore",
      stops: [
        { stop: "Pinjore Gardens", toCollege: "7:15 AM", fromCollege: "5:45 PM" },
        { stop: "Kalka", toCollege: "7:30 AM", fromCollege: "5:30 PM" },
        { stop: "Parwanoo", toCollege: "7:45 AM", fromCollege: "5:15 PM" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white py-8 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">College Bus Schedule</h1>
          <p className="text-white/90 mt-2">Transportation timings for different routes</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {busRoutes.map((route, index) => (
            <Card key={index} className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Bus className="w-5 h-5 mr-2" />
                  {route.route}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Stop</th>
                        <th className="text-left p-3 font-semibold">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            To College
                          </div>
                        </th>
                        <th className="text-left p-3 font-semibold">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            From College
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {route.stops.map((stop, stopIndex) => (
                        <tr key={stopIndex} className="border-b hover:bg-muted/50">
                          <td className="p-3 font-medium">{stop.stop}</td>
                          <td className="p-3 text-accent font-medium">{stop.toCollege}</td>
                          <td className="p-3 text-accent font-medium">{stop.fromCollege}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notice */}
        <Card className="mt-8 border-l-4 border-l-accent">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-accent mb-2">Important Notes:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Please arrive 5 minutes before departure time</li>
              <li>• Weekend schedules may vary - check with transport office</li>
              <li>• Emergency contact: Transport Office - +91-1792-239803</li>
              <li>• Carry your student ID card while traveling</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusSchedule;