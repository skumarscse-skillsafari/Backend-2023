import { Link } from "react-router-dom";

const Post = ({ post, deletePost }) => {
  return (
    <tr>
      <td>{post.username}</td>
      <td>{post.description}</td>
      <td>{post.duration}</td>
      <td>{post.date.substring(0, 10)}</td>
      <td>
        <Link to={`/${post._id}`}>edit</Link> |{" "}
        <a href="#" onClick={() => deletePost(post._id)}>
          delete
        </a>
      </td>
    </tr>
  );
};

export default Post;
