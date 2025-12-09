export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; url: string; alt: string; caption?: string }
  | { type: "video"; url: string; poster: string };

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
  newsLink: string;
}

export const newsData: NewsArticle[] = [
  {
    id: "1",
    slug: "khoya-paya-a-heart-wrenching-tale",
    title:
      "‘Khoya Paya’: A Heart-Wrenching Tale of Abandonment and Love Screened at 56th IFFI",
    date: "2025-07-22",
    category: "",
    author: "",
    newsLink:
      "https://approachbollywood.com/khoya-paya-a-heart-wrenching-tale-of-abandonment-and-love-screened-at-56th-iffi/",
    featuredImage: "/images/projects/khoyapaya/coverimage.png",
    excerpt:
      "Director Ashutosh Singh’s debut film Khoya Paya—centred on a mother abandoned in the vast crowds of the Kumbh Mela—was specially screened at the 56th International Film Festival of India (IFFI) today.",
    content: [
      {
        type: "paragraph",
        text: "Director Ashutosh Singh’s debut film Khoya Paya—centred on a mother abandoned in the vast crowds of the Kumbh Mela—was specially screened at the 56th International Film Festival of India (IFFI) today. The film follows an elderly mother, deserted by her son, who finds unexpected allies in strangers and ultimately refuses to recognise the remorseful child who betrayed her.",
      },
      {
        type: "image",
        url: "/images/news/khoya-paya-1.jpg",
        alt: "‘Khoya Paya’: A Heart-Wrenching Tale",
        caption: "‘Khoya Paya’: A Heart-Wrenching Tale",
      },
      {
        type: "paragraph",
        text: "The lead actors also revealed that Shooting in Kumbh was unique and challenging, but adventurous and exciting. Anjali Patil regretted not having to shoot in Kumbh as her scenes didn’t have any provision for it. Seema Biswas noted, “The crowd didn’t interfere much with the shooting process and were very cooperative and supportive, may be because of the existent spiritual feelings all around”.",
      },
    ],
  },
  {
    id: "2",
    slug: "seema-biswas-shines-in-khoya-paya",
    title:
      'Seema Biswas Shines in Khoya Paya: A Tender, Unforgiving Portrait of a Mother’s Wound"',
    date: "2025-07-18",
    category: "",
    author: "",
    newsLink:
      "https://neindiabroadcast.com/2025/11/26/seema-biswas-shines-in-khoya-paya-a-tender-unforgiving-portrait-of-a-mothers-wound/",
    featuredImage: "/images/projects/khoyapaya/coverimage.png",
    excerpt:
      "Khoya Paya is highlighted as a powerful emotional drama, with Seema Biswas delivering a deeply affecting performance that exposes society’s quiet cruelty toward aging parents, set against the vast, overwhelming backdrop of the Kumbh Mela.",
    content: [
      {
        type: "paragraph",
        text: "At the Khoya Paya screening at International Film Festival of India (IFFI), veteran actor Seema Biswas delivered a powerful performance as an elderly mother abandoned by her son in the sea of humanity at the Mahakumbh Mela. The film, directed by debutant Ashutosh Singh, uses this premise to highlight a harsh reality — how aging parents can be neglected or treated as a burden despite societal reverence for them.",
      },
      {
        type: "paragraph",
        text: "Beyond a personal story, “Khoya Paya” serves as a social wake-up call: it challenges viewers to reflect on respect, familial duty and the pain of abandonment. The crowded, chaotic backdrop of the Mela becomes a metaphor for how easily someone can be lost — not just physically, but emotionally — in modern life.",
      },
      {
        type: "image",
        url: "/images/news/khoya-paya-2.jpg",
        alt: "",
        caption: "",
      },
    ],
  },
  {
    id: "3",
    slug: "from-kumbh-to-camera",
    title: "From Kumbh to camera",
    date: "2025-07-18",
    category: "",
    author: "",
    newsLink: "https://navhindtimes.in/from-kumbh-to-camera/",
    featuredImage: "/images/news/ashutosh-hemant.jpg",
    excerpt:
      "The article shows how Khoya Paya blends the emotional reality of modern family distance with the immersive backdrop of the Kumbh Mela, achieving authenticity despite production challenges. Strong performances by Seema Biswas and Anjali Patil further elevate the film, grounding it in genuine emotional depth.",
    content: [
      {
        type: "paragraph",
        text: "The article profiles the premiere of Khoya Paya and its debut director Ashutosh Singh, who candidly discusses how rising urbanization and changing family structures influenced the film’s emotional core. He explains that although he personally cares for his aging parents, physical distance and modern lifestyles have eroded traditional intimacy — a quiet ache that inspired the narrative.",
      },
      {
        type: "paragraph",
        text: "Despite limited budget and the logistical challenge of filming partly at Maha Kumbh Mela, the team recreated a realistic “Kumbh camp” in a village near Singh’s native region. The choice helped maintain visual authenticity when intercutting real-footage and studio shoots. The cast — including Seema Biswas and Anjali Patil — reportedly embraced the story’s emotional weight, lending the film sincerity and depth despite production constraints.",
      },
      {
        type: "image",
        url: "/images/news/kumbh-to-camera.jpeg",
        alt: "",
        caption: "",
      },
    ],
  },
  {
    id: "4",
    slug: "khoya-paya-herald-news",
    title: "Khoya Paya: A rare blend of craft, culture & cinema",
    date: "2025-07-18",
    category: "",
    author: "",
    newsLink:
      "https://www.heraldgoa.in/cafe/hemanshu-rais-khoya-paya-a-rare-blend-of-craftculture-cinema/455605/",
    featuredImage: "/images/news/khoya-paya-3.webp",
    excerpt:
      "The article shows how Khoya Paya blends the emotional reality of modern family distance with the immersive backdrop of the Kumbh Mela, achieving authenticity despite production challenges. Strong performances by Seema Biswas and Anjali Patil further elevate the film, grounding it in genuine emotional depth.",
    content: [
      {
        type: "paragraph",
        text: "The article presents Khoya Paya as a deeply rooted cinematic project that merges traditional culture, social relevance, and cinematic craft. It notes that the film — produced by Hemanshu Rai — explores the fragile bond between a mother and her son, set against a backdrop that reflects faith, identity, and societal neglect. The story’s emotional core rests on universal themes of abandonment, ageing, and memory, giving the film both a local flavour and a broader human resonance.",
      },
      {
        type: "image",
        url: "/images/news/khoya-paya-news-paper.jpeg",
        alt: "",
        caption: "",
      },
      {
        type: "paragraph",
        text: "Moreover, the article praises the filmmakers’ commitment to authenticity: it describes how the cultural, social and spiritual textures of the setting are woven into the narrative — not just as decoration, but as part of the film’s moral and aesthetic backbone. This approach positions Khoya Paya not only as a social drama, but as a film that respects tradition while challenging viewers to reflect on modern family values and collective responsibility.",
      },
    ],
  },
  {
    id: "5",
    slug: "khoya-paya-go-spiritual-india",
    title: "Khoya Paya: Even the Sangam Can’t Cleanse That Sin",
    date: "2025-07-18",
    category: "",
    author: "",
    newsLink:
      "https://www.heraldgoa.in/cafe/hemanshu-rais-khoya-paya-a-rare-blend-of-craftculture-cinema/455605/",
    featuredImage: "/images/news/khoya-paya-poster.jpg",
    excerpt:
      "Khoya Paya juxtaposes the sacred setting of the Kumbh with societal abandonment, turning familial neglect into spiritual reckoning — a bold cinematic call to honor the living mother rather than seek ritual absolution.",
    content: [
      {
        type: "paragraph",
        text: "The article describes how Khoya Paya — screened at International Film Festival of India (IFFI) — uses the sacred chaos of Mahakumbh Mela to underline a powerful moral truth: abandoning one’s mother is a sin that even the holy waters of the Triveni Sangam cannot wash away. Go Spiritual India The film, through the portrayal by Seema Biswas, delivers a stark commentary on how contemporary society can revere spiritual rituals yet neglect the real, living “goddess” at home — one’s aging mother.",
      },
      {
        type: "image",
        url: "/images/news/khoya-paya-poster-1.jpg",
        alt: "",
        caption: "",
      },
      {
        type: "paragraph",
        text: "Beyond just its emotional core, the article argues that Khoya Paya acts as a “spiritual alarm bell”: it confronts audiences with the spiritual and karmic consequences of familial neglect, invoking traditional values like matru devo bhava (mother is divine) and positioning the act of abandonment as a moral crime. Go Spiritual India The film’s blend of raw realism — shooting during actual pilgrim crowds — and spiritual symbolism makes the story universal and deeply unsettling, questioning whether society can truly claim faith while forgetting its most basic duties.",
      },
    ],
  },
];
