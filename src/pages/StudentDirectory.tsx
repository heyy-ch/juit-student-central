import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const StudentDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Sample student data (in real implementation, this would come from a secure API)
  const students = [
    {
      name: "Rahul Sharma",
      rollNo: "21CSE001",
      branch: "Computer Science",
      year: "3rd Year",
      email: "rahul.sharma@student.juit.ac.in",
      phone: "+91-9876543210"
    },
    {
      name: "Priya Patel", 
      rollNo: "21ECE015",
      branch: "Electronics & Communication",
      year: "3rd Year",
      email: "priya.patel@student.juit.ac.in",
      phone: "+91-9876543211"
    },
    {
      name: "Amit Kumar",
      rollNo: "22CSE045",
      branch: "Computer Science", 
      year: "2nd Year",
      email: "amit.kumar@student.juit.ac.in",
      phone: "+91-9876543212"
    },
    {
      name: "Sneha Gupta",
      rollNo: "22IT020",
      branch: "Information Technology",
      year: "2nd Year", 
      email: "sneha.gupta@student.juit.ac.in",
      phone: "+91-9876543213"
    },
    {
      name: "Ravi Singh",
      rollNo: "20ME030",
      branch: "Mechanical Engineering",
      year: "4th Year",
      email: "ravi.singh@student.juit.ac.in",
      phone: "+91-9876543214"
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = !selectedBranch || student.branch === selectedBranch;
    const matchesYear = !selectedYear || student.year === selectedYear;
    
    return matchesSearch && matchesBranch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-8 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Student Directory</h1>
          <p className="text-white/90 mt-2">Find and connect with fellow students</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Disclaimer */}
        <Card className="mb-8 border-l-4 border-l-accent bg-accent/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-accent mb-2">Privacy Notice</h3>
                <p className="text-sm text-muted-foreground">
                  This directory is for internal use only and requires a student login to access. 
                  All personal information is protected and should not be shared outside the university community.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Search Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or roll number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Branches</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Electronics & Communication">Electronics & Communication</SelectItem>
                  <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                  <SelectItem value="Information Technology">Information Technology</SelectItem>
                  <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Years</SelectItem>
                  <SelectItem value="1st Year">1st Year</SelectItem>
                  <SelectItem value="2nd Year">2nd Year</SelectItem>
                  <SelectItem value="3rd Year">3rd Year</SelectItem>
                  <SelectItem value="4th Year">4th Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Login Required Notice */}
        <Card className="border-2 border-dashed border-muted">
          <CardContent className="py-12 text-center">
            <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Student Login Required</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              To access the complete student directory with contact information, 
              please log in with your university credentials.
            </p>
            <div className="space-y-4">
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Login with Student ID
              </button>
              <p className="text-sm text-muted-foreground">
                Don't have access? Contact the Student Affairs Office
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sample Display (when logged in, this would show actual results) */}
        <div className="mt-8 opacity-50 pointer-events-none">
          <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
            Sample Directory Results (Login Required to View)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStudents.slice(0, 3).map((student, index) => (
              <Card key={index} className="blur-sm">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">{student.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{student.rollNo}</p>
                  <p className="text-sm text-primary mb-1">{student.branch}</p>
                  <p className="text-sm text-muted-foreground">{student.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDirectory;