import React from 'react';

const FirstComponent = (props) => {
  const { name, age, school } = props; // Destructure directly from props
  return (
    <div>
      FirstComponent
      <div>{name}</div>
      <div>{age}</div>
      <div>{school}</div>
    </div>
  );
};

export default FirstComponent;
