import React from 'react';
import Proptypes from "prop-types";

const WilderBody = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

WilderBody.propTypes = {
  title: Proptypes.string,
  description: Proptypes.string
}

export default WilderBody;