import React from "react";
import { FcCheckmark } from "react-icons/fc";

const UsedProducts = () => {
  return (
    <div>
      <h2 className="mb-5">
        Project{" "}
        <p className="text-3xl font-bold text-center text-cyan-400">Details</p>
      </h2>
      <div className="card card-compact mx-auto w-3/4 shadow-xl">
        <figure>
          <div className="grid grid-cols-1">
            <div className="grid grid-cols-2 gap-3 ">
              <img
                className="h-full lg:h-72 md:h-72 w-full rounded-xl "
                src="https://i.ibb.co/QJz3SJ9/used-products-2png.png"
                alt="Shoes"
              />
              <img
                className=" h-full lg:h-72 md:h-72 w-full rounded-xl "
                src="https://i.ibb.co/6JJy0ML/used-product-3png.png"
                alt="Shoes"
              />
            </div>
            <img
              className="w-full mx-auto rounded-xl"
              src="https://i.ibb.co/5hJXS74/used-product-2.png"
              alt="Shoes"
            />
          </div>
        </figure>
        <div className="text-left mt-5 mx-auto">
          <h2 className="card-title">Used Product Re-sale App</h2>
          <h4 className="text-2xl font-semibold text-cyan-500">
            Key Features In This Porject
          </h4>

          <div className="flex w-full items-center">
            <p>
              <FcCheckmark />
            </p>
            <p>
              Three Types user I have added in this project sucn as, Admin,
              Seller & Buyer.
            </p>
          </div>
          <div className="flex items-center  w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>
              Admin have the full access of this apps such as delete any users
              or verify any users, delete reported products etc.
            </p>
          </div>
          <div className="flex items-center w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>
              Sellere can add any products for sale or delete or advertise it.
            </p>
          </div>
          <div className="flex items-center w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>
              Buyer only can see his booked products and can delete his booked
              products.
            </p>
          </div>
          <div className="flex items-center w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>
              Two-fector authentication system added using firebase and jwt for
              users.
            </p>
          </div>
          <div className="flex items-center w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>
              Database secured by using Admin rdive, JWT & email authentication.
            </p>
          </div>

          <div className="card-actions justify-center my-5">
            <button className="btn btn-sm btn-primary">
              <a href="https://github.com/raihan-778/my-used-laptop-resale-service-server">
                Github server Side Code
              </a>
            </button>
            <button className="btn btn-sm btn-primary">
              <a href="https://github.com/raihan-778/my-used-laptop-resale-servece">
                Github Client Side Code
              </a>
            </button>
            <button className="btn btn-sm btn-accent">
              <a href="https://used-product-resale-client.web.app/">
                Live Link
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsedProducts;
