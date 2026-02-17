import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { HomePage } from "@/components/HomePage";
import BookingPage from "@/pages/booking";
import MeetTheInstructorPage from "@/pages/meet-the-instructor";
import MusicProductionPage from "@/pages/music-production";
import { ScrollToTop } from "@/components/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/booking" component={BookingPage} />
      <Route path="/meet-the-instructor" component={MeetTheInstructorPage} />
      <Route path="/music-production" component={MusicProductionPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
