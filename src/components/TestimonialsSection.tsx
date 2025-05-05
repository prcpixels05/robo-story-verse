
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookOpen } from "lucide-react";

const testimonials = [
  {
    quote: "The AI narration brings classic novels to life in a way I've never experienced before. It's like having a personal storyteller!",
    name: "Sarah Johnson",
    title: "Literature Teacher",
    image: "/placeholder.svg"
  },
  {
    quote: "I've rediscovered my love for reading through this platform. The insights and analysis have deepened my appreciation for great works.",
    name: "Michael Chen",
    title: "Book Enthusiast",
    image: "/placeholder.svg"
  },
  {
    quote: "As someone who struggles with reading comprehension, the AI narration and story breakdowns have been incredibly helpful for my studies.",
    name: "Emily Rodriguez",
    title: "Student",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of literature enthusiasts who have transformed their reading experience with Robo Story Verse.
          </p>
        </div>
        
        <div className="relative px-10">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="bg-literary-light p-8 rounded-xl">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="mb-4 text-literary-primary">
                          <BookOpen className="h-6 w-6 inline-block mr-2" />
                          <BookOpen className="h-6 w-6 inline-block mr-2" />
                          <BookOpen className="h-6 w-6 inline-block" />
                        </div>
                        <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
