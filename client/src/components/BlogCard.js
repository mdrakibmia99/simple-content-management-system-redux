import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, image, description, tag, author, rating, _id } = blog;
  const navigate = useNavigate();

  return (
    <div>
      <div class="relative">
        <img
          class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
          loading="lazy"
          src={image}
          alt={_id}
        />

        <div class="absolute bottom-0 flex p-3 bg-gray-900">
          <span class="object-cover object-center w-10 h-10 rounded-full bg-white">
            <span className="h-full w-full flex justify-center items-center">
              {author
                ?.split(" ")
                ?.map((k) => k[0])
                ?.join("")}
            </span>
          </span>

          <div class="mx-4">
            <h1 class="text-sm text-gray-700 dark:text-gray-200">{author}</h1>
            <p class="text-sm text-white bg-purple-500 px-1 rounded-xl w-fit">
              {tag}
            </p>
          </div>
        </div>
      </div>

      <h1
        class="mt-6 text-xl font-semibold text-gray-800 text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </h1>

      <hr class="w-32 my-6 text-blue-500" />

      <p
        class="text-sm text-gray-500 dark:text-gray-400 first-letter:text-xl h-28 overflow-hidden text-ellipsis"
        title={description}
      >
        {description}
      </p>

      <div className="flex justify-between mt-4">
        <button
          className="rounded-lg text-indigo-500 font-semibold"
          onClick={() => navigate(`/blog/${_id}`)}
        >
          Read more
        </button>
        <span className="rounded-full flex">
          {[...Array(rating)?.keys()]?.map((rate) => (
            <svg
              key={rate}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
