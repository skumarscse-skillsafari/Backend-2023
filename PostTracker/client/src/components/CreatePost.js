import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CreatePost = () => {
  const [post, setPost] = useState({
    username: "",
    description: "",
    duration: "",
    date: new Date(),
    users: [],
  });
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        console.log(res.data);
        if (res.data.users.length > 0) {
          setPost((prev) => {
            return {
              ...prev,
              users: res.data.users.map((user) => user.username),
              username: res.data.users[0].username,
            };
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleChangeDate = (date) => {
    setPost((prev) => {
      return {
        ...prev,
        date: date,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username: post.username,
      description: post.description,
      duration: post.duration,
      date: post.date,
    };

    axios
      .post("http://localhost:5000/posts/add", newPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2 className="display-5 text-center">Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <select
            required
            className="form-select"
            name="username"
            value={post.username}
            onChange={handleChange}
          >
            {post.users.map((user, i) => {
              return (
                <option key={i} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <input
            type="text"
            required
            className="form-control"
            name="description"
            value={post.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Duration:</label>
          <input
            type="number"
            required
            className="form-control"
            name="duration"
            value={post.duration}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label me-3">Date:</label>
          <DatePicker
            selected={post.date}
            onChange={handleChangeDate}
            className="form-control"
          />
        </div>
        <br />
        <input type="submit" value="Create Post" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default CreatePost;
