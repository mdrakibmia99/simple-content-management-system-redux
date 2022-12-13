import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addHistory } from "../hooks/useHistory";
import getBlog from "../redux/thunks/getBlog";

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlog(id));
  }, [dispatch, id]);

  addHistory();

  const { title, image, description, tag, author, rating, highlights, _id } =
    blog;

  return (
    <section className="container mx-auto">
      <article className="h-full w-full flex justify-center items-center">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-8 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt={_id}
                  class="object-cover object-center h-[500px] w-[1200px]"
                  src={image}
                  loading="lazy"
                />
              </div>
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="w-20 h-20 rounded-full text-xl inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    {author
                      ?.split(" ")
                      ?.map((k) => k[0])
                      ?.join("")}
                  </div>
                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                      {author}
                    </h2>
                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p class="text-base mb-2">{title}</p>
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
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="leading-relaxed text-lg mb-4">{description}</p>
                  <span class="text-indigo-500 inline-flex items-center bg-slate-200 px-2 rounded-3xl font-bold">
                    {tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 lg:px-0 md:px-0 px-4">
            {highlights?.map((highlight, index) => (
              <div key={index} class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">{highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </section>
  );
};

export default BlogDetails;
