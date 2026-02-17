import { Link, useLocation } from "wouter";
import * as Tone from "tone";
import { cn } from "@/lib/utils";
import { Music, Drum, Mail, Menu, Mic2, User } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function SoundNav() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const playSound = async (note: string) => {
    // Only play if Tone is started (user has interacted)
    if (Tone.context.state === "running") {
      const synth = new Tone.Synth().toDestination();
      synth.volume.value = -10; // Softer
      synth.triggerAttackRelease(note, "8n");
    }
  };

  const navItems = [
    { name: "Music Production", path: "/music-production", note: "C5", icon: Mic2 },
    { name: "Meet the Instructor", path: "/meet-the-instructor", note: "E5", icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">
              P
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">
              Plum Creek <span className="text-primary">Music Lessons</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <div 
                className={cn(
                  "font-medium text-sm uppercase tracking-wider transition-colors hover:text-primary flex items-center gap-2 cursor-pointer",
                  location === item.path ? "text-primary font-bold" : "text-gray-600"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </div>
            </Link>
          ))}
          <Button 
            className="rounded-full px-6 font-bold"
          >
            Book Trial
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.path}>
                    <div 
                      className="text-2xl font-heading font-bold text-gray-800 hover:text-primary flex items-center gap-4 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-6 h-6" />
                      {item.name}
                    </div>
                  </Link>
                ))}
                <Button className="w-full mt-4" size="lg">Book Trial Lesson</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
