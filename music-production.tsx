import { SoundNav } from "@/components/SoundNav";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mic, Music, Headphones, Sliders, PlayCircle, Mail, Check, Layers, Zap, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function MusicProductionPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <SoundNav />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-8 md:pt-24 md:pb-16 px-4 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           {/* Abstract waveform background */}
           <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
             <path d="M0 50 Q 25 20 50 50 T 100 50 V 100 H 0 Z" fill="url(#grad1)" />
             <defs>
               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#f97316" />
                 <stop offset="100%" stopColor="#8b5cf6" />
               </linearGradient>
             </defs>
           </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-purple-500/20 border border-purple-500/50 text-purple-300 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-8">
                New Curriculum
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Turn Your Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">Professional Tracks.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Learn modern music production, mixing, and sound design. From your first beat to your first release, we guide you through the art of electronic music creation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full text-lg h-14 px-8 bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-500/20 border-none">
                  Start Producing
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Graphic representation of a DAW or studio */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono ml-4">My_First_Hit_Track.als</div>
                </div>
                
                {/* Mock tracks */}
                <div className="space-y-3">
                  <TrackRow name="Drums" color="bg-orange-500" width="w-3/4" />
                  <TrackRow name="Bass" color="bg-blue-500" width="w-full" />
                  <TrackRow name="Synth Lead" color="bg-purple-500" width="w-1/2" />
                  <TrackRow name="FX" color="bg-pink-500" width="w-2/3" />
                  <TrackRow name="Vocals" color="bg-green-500" width="w-4/5" />
                </div>
                
                <div className="mt-8 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center border-4 border-slate-600">
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem / Solution Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Stop Fighting Your DAW</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Many aspiring producers get stuck in the technical weeds of their software, forgetting that great music comes from creative decisions, not complex routing.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
                <Card className="p-8 border-orange-100 bg-white shadow-sm">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">The Trap</h3>
                    <p className="text-muted-foreground">
                        Endlessly watching "How to sound like [Artist]" tutorials that only teach specific settings for specific plugins, leaving you lost when you want to create your own sound.
                    </p>
                </Card>
                <Card className="p-8 border-green-100 bg-white shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                        <Check className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Our Approach</h3>
                    <p className="text-muted-foreground">
                        Learning the universal principles of audio—Compression, EQ, Saturation, and Space—so you can apply them in Logic, GarageBand, Ableton, or any other tool.
                    </p>
                </Card>
            </div>
        </div>
      </section>

      {/* Curriculum / Fundamentals */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4">
              Universal Principles
            </div>
            <h2 className="font-heading text-4xl font-bold mb-4">Production Fundamentals</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We focus on the skills that transfer across every genre and piece of software.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Headphones}
              title="Critical Listening"
              desc="Learn to hear music like a producer. Identify frequency clashes, dynamic issues, and arrangement gaps."
            />
            <FeatureCard 
              icon={Sliders}
              title="Sound Design"
              desc="Understand synthesis and sampling at a core level. Build the sounds in your head from scratch."
            />
            <FeatureCard 
              icon={Layers}
              title="Arrangement"
              desc="Structure your tracks for maximum emotional impact. Learn tension, release, and flow."
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-gradient-to-br from-white to-orange-50">
          <div className="container mx-auto px-4 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold">Expertise in Leading Tools</h2>
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-md" title="Logic Pro X">
                        <Music className="w-6 h-6 text-slate-700" />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-md" title="GarageBand">
                        <Mic className="w-6 h-6 text-slate-700" />
                      </div>
                  </div>
              </div>
              
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
                  While our principles are universal, we provide specialized, deep-dive guidance for users of Logic Pro X and GarageBand.
              </p>

              <div className="max-w-xs md:max-w-sm mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                   <video 
                     src="/videos/music-production-demo.mov" 
                     controls
                     className="w-full aspect-[9/16] object-cover"
                   />
              </div>
              
              <p className="mt-8 text-sm text-slate-500 font-medium tracking-wide">
                  * Concepts applicable to Ableton Live, FL Studio, Pro Tools, and more.
              </p>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="font-heading text-4xl font-bold mb-6">Ready to Elevate Your Sound?</h2>
            <p className="text-xl text-muted-foreground mb-8">
                Book a trial session to discuss your production goals and get a personalized roadmap for your musical growth.
            </p>
            <Button size="lg" className="rounded-full text-lg h-14 px-10 shadow-xl shadow-primary/20">
                Book a Trial Session
            </Button>
        </div>
      </section>
       
      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
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

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
      <Card className="p-8 border-orange-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
        <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="font-heading text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{desc}</p>
      </Card>
    )
  }

function TrackRow({ name, color, width }: { name: string, color: string, width: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-20 text-xs font-bold text-slate-400 text-right uppercase">{name}</div>
            <div className="flex-1 bg-slate-900 h-8 rounded overflow-hidden relative">
                <div className={`h-full ${color} opacity-80 ${width} rounded-r-md relative overflow-hidden group`}>
                     {/* Pseudo waveform */}
                     <div className="absolute inset-0 flex items-center justify-around opacity-50">
                        {[...Array(10)].map((_,i) => (
                            <div key={i} className="w-1 bg-black/20" style={{ height: `${Math.random() * 100}%`}} />
                        ))}
                     </div>
                </div>
            </div>
        </div>
    )
}
