import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/PostDetail.css";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    navigate("/");
  };

  if (!post)
    return (
      <div className="detail-container loading">
        <div className="loading-message">Loading post...</div>
      </div>
    );

  return (
    <div className="detail-container">
      <nav>
        <h1>Post Details</h1>
        <div className="nav-buttons">
          <Link to="/" className="back-button">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="post-content">
        <div className="post-card">
          <div className="post-info">
            <h2 className="post-title">{post.title}</h2>
            <div className="post-text">{post.text}</div>
            <div className="post-author">
              <em>Written by: {post.author}</em>
            </div>
          </div>

          <div className="post-actions">
            <Link to={`/edit/${post._id}`} className="edit-button">
              Edit Post
            </Link>
            <button onClick={handleDelete} className="delete-button">
              Delete Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
