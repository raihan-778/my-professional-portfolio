import React from "react";
import ContactMe from "../ContactMe/ContactMe";

import Banner from "./Banner";
import MyProjects from "./MyProjects/MyProjects";
import MySkills from "./MySkils/MySkills";

const Home = () => {
  return (
    <div className="w-100">
      <Banner></Banner>
      <MySkills></MySkills>
      <MyProjects></MyProjects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
