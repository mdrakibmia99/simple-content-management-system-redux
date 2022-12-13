import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getBlog from "../../redux/thunks/getBlog";
import updateBlog from "../../redux/thunks/updateBlog";

const UpdateBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);
  const [weBlog, setWeBlog] = useState({});

  useEffect(() => {
    dispatch(getBlog(id));
  }, [dispatch, id]);

  const { title, image, description, tag, author, rating, highlights, _id } =
    blog;

  useEffect(() => {
    setWeBlog({
      title,
      image,
      description,
      tag,
      author,
      rating,
      highlights,
      _id,
    });
  }, [title, image, description, tag, author, rating, highlights, _id]);

  function handleUpdateBlogForm(event) {
    event.preventDefault();

    const blogInfo = {
      _id,
      title: event.target.title.value,
      image: event.target.image.value,
      description: event.target.description.value,
      tag: event.target.tag.value,
      author: event.target.author.value,
      rating: event.target.rating.value,
      highlights,
    };

    dispatch(updateBlog(blogInfo));
  }

  return (
    <section className="flex flex-col justify-center items-center h-full w-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleUpdateBlogForm}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={weBlog.title}
            onChange={(event) => setWeBlog({ title: event.target.value })}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            value={weBlog.image}
            onChange={(event) => setWeBlog({ image: event.target.value })}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={weBlog.description}
            onChange={(event) => setWeBlog({ description: event.target.value })}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="tag">
            Tag
          </label>
          <select
            name="tag"
            id="tag"
            value={weBlog.tag}
            onChange={(event) => setWeBlog({ tag: event.target.value })}
          >
            <option value="programming-language">Programming Language</option>
            <option value="interview-question">Interview Question</option>
            <option value="aptitude-qna">Aptitude QNA</option>
            <option value="machine-learning">Machine Learning</option>
            <option value="cloud-computing">Cloud Computing</option>
            <option value="embedded-system">Embedded System</option>
            <option value="nanotechnology">Nanotechnology</option>
            <option value="big-data">Big Data</option>
            <option value="hadoop">Hadoop</option>
            <option value="dbms">DBMS</option>
          </select>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={weBlog.author}
            onChange={(event) => setWeBlog({ author: event.target.value })}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight1">
            Highlight 1
          </label>
          <input type="text" name="highlight1" id="highlight1" />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight2">
            Highlight 2
          </label>
          <input type="text" name="highlight2" id="highlight2" />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight3">
            Highlight 3
          </label>
          <input type="text" name="highlight3" id="highlight3" />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight4">
            Highlight 4
          </label>
          <input type="text" name="highlight4" id="highlight4" />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="rating">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={weBlog.rating}
            onChange={(event) => setWeBlog({ rating: event.target.value })}
          />
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateBlog;
