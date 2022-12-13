import blogActionTypes from "../actionTypes/blogActionTypes";

export const addBlogData = (data) => {
  return {
    type: blogActionTypes.ADD_CONTENT,
    payload: data,
  };
};

export const removeBlogData = (id) => {
  return {
    type: blogActionTypes.DELETE_CONTENT,
    payload: id,
  };
};

export const fetchBlogsData = (data) => {
  return {
    type: blogActionTypes.GET_CONTENT,
    payload: data,
  };
};

export const fetchBlogData = (data) => {
  return {
    type: blogActionTypes.FETCH_BLOG,
    payload: data,
  };
};

export const updateBlogData = (data) => {
  return {
    type: blogActionTypes.UPDATE_CONTENT,
    payload: data,
  };
};

export const toggleSortBy = () => {
  return {
    type: blogActionTypes.TOGGLE_SORTBY,
  };
};
