import React from 'react';
import * as API from '../../api/wildersApi';
import WilderHeader from "./WilderHeader";
import WilderBody from "./WilderBody";
import WilderFooter from "./WilderFooter";

const WilderCard = ({ wilder, onRemoveWilder }) => {

  const remove = async () => {
    await API.removeWilder(wilder._id);
    onRemoveWilder(wilder._id);
  }

  return (
    <div className="card">
      <WilderHeader picture={wilder.picture}></WilderHeader>
      <WilderBody title={wilder.name} description={wilder.description}></WilderBody>
      <WilderFooter skills={wilder.skills}></WilderFooter>
      <button onClick={remove}>Delete</button>
    </div>
  );
};

export default WilderCard;