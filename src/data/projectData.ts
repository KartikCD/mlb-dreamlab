export interface ContentBlock {
  type: 'paragraph' | 'image' | 'video';
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
    slug: 'project-cygnus',
    title: 'Project Cygnus',
    category: 'Sci-Fi Short Film',
    featuredImage: 'https://images.pexels.com/photos/3944311/pexels-photo-3944311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'A lone astronaut discovers a mysterious signal from a distant nebula, forcing her to confront the vastness of space and her own solitude.',
    date: '2024-05-20',
    client: 'Stellar Pictures',
    services: ['Direction', 'VFX', 'Sound Design', 'Color Grading'],
    content: [
      {
        type: 'paragraph',
        text: 'Project Cygnus was a journey into the unknown, both for the character and our creative team. Our goal was to capture the profound sense of isolation and wonder that defines space exploration. We used a combination of practical effects and cutting-edge CGI to create the alien landscapes and the vast, star-filled void.'
      },
      {
        type: 'image',
        url: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Concept art of the spaceship interior',
        caption: 'Early concept art for the cockpit of the starship "Odyssey".'
      },
      {
        type: 'paragraph',
        text: 'The sound design was crucial in building the atmosphere. We layered subtle electronic hums, distant cosmic radiation, and the character\'s own breathing to create a soundscape that is both immersive and unsettling. Every element was crafted to enhance the narrative of one person against the infinite.'
      },
      {
        type: 'video',
        url: 'https://videos.pexels.com/video-files/4782135/4782135-hd.mp4',
        poster: 'https://images.pexels.com/photos/4782135/pexels-photo-4782135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      }
    ]
  },
  {
    id: 2,
    slug: 'metropolis-dreams',
    title: 'Metropolis Dreams',
    category: 'Commercial',
    featuredImage: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'A high-energy commercial showcasing the vibrant life of a futuristic city, blending cutting-edge VFX with a compelling human story.',
    date: '2024-03-15',
    client: 'Nova Corp',
    services: ['Concept Development', 'Casting', 'Production', 'Post-Production'],
    content: [
      {
        type: 'video',
        url: 'https://videos.pexels.com/video-files/853875/853875-hd.mp4',
        poster: 'https://images.pexels.com/videos/853875/pictures/preview-0.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        type: 'paragraph',
        text: 'For "Metropolis Dreams," we wanted to create a vision of the future that was optimistic and full of energy. The commercial follows three individuals whose lives intersect in a bustling, technologically advanced city. We used dynamic camera movements, a vibrant color palette, and a driving soundtrack to capture the city\'s pulse.'
      },
      {
        type: 'image',
        url: 'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Behind the scenes shot of the city set',
        caption: 'Our team setting up a complex tracking shot on the main city street set.'
      }
    ]
  },
  {
    id: 3,
    slug: 'echoes-of-silence',
    title: 'Echoes of Silence',
    category: 'Documentary',
    featuredImage: 'https://images.pexels.com/photos/7990933/pexels-photo-7990933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'This documentary explores the abandoned landscapes of Chernobyl, capturing the haunting beauty and resilient nature that has reclaimed the silent city.',
    date: '2023-11-01',
    client: 'Chronicle Docs',
    services: ['Research', 'On-Site Filming', 'Archival Footage Sourcing'],
    content: [
      {
        type: 'paragraph',
        text: 'Filming "Echoes of Silence" was a deeply moving experience. Our small crew spent two weeks within the Chernobyl Exclusion Zone, documenting the powerful contrast between man-made decay and nature\'s relentless reclamation. The silence was profound, broken only by the wind and the calls of wildlife that now thrive in the absence of humans.'
      },
      {
        type: 'paragraph',
        text: 'Our approach was purely observational, allowing the environment to tell its own story. We interviewed former residents, scientists, and guides to weave a narrative of memory, loss, and unexpected rebirth. The final film is a testament to the resilience of both the human spirit and the natural world.'
      },
      {
        type: 'image',
        url: 'https://images.pexels.com/photos/7990941/pexels-photo-7990941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'The iconic ferris wheel in Pripyat',
        caption: 'The Pripyat amusement park, a haunting symbol of a city frozen in time.'
      }
    ]
  },
  {
    id: 4,
    slug: 'urban-canvas',
    title: 'Urban Canvas',
    category: 'Brand Film',
    featuredImage: 'https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'A visual ode to street art and the vibrant culture of the city\'s hidden alleyways, telling the story of a brand that lives at the intersection of creativity and community.',
    date: '2023-09-10',
    client: 'Artisan Co.',
    services: ['Cinematography', 'Storyboarding', 'Editing', 'Color Grading'],
    content: [
      {
        type: 'paragraph',
        text: 'Urban Canvas was a passion project that allowed us to explore the raw, unfiltered creativity of street artists. We followed three artists as they transformed blank walls into powerful murals, capturing their process, their stories, and the impact of their work on the local community.'
      },
      {
        type: 'image',
        url: 'https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A street artist working on a large mural',
        caption: 'Capturing the scale and detail of the artwork in progress.'
      }
    ]
  }
];
