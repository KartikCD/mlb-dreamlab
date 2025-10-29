export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  span?: 'col' | 'row' | 'large';
}

export const galleryImages: GalleryImage[] = [
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
    src: 'https://images.pexels.com/photos/4325032/pexels-photo-4325032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'A makeup artist applying makeup to an actor in a dressing room.',
    caption: 'Final touches from our talented makeup artist before the scene.',
    width: 1260,
    height: 750,
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/7924041/pexels-photo-7924041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Sound engineer adjusting levels on a mixing console.',
    caption: 'Crafting the perfect soundscape in the audio mixing suite.',
    width: 1260,
    height: 750,
    span: 'col',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Film clapperboard in front of a blurred background.',
    caption: 'The iconic clapperboard, marking the start of cinematic magic.',
    width: 1260,
    height: 750,
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/4248552/pexels-photo-4248552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Camera dolly on tracks inside a production studio.',
    caption: 'Smooth camera movements are made possible with our dolly tracks.',
    width: 1260,
    height: 750,
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'A team reviewing footage on a laptop on set.',
    caption: 'Collaborative review of the daily footage to ensure perfection.',
    width: 1260,
    height: 750,
    span: 'col',
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/7192621/pexels-photo-7192621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'A drone flying to capture an aerial shot.',
    caption: 'Capturing breathtaking aerial views with our state-of-the-art drone.',
    width: 1260,
    height: 750,
    span: 'large',
  },
];
