import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Award, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-gradient">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <Badge
              onClick={() => window.open("https://www.google.com/maps/place/Yarsha+Education/@27.7114561,83.4669936,17z/data=!3m1!4b1!4m6!3m5!1s0x3996872af0a6b843:0xac773c716131f5b9!8m2!3d27.7114561!4d83.4669936!16s%2Fg%2F11tp4c1tfp?entry=ttu", "_blank")}
              className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 cursor-pointer"
                    >
              <MapPin className="w-4 h-4 mr-2" />
                Butwal Golpark, Nepal
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to 
              <span className="block text-accent">Global Education</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Master languages, ace international exams, and unlock your potential with 
              Butwal's most trusted educational institute.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Book Free Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="lg:block">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern education at Yarsha Education"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">Expert Teachers</div>
                    <div className="text-sm text-muted-foreground">Experienced & Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;