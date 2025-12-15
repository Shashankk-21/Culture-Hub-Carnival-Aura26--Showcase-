export interface ClubMember {
  name: string;
  role: string;
}

export interface ClubEvent {
  date: string;
  title: string;
}

export interface Club {
  id: string;
  name: string;
  bannerImage: string;
  description: string;
  achievements: string[];
  upcomingEvents: ClubEvent[];
  members: ClubMember[];
  icon: string;
  memberCount: number;
  shortDescription: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  clubId: string;
  orientation: 'portrait' | 'landscape';
}

export const clubs: Club[] = [
  {
    id: "music",
    name: "Music Club",
    bannerImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=600&fit=crop",
    description: "The Music Club is a harmonious community of passionate musicians who come together to explore, create, and perform. From classical compositions to contemporary beats, we celebrate the universal language of music. Our members range from seasoned instrumentalists to enthusiastic beginners, all united by their love for melody and rhythm. We organize regular jam sessions, workshops with industry professionals, and showcase performances that highlight the diverse musical talents of our college community.",
    achievements: [
      "First Place - Inter-College Battle of Bands 2024",
      "Best Original Composition - State Music Festival",
      "Featured Performance at City Cultural Fest",
      "Released College Album with 12 Original Tracks",
      "Organized Charity Concert raising $5000 for local causes"
    ],
    upcomingEvents: [
      { date: "2025-01-15", title: "New Year Music Fest" },
      { date: "2025-02-10", title: "Open Mic Night" },
      { date: "2025-03-05", title: "Classical Music Evening" }
    ],
    members: [
      { name: "Alex Rivera", role: "President" },
      { name: "Maya Chen", role: "Vice President" },
      { name: "Jordan Smith", role: "Music Director" },
      { name: "Priya Sharma", role: "Event Coordinator" },
      { name: "Sam Wilson", role: "Vocalist Lead" },
      { name: "Nina Patel", role: "Instrumentalist Lead" }
    ],
    icon: "Music",
    memberCount: 85,
    shortDescription: "Celebrating the universal language of melody and rhythm"
  },
  {
    id: "dance",
    name: "Dance Club",
    bannerImage: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1200&h=600&fit=crop",
    description: "The Dance Club is where movement becomes art and expression takes physical form. We embrace all dance styles - from traditional classical forms to hip-hop, contemporary, and fusion. Our vibrant community provides a space for dancers of all skill levels to learn, grow, and perform. Through intensive workshops, collaborative choreography sessions, and spectacular stage performances, we push the boundaries of dance while celebrating its rich cultural heritage.",
    achievements: [
      "Champions - National College Dance Championship 2024",
      "Best Choreography Award - Youth Dance Festival",
      "Viral Performance with 2M+ Views Online",
      "Represented College at International Dance Summit",
      "Conducted Free Dance Workshops for 500+ Students"
    ],
    upcomingEvents: [
      { date: "2025-01-20", title: "Dance Battle Championship" },
      { date: "2025-02-14", title: "Valentine's Special Performance" },
      { date: "2025-03-15", title: "Spring Dance Showcase" }
    ],
    members: [
      { name: "Luna Martinez", role: "President" },
      { name: "Derek Johnson", role: "Vice President" },
      { name: "Aisha Okonkwo", role: "Choreographer" },
      { name: "Kai Tanaka", role: "Contemporary Lead" },
      { name: "Emma Davis", role: "Classical Lead" },
      { name: "Ryan Park", role: "Hip-Hop Lead" }
    ],
    icon: "Music2",
    memberCount: 120,
    shortDescription: "Where movement becomes art and expression"
  },
  {
    id: "drama",
    name: "Drama Club",
    bannerImage: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&h=600&fit=crop",
    description: "The Drama Club is the theatrical heart of our campus, where stories come alive on stage. We are a collective of actors, directors, writers, and technicians who believe in the transformative power of theatre. From Shakespearean classics to original student productions, we explore the full spectrum of dramatic expression. Our productions challenge, entertain, and inspire, making theatre accessible and exciting for the entire campus community.",
    achievements: [
      "Best Production - State Theatre Festival 2024",
      "Outstanding Director Award - Regional Drama Competition",
      "Staged 15 Full-Length Productions in Past Year",
      "Best Actor/Actress Awards at National Level",
      "Theatre Workshop Series with Professional Artists"
    ],
    upcomingEvents: [
      { date: "2025-01-25", title: "Winter Play: A Midsummer Night's Dream" },
      { date: "2025-02-20", title: "One-Act Play Festival" },
      { date: "2025-04-01", title: "Spring Musical Production" }
    ],
    members: [
      { name: "Oliver Bennett", role: "President" },
      { name: "Sarah Collins", role: "Vice President" },
      { name: "Marcus Thompson", role: "Director" },
      { name: "Zoe Anderson", role: "Stage Manager" },
      { name: "James Wright", role: "Script Writer" },
      { name: "Lily Foster", role: "Costume Designer" }
    ],
    icon: "Theater",
    memberCount: 65,
    shortDescription: "Where stories come alive on stage"
  },
  {
    id: "art",
    name: "Art Club",
    bannerImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=600&fit=crop",
    description: "The Art Club is a creative sanctuary for visual artists of all disciplines. We explore painting, sculpture, digital art, illustration, and mixed media through collaborative projects and individual expression. Our studio sessions foster creativity, experimentation, and artistic growth. We believe art is for everyone, welcoming both experienced artists and those just discovering their creative voice. Our exhibitions and installations transform campus spaces into galleries of imagination.",
    achievements: [
      "Gold Medal - National Youth Art Competition 2024",
      "Campus Mural Project - 10 Large-Scale Installations",
      "Student Art Exhibition with 200+ Artworks",
      "Published Annual Art Magazine 'Canvas'",
      "Art Therapy Workshops for Mental Health Awareness"
    ],
    upcomingEvents: [
      { date: "2025-01-30", title: "Winter Art Exhibition" },
      { date: "2025-02-28", title: "Digital Art Workshop" },
      { date: "2025-03-20", title: "Outdoor Sketching Session" }
    ],
    members: [
      { name: "Aria Mitchell", role: "President" },
      { name: "Ethan Brooks", role: "Vice President" },
      { name: "Sophia Lee", role: "Gallery Curator" },
      { name: "Noah Garcia", role: "Digital Art Lead" },
      { name: "Chloe Williams", role: "Painting Lead" },
      { name: "Liam Turner", role: "Sculpture Lead" }
    ],
    icon: "Palette",
    memberCount: 95,
    shortDescription: "A creative sanctuary for visual artists"
  },
  {
    id: "literature",
    name: "Literature Club",
    bannerImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&h=600&fit=crop",
    description: "The Literature Club is a haven for lovers of the written word. We explore literature from across the globe and throughout history, engaging in thoughtful discussions, creative writing workshops, and poetry readings. Our members share a passion for storytelling, whether through reading, writing, or spoken word. We publish a literary magazine, host author visits, and organize book clubs that dive deep into works that challenge and inspire.",
    achievements: [
      "Published Award-Winning Literary Magazine 'Inkwell'",
      "National Poetry Slam Champions 2024",
      "Hosted 12 Author Visits This Year",
      "Creative Writing Competition with 300+ Entries",
      "Established Campus Book Exchange Program"
    ],
    upcomingEvents: [
      { date: "2025-01-18", title: "Poetry Slam Night" },
      { date: "2025-02-15", title: "Book Club: Modern Classics" },
      { date: "2025-03-10", title: "Creative Writing Workshop" }
    ],
    members: [
      { name: "Elena Rodriguez", role: "President" },
      { name: "David Kim", role: "Vice President" },
      { name: "Hannah Moore", role: "Editor-in-Chief" },
      { name: "Michael Chen", role: "Poetry Lead" },
      { name: "Isabella Taylor", role: "Book Club Lead" },
      { name: "Benjamin Clark", role: "Events Coordinator" }
    ],
    icon: "BookOpen",
    memberCount: 55,
    shortDescription: "A haven for lovers of the written word"
  },
  {
    id: "photography",
    name: "Photography Club",
    bannerImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=600&fit=crop",
    description: "The Photography Club captures life through the lens, transforming moments into timeless art. We explore all aspects of photography - from portrait and landscape to street photography and abstract compositions. Our members learn technical skills, develop their artistic eye, and share their unique perspectives. Through photowalks, studio sessions, editing workshops, and exhibitions, we build a community united by our love for visual storytelling.",
    achievements: [
      "First Place - National Photography Contest 2024",
      "Annual Photo Exhibition with 500+ Visitors",
      "Campus Photography Calendar - Bestseller",
      "Documentary Photo Series on Local Culture",
      "Professional Photography Workshops Series"
    ],
    upcomingEvents: [
      { date: "2025-01-22", title: "Night Photography Walk" },
      { date: "2025-02-08", title: "Portrait Workshop" },
      { date: "2025-03-25", title: "Spring Photo Exhibition" }
    ],
    members: [
      { name: "Victoria Adams", role: "President" },
      { name: "Jackson Moore", role: "Vice President" },
      { name: "Emily White", role: "Exhibition Curator" },
      { name: "Daniel Brown", role: "Technical Lead" },
      { name: "Grace Miller", role: "Social Media Lead" },
      { name: "Chris Johnson", role: "Workshop Coordinator" }
    ],
    icon: "Camera",
    memberCount: 75,
    shortDescription: "Capturing life through the lens"
  }
];

export const galleryItems: GalleryItem[] = [
  { id: "1", type: "image", src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=800&fit=crop", alt: "Music performance at cultural fest", clubId: "music", orientation: "portrait" },
  { id: "2", type: "image", src: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=600&fit=crop", alt: "Dance group performance", clubId: "dance", orientation: "landscape" },
  { id: "3", type: "image", src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&h=800&fit=crop", alt: "Drama rehearsal", clubId: "drama", orientation: "portrait" },
  { id: "4", type: "video", src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop", alt: "Live concert video thumbnail", clubId: "music", orientation: "landscape" },
  { id: "5", type: "image", src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop", alt: "Art exhibition display", clubId: "art", orientation: "landscape" },
  { id: "6", type: "image", src: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=600&h=900&fit=crop", alt: "Poetry reading event", clubId: "literature", orientation: "portrait" },
  { id: "7", type: "image", src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop", alt: "Photography exhibition", clubId: "photography", orientation: "landscape" },
  { id: "8", type: "image", src: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600&h=800&fit=crop", alt: "Classical dance performance", clubId: "dance", orientation: "portrait" },
  { id: "9", type: "video", src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&h=600&fit=crop", alt: "Band performance video", clubId: "music", orientation: "landscape" },
  { id: "10", type: "image", src: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&h=600&fit=crop", alt: "Art workshop session", clubId: "art", orientation: "landscape" },
  { id: "11", type: "image", src: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&h=800&fit=crop", alt: "Theatre costume display", clubId: "drama", orientation: "portrait" },
  { id: "12", type: "image", src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop", alt: "Book club meeting", clubId: "literature", orientation: "landscape" },
  { id: "13", type: "video", src: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&h=600&fit=crop", alt: "Dance competition highlights", clubId: "dance", orientation: "landscape" },
  { id: "14", type: "image", src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=800&fit=crop", alt: "Camera equipment setup", clubId: "photography", orientation: "portrait" },
  { id: "15", type: "image", src: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&h=600&fit=crop", alt: "Stage play performance", clubId: "drama", orientation: "landscape" },
  { id: "16", type: "image", src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=800&fit=crop", alt: "Guitar performance close-up", clubId: "music", orientation: "portrait" },
  { id: "17", type: "image", src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800&h=600&fit=crop", alt: "Painting in progress", clubId: "art", orientation: "landscape" },
  { id: "18", type: "image", src: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&h=800&fit=crop", alt: "Writer at work", clubId: "literature", orientation: "portrait" },
  { id: "19", type: "video", src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop", alt: "Festival celebration video", clubId: "dance", orientation: "landscape" },
  { id: "20", type: "image", src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop", alt: "Photography walk event", clubId: "photography", orientation: "landscape" }
];
