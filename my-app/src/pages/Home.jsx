import { useContext, useState } from 'react';
import { PostContext } from '../context/PostContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { posts } = useContext(PostContext);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = posts.filter(
    post =>
      post.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === 'All' || post.category === selectedCategory)
  );

  return (
    <div className="p-6 max-w-5xl mx-auto pt-24">
      <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>

      <input
        type="text"
        placeholder="Search posts by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full border border-gray-300 p-2 rounded"
      />

      <div className="mb-6 space-x-2">
        {['All', 'News', 'Sports', 'Business'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded ${
              selectedCategory === cat
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredPosts.map(post => (
        <div
          key={post.id}
          className="mb-8 rounded overflow-hidden shadow border border-transparent hover:border-red-600 hover:shadow-xl transition-all duration-300"
        >
          <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
          <div className="p-6 bg-white">
            <h3 className="text-2xl font-semibold mb-1">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-3">
              By <span className="font-medium">{post.author}</span> • {post.date}
            </p>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <Link
              to={`/post/${post.id}`}
              className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}




