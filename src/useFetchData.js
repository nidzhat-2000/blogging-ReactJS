import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [dataBlog, setDataBlog] = useState(null);
  const [fetched, setFetched] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        // console.log(res);
        if (!res.ok) throw new Error("failed to upload fetch");
        else {
          return res.json();
        }
      })
      .then((data) => {
        // console.log(data);
        setFetched(true);
        setDataBlog(data);
        setError(null);
      })
      .catch((err) => {
        const message = err.message;
        console.log(message);
        // console.log(message);
        setError(message);
        setFetched(true);
      });
  }, [url]);

  return { dataBlog, fetched, error };
};

export default useFetchData;
