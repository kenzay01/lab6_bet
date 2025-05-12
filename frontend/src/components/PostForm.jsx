import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/PostForm.css";

function PostForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const [post, setPost] = useState({ title: "", text: "", author: "" });

  useEffect(() => {
    if (isEditing) {
      axios
        .get(`http://localhost:5000/api/posts/${id}`)
        .then((res) => setPost(res.data));
    }
  }, [id]);

  const handleChange = (e) =>
    setPost({ ...post, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(`http://localhost:5000/api/posts/${id}`, post);
    } else {
      await axios.post("http://localhost:5000/api/posts", post);
    }
    navigate("/");
  };

  return (
    <div className="form-container">
      <nav>
        <h1>{isEditing ? "Edit Post" : "Create Post"}</h1>
        <div className="nav-buttons">
          <Link to="/" className="back-button">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              maxLength={17}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="text">Content</label>
            <textarea
              id="text"
              name="text"
              value={post.text}
              onChange={handleChange}
              required
              rows="6"
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={post.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              {isEditing ? "Update Post" : "Create Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
