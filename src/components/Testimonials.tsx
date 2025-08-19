import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "IELTS Preparation",
      score: "Band 8.0",
      image: "PS",
      rating: 5,
      text: "Yarsha Education helped me achieve my dream score of 8.0 in IELTS. The teachers are incredibly supportive, and their teaching methodology is excellent. I'm now studying in Canada thanks to their guidance!",
      destination: "University of Toronto, Canada"
    },
    {
      id: 2,
      name: "Rajesh Thapa",
      course: "German Language",
      score: "B2 Level",
      image: "RT",
      rating: 5,
      text: "The German classes at Yarsha Education are fantastic. I started from zero and now I'm working in Germany. The cultural aspects they taught along with the language were invaluable.",
      destination: "Working in Berlin, Germany"
    },
    {
      id: 3,
      name: "Anita Poudel",
      course: "PTE Training",
      score: "85 Points",
      image: "AP",
      rating: 5,
      text: "I was struggling with PTE until I joined Yarsha Education. Their personalized approach and mock tests helped me score 85 points. Highly recommend their PTE program!",
      destination: "Monash University, Australia"
    },
    {
      id: 4,
      name: "Bikash Gurung",
      course: "Computer Classes",
      score: "Certified",
      image: "BG",
      rating: 5,
      text: "The computer classes here are very practical and industry-oriented. I learned everything from basics to advanced programming. Now I'm working as a software developer.",
      destination: "Local IT Company"
    },
    {
      id: 5,
      name: "Sita Rai",
      course: "English Classes",
      score: "Fluent",
      image: "SR",
      rating: 5,
      text: "My English communication skills improved dramatically after joining Yarsha Education. The confidence I gained here helped me secure a job in a multinational company.",
      destination: "Working at MNC"
    },
    {
      id: 6,
      name: "Kamal Adhikari",
      course: "Graphic Design",
      score: "Portfolio Ready",
      image: "KA",
      rating: 5,
      text: "The graphic design course exceeded my expectations. The instructors are industry professionals, and the projects were real-world focused. I started freelancing immediately after completion.",
      destination: "Freelance Designer"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Student Success Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
            What Our <span className="text-accent">Students Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students 
            have to say about their transformative journey with Yarsha Education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-card relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    {testimonial.score}
                  </Badge>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="w-8 h-8 text-accent/20 absolute -top-2 -left-1" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {testimonial.text}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-primary">
                    📍 {testimonial.destination}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of successful students who have achieved their dreams with Yarsha Education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-accent text-white px-6 py-2 text-lg">
                🎯 95% Success Rate
              </Badge>
              <Badge className="bg-primary text-white px-6 py-2 text-lg">
                ⭐ 4.9/5 Student Rating
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;