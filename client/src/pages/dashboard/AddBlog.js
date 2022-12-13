import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addBlog from "../../redux/thunks/addBlog";

const AddBlog = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const blog = {
      title: data.title,
      description: data.description,
      image: data.image,
      tag: data.tag,
      author: data.author,
      rating: Number(data.rating),
      highlights: [
        data.highlight1,
        data.highlight2,
        data.highlight3,
        data.highlight4,
      ],
    };

    dispatch(addBlog(blog));
  };

  return (
    <section className="flex flex-col justify-center items-center h-full w-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="title">
            Title
          </label>
          <input type="text" id="title" {...register("title")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input type="text" name="image" id="image" {...register("image")} />
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            {...register("description")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="tag">
            Tag
          </label>
          <select name="tag" id="tag" {...register("tag")}>
            <option value="programming-language">Programming Language</option>
            <option value="interview-question">Interview Question</option>
            <option value="aptitude-qna">Aptitude QNA</option>
            <option value="machine-learning">Machine Learning</option>
            <option value="cloud-computing">Cloud Computing</option>
            <option value="embedded-system">Embedded System</option>
            <option value="big-data">Big Data</option>
            <option value="nanotechnology">Nanotechnology</option>
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
            {...register("author")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight1">
            Highlight 1
          </label>
          <input
            type="text"
            name="highlight1"
            id="highlight1"
            {...register("highlight1")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight2">
            Highlight 2
          </label>
          <input
            type="text"
            name="highlight2"
            id="highlight2"
            {...register("highlight2")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight3">
            Highlight 3
          </label>
          <input
            type="text"
            name="highlight3"
            id="highlight3"
            {...register("highlight3")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight4">
            Highlight 4
          </label>
          <input
            type="text"
            name="highlight4"
            id="highlight4"
            {...register("highlight4")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="rating">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            id="rating"
            {...register("rating", { max: 5 })}
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

export default AddBlog;
