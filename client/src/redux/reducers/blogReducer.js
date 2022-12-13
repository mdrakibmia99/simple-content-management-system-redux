import blogActionTypes from "../actionTypes/blogActionTypes";

const initialState = {
  blogs: [],
  blog: {},
  sortBy: false,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case blogActionTypes.ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    case blogActionTypes.DELETE_CONTENT:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };

    case blogActionTypes.GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };

    case blogActionTypes.FETCH_BLOG:
      return {
        ...state,
        blog: action.payload,
      };

    case blogActionTypes.UPDATE_CONTENT:
      return {
        ...state,
        blogs: [
          ...state.blogs,
          state.blogs.filter((blog) => blog._id !== action.payload._id),
          action.payload,
        ],
      };

    case blogActionTypes.TOGGLE_SORTBY:
      return {
        ...state,
        sortBy: !state.sortBy,
      };

    default:
      return state;
  }
};

export default blogReducer;
