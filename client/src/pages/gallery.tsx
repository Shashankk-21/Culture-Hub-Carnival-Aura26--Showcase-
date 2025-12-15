import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Play, Image, Film, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { GalleryItem, Club } from "@/lib/data";

type FilterType = "all" | "image" | "video" | string;

function GallerySkeleton() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="break-inside-avoid">
          <Skeleton className={`w-full rounded-xl ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-video"}`} />
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState<FilterType>("all");

  const { data: galleryItems, isLoading: galleryLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
  });

  const { data: clubs } = useQuery<Club[]>({
    queryKey: ["/api/clubs"],
  });

  const filteredItems = galleryItems?.filter((item) => {
    if (filter === "all") return true;
    if (filter === "image") return item.type === "image";
    if (filter === "video") return item.type === "video";
    return item.clubId === filter;
  }) || [];

  const filters: { id: FilterType; label: string; icon?: React.ReactNode }[] = [
    { id: "all", label: "All" },
    { id: "image", label: "Images", icon: <Image className="w-4 h-4" /> },
    { id: "video", label: "Videos", icon: <Film className="w-4 h-4" /> },
    ...(clubs?.map((club) => ({ id: club.id, label: club.name.replace(" Club", "") })) || []),
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="page-gallery">
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
              <Sparkles className="w-4 h-4 text-carnival-teal" />
              <span className="text-carnival-teal text-sm font-medium">Photo & Video Gallery</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Moments from the
              <span className="carnival-gradient-text"> Carnival</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Relive the magic through photos and videos from our cultural events, 
              performances, and creative showcases.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {filters.map((f) => (
              <Button
                key={f.id}
                variant={filter === f.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(f.id)}
                className={`rounded-full ${
                  filter === f.id ? "bg-primary" : ""
                }`}
                data-testid={`button-filter-${f.id}`}
              >
                {f.icon && <span className="mr-1">{f.icon}</span>}
                {f.label}
              </Button>
            ))}
          </div>

          {galleryLoading ? (
            <GallerySkeleton />
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group break-inside-avoid overflow-hidden rounded-xl cursor-pointer"
                  data-testid={`gallery-item-${item.id}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      item.orientation === "portrait" ? "aspect-[3/4]" : "aspect-video"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-carnival-purple ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {item.alt}
                    </p>
                    <p className="text-white/70 text-xs mt-1 capitalize">
                      {clubs?.find((c) => c.id === item.clubId)?.name || item.clubId}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!galleryLoading && filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Image className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filter to see more content.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
