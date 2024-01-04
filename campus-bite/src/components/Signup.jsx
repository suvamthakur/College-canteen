import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="max-w-md bg-secondary rounded-xl shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="modal-action flex flex-col justify-center  mt-0">
        <form
          className="card-body"
          method="dialog"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="font-bold text-lg">Please Create A Account</h3>

          {/* .....email...... */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              {...register("email")}
            />
          </div>

          {/* .........password....... */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              {...register("password")}
            />
            <label className="label"></label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" value="login" className="btn btn-primary">
              SignUp
            </button>
          </div>
          <p className="text-center my-2">
            Have an account?
            <Link
              to="/signup"
              className="underline text-red ml-1"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              LogIn Now
            </Link>
          </p>
        </form>
        <Modal />
      </div>
    </div>
  );
};

export default Signup;
