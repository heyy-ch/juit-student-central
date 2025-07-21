import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MessMenu = () => {
  const weeklyMenu = [
    {
      day: "Monday",
      breakfast: "Poha, Tea/Coffee, Banana",
      lunch: "Dal, Rice, Roti, Sabji, Curd",
      snacks: "Samosa, Tea",
      dinner: "Rajma, Rice, Roti, Salad"
    },
    {
      day: "Tuesday", 
      breakfast: "Upma, Tea/Coffee, Apple",
      lunch: "Dal, Rice, Roti, Aloo Gobi, Curd",
      snacks: "Pakoda, Tea",
      dinner: "Chole, Rice, Roti, Salad"
    },
    {
      day: "Wednesday",
      breakfast: "Paratha, Tea/Coffee, Orange",
      lunch: "Dal, Rice, Roti, Bhindi, Curd", 
      snacks: "Bread Pakoda, Tea",
      dinner: "Dal Makhani, Rice, Roti, Salad"
    },
    {
      day: "Thursday",
      breakfast: "Idli Sambhar, Tea/Coffee, Banana",
      lunch: "Dal, Rice, Roti, Paneer, Curd",
      snacks: "Aloo Tikki, Tea", 
      dinner: "Kadhi, Rice, Roti, Salad"
    },
    {
      day: "Friday",
      breakfast: "Dosa, Tea/Coffee, Apple",
      lunch: "Dal, Rice, Roti, Mix Veg, Curd",
      snacks: "Chhole Kulche, Tea",
      dinner: "Palak Paneer, Rice, Roti, Salad"
    },
    {
      day: "Saturday",
      breakfast: "Aloo Paratha, Tea/Coffee, Orange", 
      lunch: "Dal, Rice, Roti, Cauliflower, Curd",
      snacks: "Pasta, Tea",
      dinner: "Butter Chicken, Rice, Roti, Salad"
    },
    {
      day: "Sunday",
      breakfast: "Puri Sabji, Tea/Coffee, Banana",
      lunch: "Special Thali, Sweet",
      snacks: "Pizza, Cold Drink", 
      dinner: "Biryani, Raita, Salad"
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
          <h1 className="text-3xl md:text-4xl font-bold">Weekly Mess Menu</h1>
          <p className="text-white/90 mt-2">Daily dining options at college mess</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {weeklyMenu.map((day, index) => (
            <Card key={index} className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{day.day}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Breakfast</h4>
                    <p className="text-sm text-muted-foreground">{day.breakfast}</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Lunch</h4>
                    <p className="text-sm text-muted-foreground">{day.lunch}</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Snacks</h4>
                    <p className="text-sm text-muted-foreground">{day.snacks}</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Dinner</h4>
                    <p className="text-sm text-muted-foreground">{day.dinner}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessMenu;