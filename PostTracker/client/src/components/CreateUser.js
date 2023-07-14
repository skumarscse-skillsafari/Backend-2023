import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = { username: username };
    axios
      .post("https://light-zipper-bass.cyclic.app/users/add", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setUsername("");
    alert("User added successfully");
    navigate("/");
  };
  return (
    <div>
      <h2 className="display-5 text-center">Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            required
            className="form-control"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
