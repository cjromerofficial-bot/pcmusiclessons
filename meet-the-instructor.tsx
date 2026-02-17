import { SoundNav } from "@/components/SoundNav";
import { Card } from "@/components/ui/card";
import { Mail, Star } from "lucide-react";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function MeetTheInstructorPage() {
  return (
      <div className="min-h-screen bg-background font-sans overflow-x-hidden">
          <SoundNav />
          <div className="container mx-auto px-4 pt-32 pb-20 max-w-5xl">
            <div className="grid md:grid-cols-12 gap-12 items-start">
                
                {/* Image Column */}
                <div className="md:col-span-5 relative">
                    <div className="sticky top-32">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img 
                                src="/images/eric-bio.jpg" 
                                alt="Eric Weidman" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        
                        <div className="mt-8 text-center">
                            <h2 className="font-heading text-2xl font-bold mb-2">Eric Weidman</h2>
                            <p className="text-primary font-medium mb-4">Founder & Instructor</p>
                            <a 
                                href="mailto:pcmusiclessons@gmail.com" 
                                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/50 px-4 py-2 rounded-full text-sm font-medium"
                            >
                                <Mail className="w-4 h-4" />
                                pcmusiclessons@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bio Text Column */}
                <div className="md:col-span-7 space-y-8 text-lg text-muted-foreground leading-relaxed">
                    <div>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-8">
                            Musician. Producer. <br/>
                            <span className="text-primary">Educator.</span>
                        </h1>
                        
                        <p className="mb-6">
                            Eric Weidman is a drummer, pianist and music producer with over 15 years of experience performing and teaching multiple styles of music, including rock, pop, EDM, metal, blues and classical.
                        </p>
                        
                        <p className="mb-6">
                            Eric graduated from the University of Colorado Denver with a Bachelor’s in Music and Recording Arts, along with a minor in Music Business. His passion for teaching drums, piano, and music production has continued to grow over the years and is reflected in the success of his students.
                        </p>
                    </div>

                    <div className="relative group my-12">
                        <div className="md:float-right md:ml-8 md:mb-4 md:mt-2 w-48 md:w-64 rotate-3 border-8 border-white shadow-xl rounded-2xl z-10 hover:rotate-1 transition-transform duration-300 float-right ml-4 mb-4">
                             <img src="/images/eric-family.jpg" alt="Eric and Family" className="rounded-xl w-full h-auto" />
                        </div>
                        <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 relative z-0">
                            <h3 className="font-heading text-xl font-bold text-orange-800 mb-4">Teaching Philosophy</h3>
                            <p className="text-orange-900/80 italic">
                                "As a teacher, Eric’s mission is not only to help students develop musical excellence and diverse skills, but to also help students connect emotionally with music and become lifelong music lovers. He always aims to inspire positive learning, build confidence, and encourage students to think critically and creatively as they develop the skills they need to achieve their goals."
                            </p>
                        </div>
                    </div>

                    <div className="relative my-12">
                        <div>
                            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Production Career</h3>
                            <p className="mb-6">
                                In addition to playing and teaching, Eric has a strong passion for songwriting and electronic production. He has been producing electronic music for over 10 years and has released successful tracks on notable labels including Get The Sound, Intact Records, and Sommersville Records. His work has also been featured on OneEDM, the leading EDM news source.
                            </p>
                        </div>
                    </div>

                    <div className="border-t pt-8 relative">
                        <p>
                            Eric currently resides in Eau Claire, Wisconsin with his wife and two dogs. When he’s not working on music, he loves to find adventure in new places, and enjoys to kayak, fish, and play games.
                        </p>
                         <div className="mt-8 relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                             <img src="/images/eric-family-2.jpg" alt="Eric and Family" className="w-full h-full object-cover object-[50%_20%]" />
                         </div>
                    </div>
                </div>
            </div>
          </div>
          {/* Google Reviews */}
          <section className="py-20 bg-secondary/20">
             <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                   <h2 className="font-heading text-4xl font-bold mb-4">Reviews</h2>
                   <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
                      <Star className="fill-current w-6 h-6" />
                      <Star className="fill-current w-6 h-6" />
                      <Star className="fill-current w-6 h-6" />
                      <Star className="fill-current w-6 h-6" />
                      <Star className="fill-current w-6 h-6" />
                   </div>
                   <p className="text-muted-foreground mt-2">5.0 Average on Google Reviews</p>
                </div>

                <ReviewsCarousel />
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
