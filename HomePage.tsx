import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Video, Laptop, Mic, Wifi, MapPin, Clock, HelpCircle, ChevronDown, Monitor, Home, Mail } from "lucide-react";
import { SoundNav } from "@/components/SoundNav";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";

export function HomePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <SoundNav />
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 md:pt-36 md:pb-24 px-4 overflow-hidden">
        {/* Connection Visual - Background Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 Q400,200 800,100 T1600,100" fill="none" stroke="#f97316" strokeWidth="2" />
          <path d="M0,300 Q400,400 800,300 T1600,300" fill="none" stroke="#0ea5e9" strokeWidth="2" />
          <path d="M0,500 Q400,600 800,500 T1600,500" fill="none" stroke="#f97316" strokeWidth="1" />
        </svg>

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div {...fadeIn}>
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-8">
              Online • Interactive • Effective
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6 ml-[0px] mr-[0px]">
              Don't Just Listen to Music. <span className="text-primary text-gradient">Create It.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed ml-[5px] mr-[5px]">
              Cultivating confidence in young musicians and helping adults rediscover their passion.
            </p>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider ml-[6px] mr-[6px] mt-[20px] mb-[20px] pt-[2px] pb-[2px]">
              Piano Lessons • Drum Lessons • Music Production • Music Theory
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/20">
                <a href="#booking">Book a Trial Lesson</a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white w-[90%] mx-auto">
               <video 
                 src="/videos/hero-new.mov" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline
                 className="w-full aspect-square object-cover object-[center_20%] contrast-[1.05] saturate-[1.05] scale-[0.95]"
               />
               
               {/* Floating "Connection" Badge */}
               <motion.div 
                 animate={{ y: [0, -5, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50 flex items-center gap-2 max-w-[200px]"
               >
                 <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                   <Wifi className="w-4 h-4" />
                 </div>
                 <div>
                   <p className="font-bold text-xs text-foreground">Live Connection</p>
                   <p className="text-[10px] text-muted-foreground">HD Audio & Video</p>
                 </div>
               </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-primary/10 rounded-3xl blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-blue-500/10 rounded-3xl blur-3xl" />
          </motion.div>
        </div>
      </section>
      {/* Online Zoom Lessons */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1">
              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 shadow-inner">
                 <Monitor className="w-16 h-16 text-blue-600 mb-6" />
                 <h2 className="font-heading text-4xl font-bold mb-4">Online Zoom Lessons</h2>
                 <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                    Experience professional music instruction from anywhere in the world. Our remote lessons are designed to be just as effective as in-person sessions, utilizing high-quality audio and video technology to ensure a seamless learning environment.
                 </p>
                 <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-lg font-medium text-gray-700">
                       <Check className="w-6 h-6 text-green-500" />
                       Learn from the comfort of your home
                    </li>
                    <li className="flex items-center gap-3 text-lg font-medium text-gray-700">
                       <Check className="w-6 h-6 text-green-500" />
                       Save time on travel
                    </li>
                    <li className="flex items-center gap-3 text-lg font-medium text-gray-700">
                       <Check className="w-6 h-6 text-green-500" />
                       High-quality instruction via Zoom
                    </li>
                 </ul>
              </div>
           </div>
           <div className="order-1 md:order-2">
              {/* Placeholder for Zoom visual or keeping it simple with text focus as requested */}
              <div className="relative aspect-video bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                 <div className="text-center z-10">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                       <Video className="w-10 h-10 text-blue-600" />
                    </div>
                    <p className="font-bold text-blue-900 text-lg">Connect Instantly</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
      {/* In-Person Lessons */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
           {/* Visual Side */}
           <div>
              <div className="relative aspect-video md:aspect-[4/3] bg-gradient-to-tr from-[#FFF8E7] to-[#FFE4C4] rounded-[2.5rem] flex items-center justify-center shadow-sm">
                 <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm">
                       <Home className="w-10 h-10 text-[#ea580c]" strokeWidth={2.5} />
                    </div>
                    <p className="font-bold text-[#7c2d12] text-lg tracking-wide">Local Studio</p>
                 </div>
              </div>
           </div>

           {/* Content Side */}
           <div>
              <div className="mb-6">
                 <MapPin className="w-12 h-12 text-[#ea580c] mb-6" strokeWidth={2} />
                 <h2 className="font-heading text-5xl font-bold text-slate-900 mb-6">In-Person Lessons</h2>
                 <p className="text-xl text-slate-500 leading-relaxed mb-10">
                    For students in the Eau Claire and Chippewa Falls area, we offer traditional in-person lessons. Experience the energy of learning in a dedicated music studio environment with hands-on guidance.
                 </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                 <h3 className="font-bold text-lg text-slate-900 mb-2">Serving the Chippewa Valley</h3>
                 <p className="text-slate-500 leading-relaxed">
                    Located conveniently for families in Eau Claire, Chippewa Falls, and surrounding communities.
                 </p>
              </div>
           </div>
        </div>
      </section>
      {/* Trial Lesson Special Offer */}
      <section className="py-16 bg-primary/5 border-y border-primary/10" id="booking">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Start Your Musical Journey</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              The best way to see if we're a good fit is to try a lesson.<br />
              No commitment required.
            </p>
          </div>

          <div className="max-w-4xl mx-auto scale-90 origin-top">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
              <div className="grid md:grid-cols-2 min-h-[500px]">
                <div className="p-8 md:p-16 bg-white flex flex-col justify-center">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 w-fit">
                    New Student Offer
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-2">Introductory Trial Lesson</h3>
                  <div className="flex items-baseline gap-2 mb-6 py-4">
                    <span className="text-6xl font-extrabold text-primary">$25</span>
                    <span className="text-muted-foreground font-medium text-lg">/ 30 minutes</span>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Perfect for beginners or experienced players looking to restart their journey.
                  </p>
                  <Button size="lg" className="w-full text-lg font-bold h-14 bg-primary hover:bg-primary/90 mt-auto">
                    Book Your Trial Now
                  </Button>
                </div>
                <div className="bg-slate-50 p-8 md:p-16 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100">
                  <h4 className="font-bold text-lg mb-6">What's Included:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">1-on-1 Assessment</span>
                        <p className="text-sm text-slate-500">We'll discuss your goals and current skill level.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">Technical Setup</span>
                        <p className="text-sm text-slate-500">Ensure your audio/video is perfect for online lessons.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">Personalized Plan</span>
                        <p className="text-sm text-slate-500">Leave with clear next steps and practice materials.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">Sheet Music Included</span>
                        <p className="text-sm text-slate-500">Get your first song or exercise to start practicing.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="py-24 bg-background overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="font-heading text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  Student Success Stories
               </h2>
               <p className="text-xl text-muted-foreground">Don't just take our word for it.</p>
            </div>
            <ReviewsCarousel />
         </div>
      </section>
      {/* FAQ Section */ }
      <section className="py-24 bg-secondary/10">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
               <h2 className="font-heading text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  Frequently Asked Questions
               </h2>
            </div>
            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm px-8 py-4">
               <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Do I need my own instrument?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                     Yes, you will need a piano/keyboard or drum kit at home to practice between lessons. For online lessons, it's essential to have your instrument ready for the video call.
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">How do Zoom music lessons work?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                     We use a professional setup so you can see my hands and instrument clearly. You'll need a laptop or tablet positioned so I can see you play. We'll do a quick check during your first lesson!
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Do you teach beginners?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                     Absolutely! We specialize in teaching students of all ages and skill levels, from complete beginners to advanced players looking to refine their technique.
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">What is your cancellation policy?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                     Rescheduling or make up lesson provided if at least 8 hours notice is given.
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         </div>
      </section>
      {/* Scheduling */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/10 border-y border-primary/10">
         <div className="container mx-auto px-4 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
               <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
                  Limited Spots Available
               </div>
               <h3 className="font-heading text-4xl font-bold mb-6 flex items-center gap-3">
                  <Clock className="w-10 h-10 text-primary" />
                  Scheduling Availability
               </h3>
               <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  All times are in Central Time (CT). If you can't find an available time that works for you, contact Eric and he'll do his best to find a time that works.
               </p>
               <Button asChild size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/20 w-full sm:w-auto">
                 <a href="#booking">Book a Trial Lesson</a>
               </Button>
               <div className="mt-6 text-sm text-muted-foreground">
                  Need a different time? <a href="mailto:pcmusiclessons@gmail.com" className="text-primary font-medium hover:underline">Contact Eric</a>
               </div>
            </div>
            <div className="md:col-span-7">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                   <Card className="p-6 border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                      <span className="block text-primary font-bold uppercase text-xs mb-2">Monday</span>
                      <span className="font-heading text-xl font-bold text-foreground">7:00 PM</span>
                   </Card>
                   <Card className="p-6 border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                      <span className="block text-primary font-bold uppercase text-xs mb-2">Tuesday</span>
                      <span className="font-heading text-xl font-bold text-foreground">3:30 PM - 4:30 PM</span>
                   </Card>
                   <Card className="p-6 border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                      <span className="block text-primary font-bold uppercase text-xs mb-2">Wednesday</span>
                      <div className="font-heading text-xl font-bold text-foreground">3:30 PM - 5:00 PM</div>
                      <div className="font-heading text-xl font-bold text-foreground mt-1">6:30 PM - 7:00 PM</div>
                   </Card>
                   <Card className="p-6 border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                      <span className="block text-primary font-bold uppercase text-xs mb-2">Thursday</span>
                      <div className="font-heading text-xl font-bold text-foreground">3:30 PM - 5:30 PM</div>
                      <div className="font-heading text-xl font-bold text-foreground mt-1">7:00 PM</div>
                   </Card>
                   <Card className="p-6 border-primary/10 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                      <span className="block text-primary font-bold uppercase text-xs mb-2">Friday</span>
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                         <span className="font-heading text-xl font-bold text-foreground">2:30 PM - 4:30 PM</span>
                         <span className="font-heading text-xl font-bold text-foreground">5:00 PM - 7:00 PM</span>
                      </div>
                   </Card>
               </div>
            </div>
         </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
           {/* Main Footer Content */}
           <div className="grid md:grid-cols-4 gap-8">
             <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-2 mb-4">
                 <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">E</div>
                 <span className="font-heading font-bold text-xl">Plum Creek Music Lessons</span>
               </div>
               <p className="text-slate-400 max-w-xs mb-6">
                 Bringing professional music education to living rooms worldwide.
               </p>
               <div className="flex flex-col gap-2 text-slate-400">
                  <a href="mailto:pcmusiclessons@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                     <Mail className="w-4 h-4" /> pcmusiclessons@gmail.com
                  </a>
               </div>
             </div>
             
             <div>
               <h4 className="font-bold mb-4">Explore</h4>
               <ul className="space-y-2 text-slate-400">
                 <li><Link href="/music-production" className="hover:text-primary transition-colors">Music Production</Link></li>
                 <li><Link href="/meet-the-instructor" className="hover:text-primary transition-colors">Meet the Instructor</Link></li>
               </ul>
             </div>
             
             <div>
               <h4 className="font-bold mb-4">Get Started</h4>
               <div className="flex flex-col gap-4 items-start">
                   <Button asChild className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                       <a href="/#booking">Book a Trial Lesson</a>
                   </Button>
               </div>
             </div>
           </div>
           
           <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
             © {new Date().getFullYear()} Plum Creek Music Lessons. All rights reserved.
           </div>
        </div>
      </footer>
    </div>
  );
}

function PricingCard({ title, price, period, features, highlight = false }: { title: string, price: string, period: string, features: string[], highlight?: boolean }) {
  return (
    <Card className={cn(
      "p-8 relative flex flex-col",
      highlight ? "border-primary border-2 shadow-2xl scale-105 z-10" : "border-gray-100 shadow-lg"
    )}>
      {highlight && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
          Most Popular
        </div>
      )}
      <div className="mb-8">
        <h3 className="font-heading text-lg font-bold text-muted-foreground uppercase tracking-wider mb-2">{title}</h3>
        <div className="flex flex-col items-start gap-1">
          <span className="font-heading text-5xl font-extrabold text-foreground text-center">{price}</span>
          <span className="text-muted-foreground text-sm font-medium">{period}</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-600">
            <Check className="w-5 h-5 text-green-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Button 
        className={cn(
          "w-full rounded-xl font-bold py-6", 
          highlight ? "bg-primary hover:bg-primary/90" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        )}
      >
        {highlight ? "Get Started" : "Choose Plan"}
      </Button>
    </Card>
  );
}
