import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/PostList.css";
import { FaPlus } from "react-icons/fa6";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((res) => setPosts(res.data));
  }, []);
  const openJSON = () => {
    window.open("http://localhost:5000/api/posts-json", "_blank");
  };

  return (
    <div className="home-container">
      <nav>
        <h1 className="Logo">MyNotes</h1>
        <div className="nav-buttons">
          <Link to="/add">
            <FaPlus />
          </Link>
          <button onClick={openJSON}>Open JSON</button>
        </div>
      </nav>
      <div className="posts-container">
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post._id} className="post-item">
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
            </li>
          ))}
          <li className="post-item new">
            <Link to="/add">Create New</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostList;
