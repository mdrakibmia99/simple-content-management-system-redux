import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import BlogDetails from "../pages/BlogDetails";
import AddBlog from "../pages/dashboard/AddBlog";
import BlogList from "../pages/dashboard/BlogList";
import History from "../pages/dashboard/History";
import UpdateBlog from "../pages/dashboard/UpdateBlog";
import ForgotPassword from "../pages/form/ForgotPassword";
import SignIn from "../pages/form/SignIn";
import SignUp from "../pages/form/SignUp";
import Home from "../pages/Home";
import Tags from "../pages/Tags";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tags",
        element: <Tags />,
      },
      {
        path: "blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      {
        path: "/dashboard",
        element: <History />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "blog-list",
        element: <BlogList />,
      },
      {
        path: "update/:id",
        element: <UpdateBlog />,
      },
    ],
  },
]);

export default routes;
