const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-earth-warm to-accent rounded-full"></div>
              <span className="font-bold text-lg">Gorilla Conservation Initiative</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Protecting gorillas through community health solutions and sustainable conservation practices.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-background/80">
              <li>Community Health</li>
              <li>Conservation Training</li>
              <li>Research Initiatives</li>
              <li>Education Outreach</li>
              <li>Community Engagement</li>
            </ul>
          </div>
          
          <div>
  <h4 className="font-semibold mb-4">Get Involved</h4>
  <ul className="space-y-2 text-background/80">
    <li>
      <button className="w-full text-left px-2 py-1 rounded hover:bg-background/20 transition">
        Volunteer
      </button>
    </li>
    <li>
      <button className="w-full text-left px-2 py-1 rounded hover:bg-background/20 transition">
        Donate
      </button>
    </li>
    <li>
      <button className="w-full text-left px-2 py-1 rounded hover:bg-background/20 transition">
        Partner With Us
      </button>
    </li>
    <li>
      <button className="w-full text-left px-2 py-1 rounded hover:bg-background/20 transition">
        Spread Awareness
      </button>
    </li>
  </ul>
</div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>skizza912@gmail.com</li>
              <li>+256 752 518 402</li>
              <li>Conservationist</li>
              <li>Kampala, Uganda</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Gorilla Conservation Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;