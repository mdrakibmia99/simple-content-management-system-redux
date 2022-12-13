import { useEffect, useState } from "react";

function useBlog(id) {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(`https://simple-content-management-system-redux.vercel.app/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  return blog;
}

export default useBlog;
