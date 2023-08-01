import React from "react";
import { Routes, Route} from "react-router-dom";
import App from "./containers/app";
import { Posts } from "./containers/posts";
import AddPost from "./containers/addPosts";

const Routing = () => (
  <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/addpost" element={<AddPost />} />
      </Routes>
);
export default Routing;
