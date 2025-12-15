import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Sparkles, Music, Palette, BookOpen, Camera, Theater } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ClubCard } from "@/components/club-card";
import type { Club } from "@/lib/data";

const featureIcons = [
  { icon: Music, label: "Music", color: "text-carnival-purple" },
  { icon: Palette, label: "Art", color: "text-carnival-gold" },
  { icon: Theater, label: "Drama", color: "text-carnival-teal" },
  { icon: BookOpen, label: "Literature", color: "text-carnival-purple" },
  { icon: Camera, label: "Photography", color: "text-carnival-gold" },
];

function ClubCardSkeleton() {
  return (
    <div className="rounded-xl border border-card-border bg-card overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

export default function Home() {
  const { data: clubs, isLoading, error } = useQuery<Club[]>({
    queryKey: ["/api/clubs"],
  });

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-carnival-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-carnival-teal/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-carnival-gold/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-carnival-gold" />
            <span className="text-white/90 text-sm font-medium">Welcome to the Celebration</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Carnival of
            <br />
            <span className="bg-gradient-to-r from-carnival-purple via-carnival-teal to-carnival-gold bg-clip-text text-transparent">
              Cultures
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Experience the vibrant fusion of arts, music, dance, and creativity. 
            Join our cultural clubs and unleash your artistic spirit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="#clubs">
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 rounded-full px-8"
                data-testid="button-explore-clubs"
              >
                Explore Clubs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent backdrop-blur-md border-white/30 text-white hover:bg-white/10 rounded-full px-8"
                data-testid="button-view-gallery"
              >
                View Gallery
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            {featureIcons.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-white/70"
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      <section
        id="clubs"
        className="py-20 md:py-28 bg-background"
        data-testid="section-clubs"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
              <Sparkles className="w-4 h-4 text-carnival-teal" />
              <span className="text-carnival-teal text-sm font-medium">Our Cultural Clubs</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Discover Your
              <span className="carnival-gradient-text"> Passion</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our six vibrant cultural clubs, each offering unique experiences 
              and opportunities to express your creativity.
            </p>
          </div>

          {error ? (
            <div className="text-center py-12">
              <p className="text-destructive mb-4">Failed to load clubs. Please try again.</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Retry
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {isLoading
                ? Array.from({ length: 6 }).map((_, i) => <ClubCardSkeleton key={i} />)
                : clubs?.map((club) => <ClubCard key={club.id} club={club} />)}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-2xl carnival-gradient p-8 md:p-16 text-center">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Join the Celebration?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                Get in touch with us to learn more about our clubs, upcoming events, 
                and how you can be part of the Carnival of Cultures.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-carnival-purple hover:bg-white/90 rounded-full px-8"
                  data-testid="button-get-in-touch"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
