import React from "react";
import FormBanner from "./FormBanner";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import useUser from "../../hooks/useUser";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [createUserWithEmailAndPassword, user, loading, errorCWP] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, errorUP] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const submit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  let content = null;
  useUser(user);

  if (user) {
    content = (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 relative"
        role="alert"
      >
        <span className="block sm:inline mr-1">Signed in user:</span>
        <strong className="font-bold">{user?.email}</strong>
      </div>
    );
  }

  if (loading) {
    content = (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 relative"
        role="alert"
      >
        Loading...
      </div>
    );
  }

  if (updating) {
    content = (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 relative"
        role="alert"
      >
        Updating...
      </div>
    );
  }

  if (errorCWP || errorUP) {
    content = (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 relative"
        role="alert"
      >
        <strong className="font-bold mr-1">
          {errorCWP?.name || errorUP?.name}
        </strong>
        <span className="block sm:inline">
          {errorCWP?.message || errorUP?.message}
        </span>
      </div>
    );
  }

  if (content === null) {
    content = (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
        <input
          className="p-2 mt-8 rounded-xl border"
          type="text"
          name="name"
          placeholder="Name"
          {...register("name")}
        />
        <input
          className="p-2 rounded-xl border"
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
        <div className="relative">
          <input
            className="p-2 rounded-xl border w-full"
            type="password"
            name="password"
            placeholder="Password"
            {...register("password")}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="gray"
            className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>
        <button
          type="submit"
          className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
        >
          Register
        </button>
      </form>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* <!-- register container --> */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* <!-- form --> */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you ain't a member, easily sign up
          </p>

          {content}

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Login with Google
          </button>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Already have an account?</p>
            <button
              className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              onClick={() => navigate("/sign-in")}
            >
              Login
            </button>
          </div>
        </div>

        {/* <!-- image --> */}
        <FormBanner />
      </div>
    </section>
  );
};

export default SignUp;
