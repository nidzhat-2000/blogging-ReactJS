import React from "react";
import { Link } from "react-router-dom";

export const BLogList = ({ blogs, title, handleDelete }) => {
  // const {blogs} = props

  // console.log(props, blogs)
  // const {dataBlog, fetched} = useFetchData('http://localhost:8000/blogs')

  // blogs.map(eachblog => console.log(eachblog.id));

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((eachBlog) => (
        <div className="blog-preview" key={eachBlog.id}>
          <Link to={`/blogs/${eachBlog.id}`}>
            <h2>{eachBlog.title}</h2>
            <p>Written by {eachBlog.author}</p>
            {/* <button onClick={() => handleDelete(eachBlog.id)}>
            Delete this article
          </button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};
