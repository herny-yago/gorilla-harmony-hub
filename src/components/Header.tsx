import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-forest-primary to-forest-secondary rounded-full"></div>
          <span className="font-bold text-xl text-foreground">Gorilla Conservation Initiative</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#mission" className="text-foreground hover:text-forest-primary transition-colors">Mission</a>
          <a href="#community" className="text-foreground hover:text-forest-primary transition-colors">Community</a>
          <a href="#approach" className="text-foreground hover:text-forest-primary transition-colors">Approach</a>
          <a href="#impact" className="text-foreground hover:text-forest-primary transition-colors">Impact</a>
          <Button variant="conservation" size="sm">Get Involved</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;