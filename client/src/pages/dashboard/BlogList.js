import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBlogs from "../../redux/thunks/getBlogs";
import deleteBlog from "../../redux/thunks/deleteBlog";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <section className="flex flex-col justify-center items-center h-full w-full">
      <div class="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="font-semibold text-gray-800">Blogs</div>
        </header>

        <div class="overflow-x-auto p-3">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
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
                <th class="p-2">
                  <div class="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
              {blogs.map(({ title, description, tag, author, rating, _id }) => (
                <tr>
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
                  <td class="p-2">
                    <div class="flex justify-center">
                      {/* remove button */}
                      <button onClick={() => dispatch(deleteBlog(_id))}>
                        <svg
                          class="w-8 h-8 hover:text-red-600 rounded-full hover:bg-gray-100 p-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                      {/* update button */}
                      <button
                        onClick={() => navigate(`/dashboard/update/${_id}`)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
