const addBlog = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://simple-content-management-system-redux.vercel.app/blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    const data = await res.json();
    if (data.data.acknowledged) {
      dispatch({
        _id: data.data.insertedId,
        ...blog,
      });
    }
  };
};

export default addBlog;
