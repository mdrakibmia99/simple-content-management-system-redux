import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Sidebar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const request = await fetch(`https://simple-content-management-system-redux.vercel.app/user/${user.email}`);
      const response = await request.json();
      setAdmin(response);
    };
    getUser();
  }, [user]);

  if (loading) {
    return (
      <span
        style={{ borderTopColor: "transparent" }}
        className="w-7 h-7 border-4 border-blue-400 border-solid rounded-full animate-spin"
      ></span>
    );
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg">
      <ul className="flex gap-3  flex-col h-full">
        <li className="font-semibold text-lg overflow-hidden text-ellipsis whitespace-nowrap">
          Admin Dashboard
        </li>
        <hr />
        <li className="overflow-hidden text-ellipsis whitespace-nowrap">
          <Link to="/dashboard"> History </Link>
        </li>
        {admin?.data?.role === "admin" && (
          <>
            <li className="overflow-hidden text-ellipsis whitespace-nowrap">
              <Link to="blog-list">Blog List</Link>
            </li>
            <li className="overflow-hidden text-ellipsis whitespace-nowrap">
              <Link to="add-blog"> Add Blog </Link>
            </li>
          </>
        )}
        <li className="mt-auto overflow-hidden text-ellipsis whitespace-nowrap">
          <Link to="/"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
