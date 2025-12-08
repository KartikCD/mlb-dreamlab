export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  span?: 'col' | 'row' | 'large';
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  featuredImage: string;
  excerpt: string;
  date: string;
  client: string;
  services: string[];
  galleryImages: GalleryImage[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "project-memory-of-kumbh",
    title: "Memory of Kumbh",
    category: "Short Film",
    featuredImage: "/images/projects/kumbh/coverimage.JPG",
    excerpt:
      "A son abandons his mother in the Kumbh Mela, trusting her fading memory—only to learn she remembers the truth.",
    date: "2024-05-20",
    client: "Stellar Pictures",
    services: ["Direction", "VFX", "Sound Design", "Color Grading"],
    galleryImages: [
      {
        id: 1,
        src: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Behind the scenes of a film shoot with a camera operator and lighting equipment.',
        caption: 'The crew setting up a crucial shot with advanced lighting rigs.',
        width: 1260,
        height: 750,
        span: 'large',
      },
      {
        id: 2,
        src: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Close-up of a professional cinema camera lens.',
        caption: 'A close-up on the heart of our cinematography, the 85mm prime lens.',
        width: 1260,
        height: 750,
      },
      {
        id: 3,
        src: 'https://images.pexels.com/photos/8996331/pexels-photo-8996331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Director sitting in a chair on a film set, looking at a monitor.',
        caption: 'Our director, deeply focused on the performance during a take.',
        width: 840,
        height: 1260,
        span: 'row',
      },
      {
        id: 4,
        src: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'An empty director\'s chair on a film set.',
        caption: 'A moment of quiet contemplation on set between takes.',
        width: 1260,
        height: 750,
      },
      {
        id: 5,
        src: 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Film clapperboard in front of a blurred background.',
        caption: 'The iconic clapperboard, marking the start of cinematic magic.',
        width: 1260,
        height: 750,
        span: 'col',
      },
    ],
  },
  {
    id: 2,
    slug: "khoya-paya",
    title: "Khoya Paya",
    category: "Commercial",
    featuredImage: "/images/projects/khoyapaya/coverimage.png",
    excerpt:
      "Our film Khoya Paya had its World Premiere as an official selection at the International Film Festival of India (IFFI).",
    date: "2024-03-15",
    client: "Nova Corp",
    services: [
      "Concept Development",
      "Casting",
      "Production",
      "Post-Production",
    ],
    galleryImages: [
      {
        id: 1,
        src: 'https://images.pexels.com/photos/4325032/pexels-photo-4325032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A makeup artist applying makeup to an actor in a dressing room.',
        caption: 'Final touches from our talented makeup artist before the scene.',
        width: 1260,
        height: 750,
      },
      {
        id: 2,
        src: 'https://images.pexels.com/photos/7924041/pexels-photo-7924041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Sound engineer adjusting levels on a mixing console.',
        caption: 'Crafting the perfect soundscape in the audio mixing suite.',
        width: 1260,
        height: 750,
        span: 'col',
      },
      {
        id: 3,
        src: 'https://images.pexels.com/photos/7192621/pexels-photo-7192621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A drone flying to capture an aerial shot.',
        caption: 'Capturing breathtaking aerial views with our state-of-the-art drone.',
        width: 1260,
        height: 750,
        span: 'large',
      },
      {
        id: 4,
        src: 'https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A team reviewing footage on a laptop on set.',
        caption: 'Collaborative review of the daily footage to ensure perfection.',
        width: 1260,
        height: 750,
      },
    ],
  },
];
