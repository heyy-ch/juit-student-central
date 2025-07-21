import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const HostelTimings = () => {
  const timings = [
    {
      hostelType: "Boys' Hostel (All Blocks)",
      weekdays: {
        entry: "6:00 AM - 10:30 PM",
        exit: "6:00 AM onwards",
        lateEntry: "After 10:30 PM (Special Permission Required)"
      },
      weekends: {
        entry: "6:00 AM - 11:30 PM", 
        exit: "6:00 AM onwards",
        lateEntry: "After 11:30 PM (Special Permission Required)"
      }
    },
    {
      hostelType: "Girls' Hostel (1st & 2nd Year)",
      weekdays: {
        entry: "6:00 AM - 9:30 PM",
        exit: "6:00 AM - 7:00 PM",
        lateEntry: "No late entry allowed"
      },
      weekends: {
        entry: "6:00 AM - 10:00 PM",
        exit: "6:00 AM - 8:00 PM", 
        lateEntry: "Special occasions only"
      }
    },
    {
      hostelType: "Girls' Hostel (3rd & 4th Year)",
      weekdays: {
        entry: "6:00 AM - 10:00 PM",
        exit: "6:00 AM - 8:00 PM",
        lateEntry: "Till 10:30 PM with permission"
      },
      weekends: {
        entry: "6:00 AM - 10:30 PM",
        exit: "6:00 AM - 9:00 PM",
        lateEntry: "Till 11:00 PM with permission"
      }
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
          <h1 className="text-3xl md:text-4xl font-bold">Hostel In/Out Timings</h1>
          <p className="text-white/90 mt-2">Entry and exit rules for all hostel residents</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {timings.map((timing, index) => (
            <Card key={index} className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Clock className="w-5 h-5 mr-2" />
                  {timing.hostelType}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Weekdays */}
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-4">Weekdays (Monday - Friday)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium">Entry Timing:</p>
                        <p className="text-sm text-muted-foreground">{timing.weekdays.entry}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Exit Timing:</p>
                        <p className="text-sm text-muted-foreground">{timing.weekdays.exit}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Late Entry:</p>
                        <p className="text-sm text-muted-foreground">{timing.weekdays.lateEntry}</p>
                      </div>
                    </div>
                  </div>

                  {/* Weekends */}
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-4">Weekends (Saturday - Sunday)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium">Entry Timing:</p>
                        <p className="text-sm text-muted-foreground">{timing.weekends.entry}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Exit Timing:</p>
                        <p className="text-sm text-muted-foreground">{timing.weekends.exit}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Late Entry:</p>
                        <p className="text-sm text-muted-foreground">{timing.weekends.lateEntry}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Rules */}
        <Card className="mt-8 border-l-4 border-l-accent">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-accent mb-3">Important Rules & Guidelines:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Students must carry valid ID cards for entry verification</li>
                  <li>• Late entry permissions must be obtained from hostel warden</li>
                  <li>• Emergency contacts should be provided to hostel office</li>
                  <li>• Violations of timing rules may result in disciplinary action</li>
                  <li>• Special event timings will be announced separately</li>
                  <li>• Parents/Guardians will be informed of repeated violations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-primary">Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Boys' Hostel:</h4>
                <p className="text-sm text-muted-foreground">Warden: +91-1792-239802</p>
                <p className="text-sm text-muted-foreground">Security: +91-1792-239805</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Girls' Hostel:</h4>
                <p className="text-sm text-muted-foreground">Warden: +91-1792-239803</p>
                <p className="text-sm text-muted-foreground">Security: +91-1792-239806</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HostelTimings;