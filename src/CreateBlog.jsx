import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("nicat");
  const [finished, setFinished] = useState(false);
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setFinished(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setFinished(false);
      history.push('/')
    });
  };

  return (
    <div className="create">
      <h2>Add new Blog</h2>
      <form onSubmit={submit}>
        <label htmlFor="">Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog Text:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="ibrahim">ibrahim</option>
          <option value="nicat">nicat</option>
        </select>

        {!finished && <button>Add new blog </button>}
        {finished && <button>Adding your blog...</button>}
      </form>
    </div>
  );
};
