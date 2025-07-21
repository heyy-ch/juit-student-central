import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Timetable = () => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const sampleTimetable = [
    { time: "9:00 - 10:00", monday: "Math", tuesday: "Physics", wednesday: "Chemistry", thursday: "English", friday: "Computer" },
    { time: "10:00 - 11:00", monday: "Physics", tuesday: "Math", wednesday: "English", thursday: "Chemistry", friday: "Physics" },
    { time: "11:00 - 12:00", monday: "Chemistry", tuesday: "Computer", wednesday: "Math", thursday: "Physics", friday: "English" },
    { time: "12:00 - 1:00", monday: "English", tuesday: "Chemistry", wednesday: "Computer", thursday: "Math", friday: "Chemistry" },
    { time: "2:00 - 3:00", monday: "Computer", tuesday: "English", wednesday: "Physics", thursday: "Computer", friday: "Math" },
    { time: "3:00 - 4:00", monday: "Lab", tuesday: "Lab", wednesday: "Lab", thursday: "Lab", friday: "Lab" }
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
          <h1 className="text-3xl md:text-4xl font-bold">Class Timetables</h1>
          <p className="text-white/90 mt-2">View your class schedule</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter Timetable</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Branch</label>
                <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Branch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cse">Computer Science</SelectItem>
                    <SelectItem value="ece">Electronics & Communication</SelectItem>
                    <SelectItem value="me">Mechanical Engineering</SelectItem>
                    <SelectItem value="ce">Civil Engineering</SelectItem>
                    <SelectItem value="it">Information Technology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Year</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Section</label>
                <Select value={selectedSection} onValueChange={setSelectedSection}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">Section A</SelectItem>
                    <SelectItem value="b">Section B</SelectItem>
                    <SelectItem value="c">Section C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timetable */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Time</th>
                    <th className="text-left p-3 font-semibold">Monday</th>
                    <th className="text-left p-3 font-semibold">Tuesday</th>
                    <th className="text-left p-3 font-semibold">Wednesday</th>
                    <th className="text-left p-3 font-semibold">Thursday</th>
                    <th className="text-left p-3 font-semibold">Friday</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleTimetable.map((slot, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-3 font-medium">{slot.time}</td>
                      <td className="p-3">{slot.monday}</td>
                      <td className="p-3">{slot.tuesday}</td>
                      <td className="p-3">{slot.wednesday}</td>
                      <td className="p-3">{slot.thursday}</td>
                      <td className="p-3">{slot.friday}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Timetable;