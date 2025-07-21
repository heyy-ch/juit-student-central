import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Coffee, Clock, CreditCard, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const CampusCafes = () => {
  const cafes = [
    {
      name: "Main Canteen",
      location: "Academic Block Ground Floor",
      timings: "7:00 AM - 10:00 PM",
      paymentOptions: ["Cash", "UPI", "Student Card"],
      menu: [
        "North Indian Meals - ₹80-120",
        "South Indian Items - ₹40-80", 
        "Chinese Food - ₹60-100",
        "Snacks & Beverages - ₹20-60",
        "Ice Cream - ₹25-50"
      ],
      specialty: "Full meals and variety snacks"
    },
    {
      name: "Night Cafe",
      location: "Near Boys Hostel",
      timings: "6:00 PM - 2:00 AM",
      paymentOptions: ["Cash", "UPI"],
      menu: [
        "Maggi & Noodles - ₹30-50",
        "Sandwiches - ₹40-70",
        "Tea & Coffee - ₹10-25",
        "Momos - ₹40-60",
        "Parathas - ₹30-50"
      ],
      specialty: "Late night snacks and quick bites"
    },
    {
      name: "Juice Corner",
      location: "Library Building",
      timings: "8:00 AM - 8:00 PM", 
      paymentOptions: ["Cash", "UPI", "Student Card"],
      menu: [
        "Fresh Fruit Juices - ₹25-50",
        "Shakes & Smoothies - ₹40-80",
        "Lassi - ₹30-50",
        "Fresh Lime - ₹20-30",
        "Seasonal Fruits - ₹10-40"
      ],
      specialty: "Fresh juices and healthy drinks"
    },
    {
      name: "Pizza Corner", 
      location: "Recreation Center",
      timings: "11:00 AM - 11:00 PM",
      paymentOptions: ["Cash", "UPI", "Cards"],
      menu: [
        "Personal Pizza - ₹120-200",
        "Medium Pizza - ₹250-400", 
        "Garlic Bread - ₹80-120",
        "Pasta - ₹100-150",
        "Cold Drinks - ₹20-40"
      ],
      specialty: "Italian food and pizzas"
    },
    {
      name: "Tea Stall",
      location: "Administrative Block",
      timings: "6:00 AM - 6:00 PM",
      paymentOptions: ["Cash", "UPI"],
      menu: [
        "Tea - ₹8-15",
        "Coffee - ₹10-20", 
        "Biscuits - ₹5-20",
        "Samosa - ₹12-20",
        "Bread Pakoda - ₹15-25"
      ],
      specialty: "Quick tea and light snacks"
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
          <h1 className="text-3xl md:text-4xl font-bold">Campus Cafes & Hangouts</h1>
          <p className="text-white/90 mt-2">Food courts and dining options on campus</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {cafes.map((cafe, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Coffee className="w-5 h-5 mr-2" />
                  {cafe.name}
                </CardTitle>
                <p className="text-muted-foreground">{cafe.specialty}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-sm">{cafe.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-sm">{cafe.timings}</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <CreditCard className="w-4 h-4 text-accent mt-1" />
                      <div>
                        <p className="text-sm font-medium">Payment Options:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {cafe.paymentOptions.map((option, optIndex) => (
                            <span key={optIndex} className="bg-accent/10 text-accent text-xs px-2 py-1 rounded">
                              {option}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Menu */}
                  <div>
                    <h4 className="font-semibold mb-3">Menu & Prices:</h4>
                    <div className="space-y-2">
                      {cafe.menu.map((item, menuIndex) => (
                        <div key={menuIndex} className="bg-muted/30 p-3 rounded-lg">
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* General Information */}
        <Card className="mt-8 border-l-4 border-l-primary">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-primary mb-3">General Information:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Student ID cards may offer discounts at selected outlets</li>
              <li>• Most cafes accept UPI payments for convenience</li>
              <li>• Hygiene and quality standards are maintained across all outlets</li>
              <li>• Special festival menus available during celebrations</li>
              <li>• For complaints or suggestions, contact Student Affairs Office</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CampusCafes;