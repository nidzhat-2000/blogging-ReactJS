import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetchData from "./useFetchData";

export const BlogDetails = () => {
  const { id } = useParams();
  const { dataBlog, fetched, error } = useFetchData(
    "http://localhost:8000/blogs/" + id
  );
  // all numbers

  const history = useHistory();

  const deleteBlog = () => {
    fetch("http://localhost:8000/blogs/" + dataBlog.id, {
      method: "Delete",
    }).then(() => {
      // console.log("this blog deleted");
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {!fetched && <div>Loading... </div>}
      {error && <div>{error}</div>}

      {dataBlog && (
        <article>
          <h2>{dataBlog.title}</h2>
          <p>Written by {dataBlog.author}</p>
          <div> {dataBlog.body} </div>
          <button onClick={deleteBlog}>Delete</button>
        </article>
      )}

      {/* <h2>BLog id - {id}</h2> */}
    </div>
  );
};
