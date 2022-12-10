import React from "react";

const MySkills = () => {
  return (
    <div>
      {" "}
      <h2>
        <span className="text-3xl font-bold text-purple-600">My</span>{" "}
        <span className="text-2xl font-semibold text-zinc-400">Skills</span>
      </h2>
      <div className=" my-5 px-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
        <div className="badge mr-2 mx-auto px-7 py-4 badge-primary">
          JavaScript
        </div>
        <div className="badge mr-2 mx-auto px-7 py-4 badge-primary">
          ReactJs
        </div>
        <div className="badge mr-2 mx-auto px-7 py-4 badge-primary">
          React Router Dom
        </div>
        <div className="badge mr-2 mx-auto px-7 py-4 badge-secondary">
          Tailwind CSS
        </div>
        <div className="badge mr-2 mx-auto px-7 py-4 badge-secondary">
          Bootstrap
        </div>
        <div className="badge mr-2 mx-auto px-7 py-4 badge-accent">DaisyUI</div>
        <div className="badge mr-2 mx-auto px-7 py-4 badge-accent">
          Flowbite
        </div>
        <div className="badge mr-2 mx-auto px-7 py-4 badge-info">MongoDB</div>
        <div className="badge mr-2 mx-auto px-7 py-4 badge-info">NodeJs</div>
        <div className="badge mr-2 mx-auto px-7 py-4 badge-info">ExpressJs</div>
        <div className="badge mr-2 mx-auto px-7 py-4 badge-info">Firebase</div>
      </div>
    </div>
  );
};

export default MySkills;
