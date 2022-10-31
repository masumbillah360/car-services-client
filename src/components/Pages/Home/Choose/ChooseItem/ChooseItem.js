import React from "react";

const ChooseItem = ({ choose }) => {
  const { title, icon } = choose;
  return (
    <div className="text-center">
      <img className="mx-auto" src={icon} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default ChooseItem;
