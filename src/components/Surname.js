import React, {useState} from 'react';

const Surname = ({surname, updateSurname}) => {
  const [updateCounter, setUpdateCounter] = useState(0);

  const update = (event) => {
    setUpdateCounter(updateCounter+1);
    updateSurname(event.target.value);
  }

  return (
    <div>
      Name : <input onChange={(event) => updateSurname(event.target.value)} />
      {surname} - {updateCounter}
    </div>
  );
};

export default Surname;