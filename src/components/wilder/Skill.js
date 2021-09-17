import React from 'react';

const Skill = ({ skill }) => {
  return (
    <div className="skill">
      {skill.title} <span>{skill.votes}</span>
    </div>
  );
};

export default Skill;