import React from "react";

const AboutMe = () => {
  return (
    <div className="mx-5 rounded-xl border">
      <div className="hero min-h-screen ">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 text-center">
          <figure className="p-5">
            <img
              className="rounded-xl"
              src="https://i.ibb.co/K51SXHF/About-me-banner.png"
              alt="Album"
            />
          </figure>
          <div className="w-full p-10">
            <h1 className="text-5xl font-bold">My Programming Journey</h1>
            <p className="py-6">
              A have started my programming journey since 2020.In this two years
              journey I have gathered skills on JavaScript, ReactJs, Tailwind
              CSS, Firebase, NodeJs, ExpressJs, MongoDB etc.I have completed few
              full stack project using my skill.Before entering this programming
              world, I have completed my MS in Chemistry.And I have worked as a
              Chemist in several Water Treatment Plants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
