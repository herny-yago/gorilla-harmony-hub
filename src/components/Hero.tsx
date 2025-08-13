import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";
import gorillaHero from "@/assets/gorilla-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${gorillaHero})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-primary/80 to-forest-secondary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Protecting Gorillas Through
            <span className="text-earth-warm"> Community Health</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            We believe that gorilla conservation and human wellbeing go hand in hand. 
            By empowering local communities with health solutions, we create lasting protection for our closest relatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <Heart className="mr-2 h-5 w-5" />
              Join Our Mission
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-forest-primary">
              <Users className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-earth-warm">50+</div>
              <div className="text-sm opacity-80">Communities Involved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-earth-warm">200+</div>
              <div className="text-sm opacity-80">Gorillas Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-earth-warm">1000+</div>
              <div className="text-sm opacity-80">Lives Improved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;