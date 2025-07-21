import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building, Users, Wifi, Car } from "lucide-react";
import { Link } from "react-router-dom";

const HostelInfo = () => {
  const hostels = [
    {
      name: "Boys Hostel - Block A",
      capacity: "200 students",
      type: "Boys",
      facilities: ["Wi-Fi", "Common Room", "Laundry", "Mess"]
    },
    {
      name: "Boys Hostel - Block B", 
      capacity: "180 students",
      type: "Boys",
      facilities: ["Wi-Fi", "Gymnasium", "Laundry", "Mess"]
    },
    {
      name: "Girls Hostel - Block C",
      capacity: "150 students", 
      type: "Girls",
      facilities: ["Wi-Fi", "Common Room", "Laundry", "Mess", "Security"]
    },
    {
      name: "Girls Hostel - Block D",
      capacity: "120 students",
      type: "Girls", 
      facilities: ["Wi-Fi", "Study Hall", "Laundry", "Mess", "Security"]
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
          <h1 className="text-3xl md:text-4xl font-bold">Hostel Accommodation & Rules</h1>
          <p className="text-white/90 mt-2">Complete guide to campus accommodation</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hostel Allotment Process */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-primary">Hostel Allotment Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>1. <strong>Application:</strong> Submit hostel application form during admission process</p>
              <p>2. <strong>Payment:</strong> Pay hostel fees as per university guidelines</p>
              <p>3. <strong>Allotment:</strong> Rooms are allotted based on availability and year of study</p>
              <p>4. <strong>Check-in:</strong> Report to hostel warden with required documents</p>
              <p>5. <strong>Security Deposit:</strong> Pay refundable security deposit at check-in</p>
            </div>
          </CardContent>
        </Card>

        {/* List of Hostels */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-primary">Available Hostels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hostels.map((hostel, index) => (
                <div key={index} className="border rounded-lg p-4 bg-muted/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">{hostel.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{hostel.capacity}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Facilities:</p>
                    <div className="flex flex-wrap gap-1">
                      {hostel.facilities.map((facility, fIndex) => (
                        <span key={fIndex} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Room Facilities */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-primary">Room Facilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Standard Room Includes:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bed with mattress</li>
                  <li>• Study table and chair</li>
                  <li>• Wardrobe/Almirah</li>
                  <li>• Ceiling fan</li>
                  <li>• Electric points</li>
                  <li>• Window with curtains</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Common Facilities:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 24/7 Wi-Fi connectivity</li>
                  <li>• Common washrooms</li>
                  <li>• Hot water supply</li>
                  <li>• Power backup</li>
                  <li>• Security surveillance</li>
                  <li>• Visitor's room</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* General Rules */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-primary">General Rules & Regulations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-accent mb-2">Entry/Exit Timings:</h4>
                <p className="text-muted-foreground text-sm">Refer to Hostel Timings section for detailed timing information</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-accent mb-2">Discipline:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Maintain cleanliness in rooms and common areas</li>
                  <li>• No loud music or disturbance after 10 PM</li>
                  <li>• Smoking and alcohol consumption strictly prohibited</li>
                  <li>• Visitors must register at reception</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-accent mb-2">Important Contacts:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Hostel Office: +91-1792-239801</li>
                  <li>• Boys Hostel Warden: +91-1792-239802</li>
                  <li>• Girls Hostel Warden: +91-1792-239803</li>
                  <li>• Emergency Security: +91-1792-239800</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HostelInfo;