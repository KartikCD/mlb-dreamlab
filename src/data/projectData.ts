export interface ContentBlock {
  type: "paragraph" | "image" | "video";
  text?: string;
  url?: string;
  alt?: string;
  caption?: string;
  poster?: string;
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
  content: ContentBlock[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "project-memory-of-kumbh",
    title: "Memory of Kumbh",
    category: "",
    featuredImage: "/images/projects/kumbh/coverimage.JPG",
    excerpt:
      "A son abandons his mother in the Kumbh Mela, trusting her fading memory—only to learn she remembers the truth",
    date: "2024-05-20",
    client: "Stellar Pictures",
    services: ["Direction", "VFX", "Sound Design", "Color Grading"],
    content: [
      {
        type: "paragraph",
        text: "Project Cygnus was a journey into the unknown, both for the character and our creative team. Our goal was to capture the profound sense of isolation and wonder that defines space exploration. We used a combination of practical effects and cutting-edge CGI to create the alien landscapes and the vast, star-filled void.",
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Concept art of the spaceship interior",
        caption: 'Early concept art for the cockpit of the starship "Odyssey".',
      },
      {
        type: "paragraph",
        text: "The sound design was crucial in building the atmosphere. We layered subtle electronic hums, distant cosmic radiation, and the character's own breathing to create a soundscape that is both immersive and unsettling. Every element was crafted to enhance the narrative of one person against the infinite.",
      },
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/4782135/4782135-hd.mp4",
        poster:
          "https://images.pexels.com/photos/4782135/pexels-photo-4782135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    content: [
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/853875/853875-hd.mp4",
        poster:
          "https://images.pexels.com/videos/853875/pictures/preview-0.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        type: "paragraph",
        text: 'For "Metropolis Dreams," we wanted to create a vision of the future that was optimistic and full of energy. The commercial follows three individuals whose lives intersect in a bustling, technologically advanced city. We used dynamic camera movements, a vibrant color palette, and a driving soundtrack to capture the city\'s pulse.',
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Behind the scenes shot of the city set",
        caption:
          "Our team setting up a complex tracking shot on the main city street set.",
      },
    ],
  },
];
