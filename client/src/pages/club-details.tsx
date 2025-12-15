import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Calendar, Trophy, Users, Music, Palette, BookOpen, Camera, Theater, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import type { Club } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Music: Music,
  Music2: Music,
  Palette: Palette,
  BookOpen: BookOpen,
  Camera: Camera,
  Theater: Theater,
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { 
    month: "short", 
    day: "numeric",
    year: "numeric"
  });
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function ClubDetailsSkeleton() {
  return (
    <div className="min-h-screen">
      <Skeleton className="h-64 md:h-96 w-full" />
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Skeleton className="h-8 w-48 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
              <div>
                <Skeleton className="h-8 w-48 mb-4" />
                <div className="flex flex-wrap gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-40" />
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-12" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClubDetails() {
  const [, params] = useRoute("/club/:id");
  const clubId = params?.id;

  const { data: club, isLoading, error } = useQuery<Club>({
    queryKey: ["/api/clubs", clubId],
    enabled: !!clubId,
  });

  if (isLoading) {
    return <ClubDetailsSkeleton />;
  }

  if (error || !club) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Club not found</h1>
          <p className="text-muted-foreground mb-6">
            The club you're looking for doesn't exist or couldn't be loaded.
          </p>
          <Link href="/">
            <Button variant="outline" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[club.icon] || Music;

  return (
    <div className="min-h-screen" data-testid={`page-club-${club.id}`}>
      <section className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={club.bannerImage}
          alt={club.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl w-full mx-auto px-4 md:px-6 pb-8">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="mb-4 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
                data-testid="button-back"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Clubs
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {club.name}
                </h1>
                <p className="text-white/80">{club.shortDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About the Club</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {club.description}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-carnival-gold" />
                  <h2 className="text-2xl font-semibold">Achievements</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {club.achievements.map((achievement, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-carnival-gold/10 text-carnival-gold dark:bg-carnival-gold/20 border-0"
                      data-testid={`badge-achievement-${index}`}
                    >
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-carnival-teal" />
                  <h2 className="text-2xl font-semibold">Club Members</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {club.members.map((member, index) => (
                    <Card
                      key={index}
                      className="p-4 text-center"
                      data-testid={`card-member-${index}`}
                    >
                      <Avatar className="w-16 h-16 mx-auto mb-3">
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-medium text-sm">{member.name}</h4>
                      <p className="text-muted-foreground text-xs">{member.role}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6" data-testid="card-quick-stats">
                <h3 className="font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Members</span>
                    <span className="font-semibold">{club.memberCount}+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Achievements</span>
                    <span className="font-semibold">{club.achievements.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Upcoming Events</span>
                    <span className="font-semibold">{club.upcomingEvents.length}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6" data-testid="card-upcoming-events">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-carnival-purple" />
                  <h3 className="font-semibold">Upcoming Events</h3>
                </div>
                <div className="space-y-4">
                  {club.upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-muted/50"
                      data-testid={`event-${index}`}
                    >
                      <p className="font-medium text-sm">{event.title}</p>
                      <div className="flex items-center gap-1 mt-1 text-muted-foreground text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6" data-testid="card-location">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-carnival-teal" />
                  <h3 className="font-semibold">Meeting Location</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Cultural Arts Building, Room 201
                  <br />
                  Every Wednesday, 5:00 PM - 7:00 PM
                </p>
              </Card>

              <Link href="/contact">
                <Button className="w-full" size="lg" data-testid="button-join-club">
                  Join This Club
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
