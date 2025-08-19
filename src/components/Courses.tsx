import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  FileText, 
  MessageCircle, 
  Computer, 
  Palette, 
  BookOpen, 
  Clock,
  Users,
  Star
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "German Language Classes",
      description: "Learn German from beginner to advanced levels with certified instructors",
      icon: Globe,
      duration: "6-12 months",
      students: "50+ enrolled",
      rating: 4.9,
      features: ["A1 to C2 levels", "Native speakers", "Cultural immersion", "Certification prep"],
      badge: "Popular",
      badgeColor: "bg-accent"
    },
    {
      id: 2,
      title: "IELTS/ PTE Preparation",
      description: "Comprehensive IELTS training with guaranteed score improvement",
      icon: FileText,
      duration: "2-4 months",
      students: "80+ enrolled",
      rating: 4.8,
      features: ["All 4 modules", "Mock tests", "Individual feedback", "Score guarantee"],
      badge: "High Success",
      badgeColor: "bg-primary"
    },
    {
      id: 3,
      title: "Japanese Language Classes",
      description: "Learn Japanese from beginner to advanced levels with experienced instructors",
      icon: MessageCircle,
      duration: "3-6 months",
      students: "60+ enrolled",
      rating: 4.9,
      features: ["JLPT N5 to N1 levels", "Native speakers", "Cultural immersion", "Conversation practice"],
      badge: "New",
      badgeColor: "bg-accent"
    },
    {
      id: 4,
      title: "English Language Classes",
      description: "Improve your English communication skills for academic and professional success",
      icon: MessageCircle,
      duration: "3-6 months",
      students: "100+ enrolled",
      rating: 4.7,
      features: ["Spoken English", "Grammar focus", "Confidence building", "Interview prep"],
      badge: "Trending",
      badgeColor: "bg-primary"
    },
    {
      id: 5,
      title: "Computer Classes",
      description: "Learn essential computer skills with hands-on training in modern labs",
      icon: Computer,
      duration: "1-3 months",
      students: "70+ enrolled",
      rating: 4.6,
      features: ["Basic to advanced", "Modern labs", "Practical projects", "Certification"],
      badge: "",
      badgeColor: ""
    },
    {
      id: 6,
      title: "Graphic Design",
      description: "Master design tools and create stunning visuals with professional guidance",
      icon: Palette,
      duration: "4-6 months",
      students: "30+ enrolled",
      rating: 4.8,
      features: ["Adobe Suite", "Portfolio building", "Industry projects", "Job assistance"],
      badge: "Creative",
      badgeColor: "bg-accent"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Courses
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
            Explore Our <span className="text-accent">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to help you achieve 
            your educational and career goals with expert guidance and modern facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card 
                key={course.id} 
                className="group hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    {course.badge && (
                      <Badge className={`${course.badgeColor} text-white border-0`}>
                        {course.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">
                      Enroll Now
                    </Button>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? We also offer customized courses!
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <BookOpen className="w-5 h-5 mr-2" />
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;