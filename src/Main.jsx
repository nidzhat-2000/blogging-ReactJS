import React from "react";
import { BLogList } from "./BLogList.jsx";
import useFetchData from "./useFetchData.js";
// import useFetchData from '/useFetchData.js';

export const Main = () => {
  // const [number, setNumber] = useState(0);

  // const [data, setData] = useState([
  //   {
  //     title: "My First Blog",
  //     body: "Why do we use it?",
  //     author: "nicat",
  //     id: 1,
  //   },
  //   {
  //     title: "Progress",
  //     body: "Will be soon",
  //     author: "ibrahim",
  //     id: 2,
  //   },
  //   {
  //     title: "Don't give up",
  //     body: "It takes some time",
  //     author: "nicat",
  //     id: 3,
  //   },
  // ]);
  // console.log(data);
  // const handleDelete = (id) => {
  //   const newBlogs = data.filter((eachBlog) => eachBlog.id !== id);
  //   setData(newBlogs);
  // };

  const { dataBlog, fetched, error } = useFetchData(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!fetched && <div>Loading...</div>}

      {dataBlog && (
        <BLogList
          blogs={dataBlog}
          title={"All Blogs"}
          // handleDelete={handleDelete}
        />
      )}
    </div>
  );
};
