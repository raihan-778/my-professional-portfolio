import React from "react";

const MyProjects = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="used-product"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Used Product Re-sale App</h2>
          <p>
            This a used producta re-selling platform.User authentication , Admin
            Panel, and payment system is intigrated in this app{" "}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
