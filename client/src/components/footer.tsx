import { Link } from "wouter";
import { Sparkles, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full carnival-gradient flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">
                <span className="carnival-gradient-text">Culture</span>
                <span className="text-foreground">-Hub</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Celebrating the vibrant tapestry of arts and culture at our college. 
              Join us in the Carnival of Cultures and discover your creative passion.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-1 rounded-full bg-carnival-purple" />
              <div className="w-8 h-1 rounded-full bg-carnival-teal" />
              <div className="w-8 h-1 rounded-full bg-carnival-gold" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>123 College Avenue, Cultural District, City 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>culturehub@college.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            2025 Culture-Hub. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with passion for arts and culture
          </p>
        </div>
      </div>
    </footer>
  );
}
