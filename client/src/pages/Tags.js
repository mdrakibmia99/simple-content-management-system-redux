import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";
import getBlogs from "../redux/thunks/getBlogs";

const Tags = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  const [active, setActive] = useState("programming-language");

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const activeClass = "bg-purple-500 border-0 text-white";

  const tags = [
    "programming-language",
    "interview-question",
    "aptitude-qna",
    "machine-learning",
    "cloud-computing",
    "embedded-system",
    "big-data",
    "nanotechnology",
    "hadoop",
    "dbms",
  ];

  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-y-4 mt-4">
        <div className="flex flex-wrap gap-2 lg:px-0 md:px-0 px-4 mb-4">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`border rounded-3xl py-2 px-4 font-semibold text-sm whitespace-nowrap ${
                active === tag ? activeClass : null
              }`}
              onClick={() => setActive(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 lg:px-0 md:px-0 px-4">
          {blogs.map(
            (blog) =>
              blog.tag === active && <BlogCard key={blog._id} blog={blog} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Tags;
