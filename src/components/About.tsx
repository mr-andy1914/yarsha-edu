import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  Globe, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Students Trained",
      description: "Successfully trained over 500 students"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries",
      description: "Students placed in universities worldwide"
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
      description: "Consistently high exam pass rates"
    },
    {
      icon: TrendingUp,
      number: "8+",
      label: "Years Experience",
      description: "Established track record in education"
    }
  ];

  const features = [
    "Experienced and certified teachers",
    "Modern computer labs and facilities",
    "Affordable fees with flexible payment options",
    "Comprehensive exam preparation",
    "Individual attention and mentoring",
    "Placement and career guidance support",
    "Regular mock tests and assessments",
    "Cultural exchange programs"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              About Yarsha Education
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              Empowering Dreams Through 
              <span className="text-accent block">Quality Education</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Butwal Golpark, Yarsha Education has been a beacon 
              of academic excellence for over 8 years. We specialize in language training, 
              international exam preparation, and skill development programs that open doors 
              to global opportunities.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                <Target className="w-5 h-5 mr-2" />
                Our Mission
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="text-center p-6 border-0 shadow-card hover:shadow-card-hover transition-all group">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <IconComponent className="w-8 h-8 text-primary group-hover:text-white" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {achievement.number}
                      </div>
                      <div className="font-semibold text-foreground mb-2">
                        {achievement.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.description}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-hero-gradient text-white border-0 p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p className="text-white/90 leading-relaxed">
                      To be the leading educational institute in Nepal, empowering students 
                      with the skills and knowledge needed to succeed in the global arena 
                      while maintaining our commitment to quality and affordability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;