import { useState, useEffect } from 'react';
import { dummyPosts, InstagramPost } from '../data/dummyInstagramPosts';

// --- Configuration ---
// IMPORTANT: Replace with your actual Long-Lived Instagram User Access Token
const INSTAGRAM_ACCESS_TOKEN = 'YOUR_INSTAGRAM_ACCESS_TOKEN_HERE'; 
const USE_DUMMY_DATA = true; // Set to false to use the real API

/**
 * This is the hook you will use when you have an API key.
 * It fetches data from the Instagram Basic Display API.
 * 
 * To get your access token, you'll need to set up an app on Meta for Developers
 * and use the Instagram Basic Display API.
 */
const fetchRealInstagramFeed = async (): Promise<InstagramPost[]> => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp,thumbnail_url&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.statusText}`);
    }
    const data = await response.json();

    // The API returns data in a different shape, so we map it to our InstagramPost type
    return data.data.map((post: any) => ({
      id: post.id,
      type: post.media_type,
      mediaUrl: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
      caption: post.caption || '',
      likes: 0, // Note: The Basic Display API does not provide like/comment counts
      commentsCount: 0,
      timestamp: post.timestamp,
      permalink: post.permalink,
    }));
  } catch (error) {
    console.error("Failed to fetch Instagram feed:", error);
    return []; // Return an empty array on error
  }
};


export const useInstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFeed = async () => {
      setLoading(true);
      setError(null);
      try {
        if (USE_DUMMY_DATA || INSTAGRAM_ACCESS_TOKEN === 'YOUR_INSTAGRAM_ACCESS_TOKEN_HERE') {
          // Use dummy data if configured or if the token is not set
          await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
          setPosts(dummyPosts);
        } else {
          // Fetch real data from the API
          const realPosts = await fetchRealInstagramFeed();
          setPosts(realPosts);
        }
      } catch (err) {
        setError('Failed to load Instagram feed.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getFeed();
  }, []);

  return { posts, loading, error };
};
