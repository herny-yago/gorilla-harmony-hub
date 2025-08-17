import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Heart, Users, DollarSign } from "lucide-react";

const GetInvolved = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-forest-primary to-forest-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Conservation Community
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            There are many ways to support our mission of protecting gorillas through community health. 
            Every contribution makes a meaningful difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-earth-warm rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Donate</h3>
              <p className="opacity-90 mb-6 leading-relaxed">
                Support our health and conservation programs with a financial contribution.
              </p>
              <Button variant="conservation" className="w-full">
                Make a Donation
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-earth-warm rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
              <p className="opacity-90 mb-6 leading-relaxed">
                Join our team in the field or support our mission from home.
              </p>
              <Button variant="conservation" className="w-full">
                Volunteer With Us
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-earth-warm rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Partner</h3>
              <p className="opacity-90 mb-6 leading-relaxed">
                Collaborate with us on community health and conservation initiatives.
              </p>
              <Button variant="conservation" className="w-full">
                Become a Partner
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Ready to make a difference? Contact us to learn more about our programs 
              and how you can contribute to gorilla conservation and community health.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-earth-warm rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="opacity-80">skizza912@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-earth-warm rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Call / WhatsApp Us</div>
                  <div className="opacity-80">+256 752 518 402</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-earth-warm rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="opacity-80">Conservationist, Kampala, Uganda</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h4 className="text-2xl font-bold mb-6">Newsletter Signup</h4>
            <p className="opacity-90 mb-6">
              Stay updated on our latest conservation efforts and community health initiatives.
            </p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-earth-warm"
              />
              <Button variant="conservation" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;