import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SoundNav } from "@/components/SoundNav";
import { Check, Calendar as CalendarIcon, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const { toast } = useToast();

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "Eric will confirm your slot shortly via email.",
    });
  };

  const times = ["10:00 AM", "11:00 AM", "2:00 PM", "3:30 PM", "5:00 PM"];

  return (
    <div className="min-h-screen bg-secondary/20 font-sans">
      <SoundNav />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold mb-4">Book Your Lesson</h1>
            <p className="text-xl text-muted-foreground">Select a time for your 50% off trial lesson.</p>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Calendar & Time Selection */}
            <Card className="md:col-span-7 p-6 border-none shadow-xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-primary" /> Select Date
                  </h3>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm mx-auto"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" /> Select Time
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {times.map((t) => (
                      <Button
                        key={t}
                        variant={time === t ? "default" : "outline"}
                        onClick={() => setTime(t)}
                        className={time === t ? "bg-primary text-white" : ""}
                      >
                        {t}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Confirmation Form */}
            <Card className="md:col-span-5 p-8 border-none shadow-xl bg-white h-fit">
              <h3 className="font-heading text-2xl font-bold mb-6">Your Details</h3>
              
              <div className="space-y-4 mb-6 bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Lesson Type:</span>
                  <span className="font-bold">Trial Lesson (30 mins)</span>
                </div>
                 <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-bold">{date?.toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Time:</span>
                  <span className="font-bold">{time || "Select a time"}</span>
                </div>
                <div className="border-t border-blue-100 pt-2 flex justify-between">
                  <span className="font-bold text-gray-700">Total:</span>
                  <span className="font-bold text-primary">$12.50 <span className="text-xs line-through text-gray-400">$25.00</span></span>
                </div>
              </div>

              <form onSubmit={handleBook} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="parent-name">Parent's Name</Label>
                  <Input id="parent-name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-name">Student's Name & Age</Label>
                  <Input id="student-name" placeholder="Billy, Age 8" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                
                <Button type="submit" className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 mt-4" disabled={!time || !date}>
                  Confirm Booking
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  <Check className="w-3 h-3 inline text-green-500 mr-1" />
                  Secure Zoom link sent upon confirmation
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
