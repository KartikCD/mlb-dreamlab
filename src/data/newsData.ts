export type ContentBlock = 
  | { type: 'paragraph'; text: string }
  | { type: 'image'; url: string; alt: string; caption?: string }
  | { type: 'video'; url: string; poster: string };

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  featuredImage: string;
  excerpt: string;
  content: ContentBlock[];
}

export const newsData: NewsArticle[] = [
  {
    id: '1',
    slug: 'dreamlab-wins-gold-at-cinematic-arts-festival',
    title: 'DREAMLAB Wins Gold at the Cinematic Arts Festival',
    date: '2025-07-22',
    category: 'Award',
    author: 'Jane Doe',
    featuredImage: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Our latest short film, "Echoes of Silence," was awarded the prestigious Golden Lion for Best Cinematography at the International Cinematic Arts Festival.',
    content: [
      { type: 'paragraph', text: 'We are incredibly honored and humbled to announce that our film, "Echoes of Silence," has received the Golden Lion award at this year\'s International Cinematic Arts Festival. This recognition is a testament to the tireless dedication and creative vision of our entire team.' },
      { type: 'image', url: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Golden Lion Award trophy', caption: 'The prestigious Golden Lion award.' },
      { type: 'paragraph', text: 'The film, a poignant exploration of memory and loss set against the backdrop of a forgotten city, was praised by the jury for its "hauntingly beautiful visuals and profound emotional depth." Director of Photography, Alex Chen, crafted a visual language that speaks volumes, capturing the subtle nuances of the narrative with breathtaking artistry.' },
      { type: 'paragraph', text: 'We extend our heartfelt thanks to the festival jury, our talented cast and crew, and everyone who has supported us on this journey. This award inspires us to continue pushing the boundaries of storytelling.' },
    ],
  },
  {
    id: '2',
    slug: 'behind-the-scenes-of-project-cygnus',
    title: 'A Look Behind the Scenes of "Project Cygnus"',
    date: '2025-07-18',
    category: 'BTS',
    author: 'John Smith',
    featuredImage: 'https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Step onto the set of our most ambitious project yet. We\'re sharing an exclusive look at the technology and artistry bringing our sci-fi epic to life.',
    content: [
      { type: 'paragraph', text: '"Project Cygnus" is more than just a film; it\'s a universe. Building this world required a unique blend of practical effects and cutting-edge visual technology. Today, we\'re pulling back the curtain to show you how the magic is made.' },
      { type: 'video', url: 'https://videos.pexels.com/video-files/854132/854132-hd_1920_1080_25fps.mp4', poster: 'https://images.pexels.com/photos/3944311/pexels-photo-3944311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      { type: 'paragraph', text: 'Our production design team constructed intricate sets to give the actors a tangible environment to interact with. The cockpit of the starship "Odyssey," for example, was a fully functional set piece with hundreds of practical lights and switches.' },
      { type: 'image', url: 'https://images.pexels.com/photos/7235905/pexels-photo-7235905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Editing bay with multiple screens', caption: 'Countless hours were spent in post-production to perfect the film\'s visual effects.' },
      { type: 'paragraph', text: 'This commitment to practical effects, combined with state-of-the-art CGI, creates a seamless and believable world. We can\'t wait for you to experience the final result.' },
    ],
  },
  {
    id: '3',
    slug: 'the-art-of-sound-design-in-documentaries',
    title: 'The Art of Sound Design in Documentaries',
    date: '2025-06-30',
    category: 'Insight',
    author: 'Emily White',
    featuredImage: 'https://images.pexels.com/photos/3751017/pexels-photo-3751017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Sound is an invisible character in every story. We explore how our sound team crafts immersive audio landscapes that elevate our documentary work.',
    content: [
      { type: 'paragraph', text: 'In documentary filmmaking, authenticity is paramount. While the visuals tell one part of the story, the sound design transports the audience directly into the environment. It\'s a subtle art form that, when done right, becomes an invisible yet powerful narrator.' },
      { type: 'paragraph', text: 'Our process begins with capturing pristine audio on location. But the real magic happens in post-production, where we layer ambient sounds, foley, and music to create a rich, immersive soundscape. It\'s about more than just what you hear; it\'s about what you feel.' },
      { type: 'image', url: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Audio mixing console', caption: 'Every sound is meticulously balanced in the final mix.' },
    ],
  },
];
