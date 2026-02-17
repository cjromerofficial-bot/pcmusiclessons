import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface Review {
  text: string;
  author?: string;
  timeAgo: string;
}

const reviews: Review[] = [
  {
    text: "Eric W. has been an excellent drum instructor for my son for the past two years. He is very patient and encouraging. My son has really developed his talent and confidence, thanks to Eric’s fun and engaging instruction.",
    timeAgo: "2 days ago"
  },
  {
    text: "I have been taking piano lessons from Eric W as an adult student, and I couldn’t be happier with my experience. Eric makes learning incredibly fun and enjoyable. He have a remarkable ability to adapt the lessons to my skill level, ensuring that I am both challenged and comfortable. Each session is engaging, filled with not only valuable instruction but also a great sense of humor and enthusiasm that makes me look forward to every lesson!",
    timeAgo: "17 hours ago"
  },
  {
    text: "I have been taking drum lessons from Eric for nearly a year—he is patient, thorough, fun, and always adapting his teaching style to ensure I walk away comfortable with our lesson plan. Being an adult learning a new instrument was intimidating at first, but Eric has made the entire experience enjoyable. I recommend him to all my mom friends who have kids interested learning the piano or drums. Way to go, Eric—thanks for giving me something to look forward to each week.",
    timeAgo: "3 days ago"
  },
  {
    text: "Our 16 year old has been working with Eric Weidman on drums for approximately a year. His passion for drums and making music has only grown stronger since being instructed by Eric. Eric's flexibility and music knowledge has encouraged our son to explore, practice and learn to play in all genres. His skills as a drummer have gone to new levels.",
    timeAgo: "a day ago"
  },
  {
    text: "Eric started teaching my 10 year old kid from the very beginning a few months ago. He is patience and dedicated always. He also makes the session easy and fun so now my kid really enjoys playing piano and love to practice without any reminder.",
    timeAgo: "6 hours ago"
  },
  {
    text: "Eric is a phenomenal teacher that my son looks forward to taking lessons from every week. I’ve made my living as a musician my entire life, but somehow couldn’t get through to my own kid from a musical standpoint. Eric has figured out how to communicate and inspire kids to be creative and learn a new skill. His knowledge of different instruments and musical genres puts him at an advantage of speaking the language that he needs to depending on the personality of the student. Eric is awesome!",
    timeAgo: "a day ago"
  },
  {
    text: "Our drum instructor, Eric, is amazing. Our son has learned so much already. A great teacher that comes to your own home?! Yes, please.",
    timeAgo: "2 hours ago"
  }
];

export function ReviewsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <div className="w-full max-w-5xl mx-auto px-12">
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent className="-ml-4">
                {reviews.map((review, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                            <Card className="p-6 h-full flex flex-col justify-between border-none shadow-md bg-white">
                                <div>
                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wide">
                                        {review.timeAgo}
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-6">
                                        "{review.text}"
                                    </p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                                        G
                                    </div>
                                    <span className="text-xs font-bold text-gray-500">Google Review</span>
                                </div>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  );
}
