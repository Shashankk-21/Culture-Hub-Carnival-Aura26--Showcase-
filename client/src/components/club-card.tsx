import { Link } from "wouter";
import { ArrowRight, Users, Music, Palette, BookOpen, Camera, Theater } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Club } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Music: Music,
  Music2: Music,
  Palette: Palette,
  BookOpen: BookOpen,
  Camera: Camera,
  Theater: Theater,
};

interface ClubCardProps {
  club: Club;
}

export function ClubCard({ club }: ClubCardProps) {
  const IconComponent = iconMap[club.icon] || Music;

  return (
    <Link href={`/club/${club.id}`} data-testid={`card-club-${club.id}`}>
      <Card className="group overflow-visible cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-video overflow-hidden rounded-t-xl">
          <img
            src={club.bannerImage}
            alt={club.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <Badge variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-0">
                <Users className="w-3 h-3 mr-1" />
                {club.memberCount} members
              </Badge>
            </div>
            <h3 className="text-xl font-semibold text-white">{club.name}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {club.shortDescription}
          </p>
          <div className="flex items-center text-carnival-teal font-medium text-sm group-hover:gap-2 transition-all">
            <span>Explore Club</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
