// src/PostData.js
import React, { useState } from "react";
import "./Post.css";
import axios from "axios";

const PostData = () => {
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState();
  const [postData, setPostData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create data object
    const data = { title, userId };
    console.log("Data to be sent:", data);

    // Post API
    axios
      .post("https://dummyjson.com/posts/add", data)
      .then((res) => {
        console.log("Response from server:", res);
        console.log("Response data:", res.data);
        setPostData(res.data);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };

  return (
    <div className="Post">
      <h2 className="Data">Post Data</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="User id"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />

        <br />
        <button type="submit">Post Data</button>
      </form>
      {postData && (
        <div className="Posted">
          <h2>Posted Data</h2>
          <p>Title: {postData.title}</p>
          <p>User ID: {postData.userId}</p>
        </div>
      )}
    </div>
  );
};

export default PostData;
