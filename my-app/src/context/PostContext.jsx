import { createContext, useState, useEffect } from 'react';
import newsImg from '../assets/news.jpg';
import sportsImg from '../assets/sports.jpg';
import businessImg from '../assets/business.jpeg';

const initialPosts = [
  {
    id: 1,
    title: "Welcome to the BBC Blog",
    summary: "Discover news, sports, business and video highlights daily.",
    content: "This is the full content of the first blog post.",
    author: "John Doe",
    date: "June 25, 2025",
    category: "News",
    image: newsImg,
  },
  {
    id: 2,
    title: "Today in Sports",
    summary: "Highlights and scores from today's biggest games.",
    content: "This is the sports article content.",
    author: "Sarah Smith",
    date: "June 26, 2025",
    category: "Sports",
    image: sportsImg,
  },
  {
    id: 3,
    title: "Business Insight",
    summary: "Market trends and analysis from the BBC team.",
    content: "This is the full business post.",
    author: "Michael Johnson",
    date: "June 27, 2025",
    category: "Business",
    image: businessImg,
  },
];

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('blogPosts');
    return saved ? JSON.parse(saved) : initialPosts;
  });

  const addPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
}
