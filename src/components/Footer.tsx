import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  Linkedin,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const courses = [
    "German Language",
    "IELTS Preparation", 
    "PTE Training",
    "English Classes",
    "Computer Classes",
    "Graphic Design"
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100067524996085", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Yarsha <span className="text-accent">Education</span>
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering dreams through quality education. Your trusted partner 
              for language learning, exam preparation, and skill development in Butwal.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/90">Butwal Golpark, Rupandehi</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/90">+977-9843702051</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/90">yarshatraininginstitute@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white hover:text-accent transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <a 
                    href="#courses"
                    className="text-white/80 hover:text-white hover:text-accent transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">Stay Connected</h4>
            <p className="text-white/80 mb-4">
              Follow us on social media for updates, tips, and success stories.
            </p>
            
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h5 className="font-bold mb-2">Office Hours</h5>
              <p className="text-sm text-white/80">
                Sunday - Friday: 6:00 AM - 7:00 PM<br />
                Saturday: Holiday
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-center md:text-left">
              <p>&copy; 2024 Yarsha Education. All rights reserved.</p>
              <p className="text-sm mt-1">
                Designed with ❤️ by <a href="https://ghimireashish.com.np/">mr. aashu</a>
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;