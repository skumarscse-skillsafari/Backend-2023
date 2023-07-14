import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    axios
      .get("https://light-zipper-bass.cyclic.app/posts")
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    if (window.confirm("Are you sure to delete the post?")) {
      setPosts(posts.filter((p) => p._id !== id));
      axios
        .delete(`https://light-zipper-bass.cyclic.app/posts/${id}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <h2 className="display-3 text-center">List of all the posts </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <Post key={post._id} post={post} deletePost={deletePost} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
