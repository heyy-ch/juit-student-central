import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      department: "Computer Science",
      email: "rajesh.kumar@juit.ac.in",
      office: "Academic Block A, Room 301",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Prof. Priya Sharma",
      department: "Electronics & Communication", 
      email: "priya.sharma@juit.ac.in",
      office: "Academic Block B, Room 205",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b332c3cd?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Amit Singh",
      department: "Mechanical Engineering",
      email: "amit.singh@juit.ac.in", 
      office: "Workshop Block, Room 101",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Prof. Neha Gupta",
      department: "Information Technology",
      email: "neha.gupta@juit.ac.in",
      office: "Academic Block A, Room 405",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Suresh Patel",
      department: "Civil Engineering",
      email: "suresh.patel@juit.ac.in",
      office: "Academic Block C, Room 302",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Prof. Kavita Jain",
      department: "Mathematics",
      email: "kavita.jain@juit.ac.in",
      office: "Academic Block A, Room 201",
      photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const filteredFaculty = facultyMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-8 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Faculty Directory</h1>
          <p className="text-white/90 mt-2">Find faculty members and their contact information</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map((member, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6 text-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {member.department}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-primary">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{member.office}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No faculty members found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faculty;