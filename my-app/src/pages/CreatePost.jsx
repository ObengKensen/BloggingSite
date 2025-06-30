
import { useState, useContext } from 'react';
import { PostContext } from '../context/PostContext';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const { addPost } = useContext(PostContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('News');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      summary,
      content,
      author,
      category,
      date: new Date().toLocaleDateString(),
      image: image ? URL.createObjectURL(image) : '',
    };
    addPost(newPost);
    navigate('/');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto pt-24">
      <h2 className="text-2xl font-bold mb-4">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Summary"
          className="w-full border p-2 rounded"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full border p-2 rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option>News</option>
          <option>Sports</option>
          <option>Business</option>
        </select>
        <textarea
          placeholder="Content"
          className="w-full border p-2 rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="block"
        />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="w-full h-48 object-cover rounded mt-2"
          />
        )}
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Post Blog
        </button>
      </form>
    </div>
  );
}
