import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Navigation,
  Calendar
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Butwal Golpark, Rupandehi",
      subContent: "Nepal",
      action: (
      <a
        href="https://www.google.com/maps/place/Yarsha+Education/@27.711456,83.4621227,17z/data=!3m1!4b1!4m6!3m5!1s0x3996872af0a6b843:0xac773c716131f5b9!8m2!3d27.7114561!4d83.4669936!16s%2Fg%2F11tp4c1tfp?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Directions
      </a>)
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+977-9812345678",
      subContent: "",
      action: <a href="tel:+9779812345678">Call Now</a>
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@yarshaeducation.com",
      subContent: "",
      action: <a href="mailto:info@yarshaeducation.com">Send Email</a>
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Sunday - Friday: 6:00 AM - 7:00 PM",
      subContent: "Saturday: Holiday",
      action: "View Schedule"
    }
  ];

  const courses = [
    "German Language",
    "IELTS Preparation",
    "PTE Training",
    "English Classes",
    "Computer Classes",
    "Graphic Design",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
            Ready to Start Your 
            <span className="text-accent block">Learning Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today for a free consultation. Our education counselors are 
            ready to help you choose the right course and achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="group hover:shadow-card-hover transition-all border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-primary mb-2">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subContent}</p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-accent hover:text-accent/80 mt-2"
                        >
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Actions */}
            <Card className="bg-hero-gradient text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Free Demo Class
                  </Button>
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with Counselor
                  </Button>
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Navigation className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter your email"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Phone Number *
                      </label>
                      <Input
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter your phone number"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Course of Interest
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({...formData, course: e.target.value})}
                        className="w-full p-3 border border-border rounded-md focus:border-primary focus:outline-none"
                      >
                        <option value="">Select a course</option>
                        {courses.map((course) => (
                          <option key={course} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your goals and any questions you have..."
                      rows={5}
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Find Us Here</h3>
                  <p className="text-muted-foreground">
                    Yarsha Education, Butwal Golpark, Rupandehi, Nepal
                  </p>
                  <a
                      href="https://www.google.com/maps/place/Yarsha+Education/@27.711456,83.4621227,17z/data=!3m1!4b1!4m6!3m5!1s0x3996872af0a6b843:0xac773c716131f5b9!8m2!3d27.7114561!4d83.4669936!16s%2Fg%2F11tp4c1tfp?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded"
                    >
                        Open in Google Maps
                    </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;