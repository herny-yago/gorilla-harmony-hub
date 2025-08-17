import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import conservationTeamwork from "@/assets/field 2.jpg";
import usInField from "@/assets/us-in-field.jpg";
import traineesGorilla from "@/assets/trainees-gorilla.jpg"
import localFamilies from "@/assets/local-families.jpeg"

const Approach = () => {
  const steps = [
    {
      number: "01",
      title: "Community Engagement",
      description: "We start by listening to local communities and understanding their unique challenges and needs."
    },
    {
      number: "02", 
      title: "Health Assessment",
      description: "Comprehensive health evaluations identify priority areas for intervention and support."
    },
    {
      number: "03",
      title: "Collaborative Planning", 
      description: "Together with communities, we design integrated solutions that address both health and conservation goals."
    },
    {
      number: "04",
      title: "Implementation",
      description: "Local leaders and health workers implement programs with ongoing technical and financial support."
    },
    {
      number: "05",
      title: "Monitoring & Evaluation",
      description: "Continuous assessment ensures programs remain effective and adapt to changing community needs."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-gradient-to-b from-nature-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-earth-warm text-primary-foreground">Our Methodology</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Proven Approach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our five-step methodology ensures sustainable impact by building genuine partnerships 
            with local communities and addressing root causes of conservation challenges.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-forest-primary border-border shadow-sm hover:shadow-nature transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-forest-primary to-forest-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <img
    src={conservationTeamwork}
    alt="Conservation team working with local community"
    className="w-full h-96 object-cover rounded-xl shadow-lg"
  />
  <img
    src={usInField}
    alt="Community training session in field"
    className="w-full h-96 object-cover rounded-xl shadow-lg"
  />
   <img
    src={traineesGorilla}
    alt="Community training about Gorilla"
    className="w-full h-96 object-cover rounded-xl shadow-lg"
  />
   <img
    src={localFamilies}
    alt="Engaging with local families"
    className="w-full h-96 object-cover rounded-xl shadow-lg"
  />
  <h1 className="mt-2 text-center text-muted-foreground font-medium">
      Conservation Team Working with Community People
    </h1>
</div>

        </div>
      </div>
    </section>
  );
};

export default Approach;