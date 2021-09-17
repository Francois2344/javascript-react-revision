import React from 'react';

const Counter = ({count, increase}) => {

  return (
    <div>
      <button onClick={increase}>+1</button>{count}
    </div>
  );
};

export default Counter;