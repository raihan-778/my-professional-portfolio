import React from "react";
import TypingAnim from "./TypeAnimation/TypingAnim";
import bannerImg from "../../../public/assets/banner.png";

const Banner = () => {
  return (
    <div className="hero w-100  bg-base-200">
      <div className="hero-content mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="w-100">
          <h1 className="text-5xl font-bold">Hi, This is Raihan</h1>
          <p className="py-6">
            <TypingAnim></TypingAnim>
          </p>
          <button className="btn btn-success">
            <a
              href="https://drive.google.com/file/d/1LST7TzOJ7mu3a5vEz_v68zzsPtK03qeu/view?usp=share_link"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>
        <div className="w-100">
          <img src={bannerImg} className="W-full rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
