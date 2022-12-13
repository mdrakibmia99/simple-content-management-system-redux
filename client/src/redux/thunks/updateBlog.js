import { updateBlogData } from "../actions/blogActions";

const updateBlog = (blog) => {
  const { _id, ...rest } = blog;

  return async (dispatch, getState) => {
    const res = await fetch(`https://simple-content-management-system-redux.vercel.app/blog/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rest),
    });

    const data = await res.json();
    if (data.data.acknowledged) {
      dispatch(updateBlogData(blog));
    }
  };
};

export default updateBlog;
