import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import communityHealth from "@/assets/health-education-community.jpg";

const CommunityImpact = () => {
  const impacts = [
    "Reduced human-wildlife conflict through education",
    "Improved maternal and child health outcomes",
    "Sustainable livelihood opportunities created",
    "Community health workers trained and deployed",
    "Conservation awareness programs established"
  ];

  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Community-Driven Solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our approach puts local communities at the center of conservation efforts. 
              By addressing health challenges and creating economic opportunities, 
              we build lasting partnerships that benefit both people and gorillas.
            </p>
            
            <div className="space-y-4 mb-8">
              {impacts.map((impact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-forest-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{impact}</span>
                </div>
              ))}
            </div>
            
            <Button variant="conservation" size="lg" className="group">
              See Our Impact
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-none shadow-nature overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={communityHealth} 
                  alt="Community health workers in action"
                  className="w-full h-96 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Health Workers Making a Difference
                  </h3>
                  <p className="text-muted-foreground">
                    Local health workers provide essential services while fostering 
                    conservation awareness in their communities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;