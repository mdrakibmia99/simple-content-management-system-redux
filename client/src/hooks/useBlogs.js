import { useEffect, useState } from "react";

function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://simple-content-management-system-redux.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data))
      .catch((err) => console.log(err));
      
  }, []);

  return blogs;
}

export default useBlogs;
