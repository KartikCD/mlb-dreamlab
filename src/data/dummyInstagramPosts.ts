export interface InstagramPost {
  id: string;
  type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  mediaUrl: string;
  caption: string;
  likes: number;
  commentsCount: number;
  timestamp: string;
  permalink: string;
}

export const dummyPosts: InstagramPost[] = [
  {
    id: '1',
    type: 'IMAGE',
    mediaUrl: 'https://images.pexels.com/photos/7876273/pexels-photo-7876273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Golden hour on set. The magic is in the light. ✨ #filmmaking #goldenhour #cinematography',
    likes: 1245,
    commentsCount: 34,
    timestamp: '2025-07-15T18:30:00Z',
    permalink: '#',
  },
  {
    id: '2',
    type: 'VIDEO',
    mediaUrl: 'https://videos.pexels.com/video-files/3209222/3209222-hd_1920_1080_25fps.mp4',
    caption: 'Rolling... and action! A quick look at the dynamic camera work for our upcoming project, "Cygnus". #behindthescenes #steadicam #setlife',
    likes: 2301,
    commentsCount: 88,
    timestamp: '2025-07-14T11:05:00Z',
    permalink: '#',
  },
  {
    id: '3',
    type: 'IMAGE',
    mediaUrl: 'https://images.pexels.com/photos/8996023/pexels-photo-8996023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'The details make the story. Our art department meticulously crafting the world you see on screen. #productiondesign #artdepartment #filmmagic',
    likes: 987,
    commentsCount: 21,
    timestamp: '2025-07-12T09:15:00Z',
    permalink: '#',
  },
  {
    id: '4',
    type: 'IMAGE',
    mediaUrl: 'https://images.pexels.com/photos/7235905/pexels-photo-7235905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Late night edits. Finding the perfect rhythm in the cutting room. #postproduction #videoediting #filmeditor',
    likes: 1532,
    commentsCount: 45,
    timestamp: '2025-07-10T23:45:00Z',
    permalink: '#',
  },
  {
    id: '5',
    type: 'VIDEO',
    mediaUrl: 'https://videos.pexels.com/video-files/853836/853836-hd_1920_1080_30fps.mp4',
    caption: 'Sound is half the picture. Our foley artist at work creating the soundscape for our latest documentary. #sounddesign #foleyartist #audio',
    likes: 850,
    commentsCount: 19,
    timestamp: '2025-07-09T14:00:00Z',
    permalink: '#',
  },
  {
    id: '6',
    type: 'IMAGE',
    mediaUrl: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Director’s vision. Mapping out the crucial shots for tomorrow’s scene. #director #storyboard #preproduction',
    likes: 3102,
    commentsCount: 152,
    timestamp: '2025-07-08T16:20:00Z',
    permalink: '#',
  },
];
