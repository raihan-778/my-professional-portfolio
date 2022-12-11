import React from "react";
import { FcCheckmark } from "react-icons/fc";

const BanglaDish = () => {
  return (
    <div>
      <h2 className="mb-5">
        Project{" "}
        <span className="text-3xl font-bold text-center text-cyan-400">
          Details
        </span>
      </h2>
      <div className="card card-compact mx-auto w-3/4 shadow-xl">
        <figure>
          <div className="grid grid-cols-1 gap-2">
            <img
              className="w-full mx-auto rounded-xl"
              src="https://i.ibb.co/YLZvbKn/bangla-dish.png"
              alt="dish"
            />
            <div className="grid grid-cols-2 gap-2 ">
              <img
                className="h-full lg:h-72 md:h-72 w-full rounded-xl "
                src="https://i.ibb.co/9VsfnYh/bangla-dish2.png"
                alt="dish"
              />
              <img
                className=" h-full lg:h-72 md:h-72 w-full rounded-xl "
                src="https://i.ibb.co/gwmFjBR/bangla-dish3.png"
                alt="dish"
              />
            </div>
          </div>
        </figure>
        <div className="text-left mt-5 mx-auto">
          <h2 className="card-title">Food Dish review App</h2>
          <h4 className="text-2xl font-semibold text-cyan-500">
            Key Features In This Porject
          </h4>

          <div className="flex w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>Firebase Authentication System.</p>
          </div>
          <div className="flex  w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>If any user in login then he can review any products he want.</p>
          </div>
          <div className="flex  text-left   w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>Private routing system is added in this project.</p>
          </div>
          <div className="flex   w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>
              In my review route loged in user only see his own reviewd Dishes.
            </p>
          </div>
          <div className="flex   w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>Used MongoDB as Database management.</p>
          </div>
          <div className="flex   w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>EXpress js is used for server side.</p>
          </div>

          <div className="card-actions justify-center my-5">
            <button className="btn btn-sm btn-primary">
              <a href="">Github Source Code</a>
            </button>
            <button className="btn btn-sm btn-accent">
              <a href="https://bangla-dish.web.app/">Live Link</a>Live Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanglaDish;
