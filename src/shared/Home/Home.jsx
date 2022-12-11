import React from "react";
import BgParticles from "../BgParticles/BgParticles";
import ContactMe from "../ContactMe/ContactMe";

import Banner from "./Banner";
import MyProjects from "./MyProjects/MyProjects";
import MySkills from "./MySkils/MySkills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MySkills></MySkills>
      <MyProjects></MyProjects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
