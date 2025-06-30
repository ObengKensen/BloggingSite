import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <p className="p-6">Post not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
