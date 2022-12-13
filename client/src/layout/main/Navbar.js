import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loadingSI, errorSI] = useAuthState(auth);
  const [signOut, loadingSO, errorSO] = useSignOut(auth);

  const loading = (
    <span
      style={{ borderTopColor: "transparent" }}
      className="w-7 h-7 border-4 border-blue-400 border-solid rounded-full animate-spin"
    ></span>
  );

  if (errorSI || errorSO) {
    console.log(errorSI || errorSO);
  }

  return (
    <section className="bg-indigo-200">
      <nav className="h-14 container mx-auto">
        <ul className="h-full flex gap-x-4 items-center">
          <h1 className="text-xl font-semibold flex-1">Technical Blog</h1>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/tags"}>Tags</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          {loadingSI || loadingSO ? (
            loading
          ) : (
            <li>
              {user === null ? (
                <Link to={"/sign-in"}>Sign in</Link>
              ) : (
                <span
                  className="bg-indigo-500 text-white font-medium text-sm rounded-full h-7 w-7 inline-block cursor-pointer shadow"
                  onClick={async () => await signOut()}
                  title="Sign out"
                >
                  <span className="h-full w-full flex justify-center items-center">
                    {user?.displayName
                      ?.split(" ")
                      ?.map((k) => k[0])
                      ?.join("")}
                  </span>
                </span>
              )}
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
