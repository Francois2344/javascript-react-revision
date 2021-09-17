import React from 'react';
import Skill from "./Skill";

const WilderFooter = ({ skills }) => {
  return (
    <div>
      <h2 className="wilder-footer-title">Wild skills</h2>
      <div className="wilder-footer-skills">
        {
          skills.map((skill) => <Skill key={skill.title} skill={skill}></Skill>)
        }
      </div>
    </div>
  );
};

export default WilderFooter;