import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "I am a MERN Stack Developer",
        ,
        // Types 'One'
        1000, // Waits 1s
        "My Skill are", // Deletes 'One' and types 'Two'
        1500, // Waits 2s
        "JavaScript", // Types 'Three' without deleting 'Two'
        2000, // Waits 2s
        "ReactJs", // Types 'Three' without deleting 'Two'
        2500, // Waits 2s
        "Tailwind Css", // Types 'Three' without deleting 'Two'
        3000, // Waits 2s
        "MongoDB", // Types 'Three' without deleting 'Two'
        3500, // Waits 2s
        "NodeJs & ExpressJs", // Types 'Three' without deleting 'Two'
        4000, // Waits 2s
        "", // Types 'Three' without deleting 'Two'

        () => {
          console.log("Done typing!"); // Place optional callbacks anywhere in the array
        },
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em" }}
    />
  );
};

export default TypingAnim;
