import React from "react";
import { Link } from "react-router-dom";

const MyProjects = () => {
  return (
    <div className=" my-5">
      <h2 className="mb-5">
        My Recent{" "}
        <span className="text-3xl mb-5 font-bold text-cyan-500">Projects</span>
      </h2>
      <div className="mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* card-one */}
          <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/zbySqqj/picture-Image.png"
                alt="used-product"
                className="rounded-xl h-[250px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold">
                Used Product Re-sale App
              </h2>
              <p>
                This a used producta re-selling platform.User authentication ,
                Admin Panel, and payment system is intigrated in this app{" "}
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  <Link to="/used-product">View Details</Link>
                </button>
              </div>
            </div>
          </div>
          {/* card-two */}
          <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/8KwqLSS/bangle-dish.png"
                alt="food-review"
                className="rounded-xl h-[250px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold">Food review App</h2>
              <p>
                This a Food Review app . In this app user can review the food
                service and add any food he want to tast.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  <Link to="/bangla-dish">View Details</Link>
                </button>
              </div>
            </div>
          </div>
          {/* card-three */}
          <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/ZhtsdVg/fun-quiz-hub.png"
                alt="quiz-app"
                className="rounded-xl h-[250px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-bold">Food review App</h2>
              <p>
                This is a quiz app, here user can attend in quiz and see the
                results.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  <Link to="/fun-quiz">View Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
