import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import EditPost from "./components/EditPost";
import CreatePost from "./components/CreatePost";
import CreateUser from "./components/CreateUser";
function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/:id" element={<EditPost />} />
          <Route path="/posts" element={<CreatePost />} />
          <Route path="/create" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
