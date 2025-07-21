import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Timetable from "./pages/Timetable";
import MessMenu from "./pages/MessMenu";
import Faculty from "./pages/Faculty";
import BusSchedule from "./pages/BusSchedule";
import AcademicCalendar from "./pages/AcademicCalendar";
import HostelInfo from "./pages/HostelInfo";
import CampusCafes from "./pages/CampusCafes";
import HostelTimings from "./pages/HostelTimings";
import StudentDirectory from "./pages/StudentDirectory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/mess-menu" element={<MessMenu />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/bus-schedule" element={<BusSchedule />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/hostel-info" element={<HostelInfo />} />
          <Route path="/campus-cafes" element={<CampusCafes />} />
          <Route path="/hostel-timings" element={<HostelTimings />} />
          <Route path="/student-directory" element={<StudentDirectory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
