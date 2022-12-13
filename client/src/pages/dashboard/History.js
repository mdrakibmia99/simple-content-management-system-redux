import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBlogs from "../../redux/thunks/getBlogs";

const History = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const blogsIDs = localStorage.getItem("blog-history");

  return (
    <section className="flex flex-col justify-center items-center h-full w-full">
      <div class="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="font-semibold text-gray-800">Reading History</div>
        </header>

        <div class="overflow-x-auto p-3">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th class="p-2">
                  <div class="font-semibold text-left">Image</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Title</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Description</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Tag</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Author</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-center">Rating</div>
                </th>
              </tr>
            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
              {blogs.map(
                ({ title, image, description, tag, author, rating, _id }) =>
                  blogsIDs?.includes(_id) && (
                    <tr>
                      <td class="p-2">
                        <div class="font-medium text-gray-800">
                          <img
                            src={image}
                            alt={_id}
                            className="h-16 w-16 object-cover object-center"
                          />
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="font-medium text-gray-800">{title}</div>
                      </td>
                      <td class="p-2">
                        <div
                          class="text-left capitalize h-14 overflow-hidden"
                          title={description}
                        >
                          {description}
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="text-left text-purple-500">{tag}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left font-medium">{author}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-left font-medium">{rating}</div>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default History;
