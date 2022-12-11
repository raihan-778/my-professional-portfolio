import React from "react";
import { FcCheckmark } from "react-icons/fc";

const FunQuiz = () => {
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
              src="https://i.ibb.co/MZktF0t/fun-quiz-hub.png"
              alt="fun-quiz"
            />
            <div className="grid grid-cols-2 gap-2 ">
              <img
                className="h-full lg:h-72 md:h-72 w-full rounded-xl "
                src="https://i.ibb.co/pbhDGph/fun-quiz-toast.png"
                alt="fun-quiz"
              />
              <img
                className=" h-full lg:h-72 md:h-72 w-full rounded-xl "
                src="https://i.ibb.co/7Q57gCW/fun-quiz33.png"
                alt="fun-quiz"
              />
            </div>
          </div>
        </figure>
        <div className="text-left mt-5 mx-auto ">
          <h2 className="card-title">It's a Simple Quiz App</h2>
          <h4 className="text-2xl font-semibold text-cyan-500">
            Key Features In This Porject
          </h4>

          <div className="flex w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>User can chose any of the Topic to Participate Quizes</p>
          </div>
          <div className="flex  w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>There is a button to know the right answer of the quiz</p>
          </div>
          <div className="flex  text-left   w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>User will be notified if he guess the right or wrong answer.</p>
          </div>
          <div className="flex   w-full">
            <p>
              <FcCheckmark />
            </p>
            <p>
              A simple Notificaton tool react-toestify is used for better user
              experience
            </p>
          </div>

          <div className="card-actions justify-center my-5">
            <button className="btn btn-sm btn-primary">
              <a href="https://github.com/raihan-778/quiz-carckers">
                Github Source Code
              </a>
            </button>
            <button className="btn btn-sm btn-accent">
              <a href="https://fun-quiz-hub.netlify.app/home">Live Link</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunQuiz;
