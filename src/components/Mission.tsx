import { Card, CardContent } from "@/components/ui/card";
import { Shield, Stethoscope, Users } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-background to-nature-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We recognize that gorilla conservation cannot succeed without addressing the health 
            and wellbeing of the communities that share their habitat. Our integrated approach 
            creates sustainable solutions for both wildlife and people.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-none shadow-nature hover:shadow-lg transition-all duration-300 bg-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-primary to-forest-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Conservation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Protecting gorilla habitats through community-led conservation initiatives 
                that respect both wildlife and human needs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-nature hover:shadow-lg transition-all duration-300 bg-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-earth-warm to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Public Health</h3>
              <p className="text-muted-foreground leading-relaxed">
                Improving community health outcomes through accessible healthcare, 
                disease prevention, and health education programs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-nature hover:shadow-lg transition-all duration-300 bg-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-forest-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowering local communities to become stewards of their environment 
                while improving their quality of life.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;