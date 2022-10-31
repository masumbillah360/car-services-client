import React from "react";
import guranty from "../../../../assets/icons/check.svg";
import deliver from "../../../../assets/icons/deliveryt.svg";
import group from "../../../../assets/icons/group.svg";
import clock from "../../../../assets/icons/Group38729.svg";
import person from "../../../../assets/icons/person.svg";
import wrench from "../../../../assets/icons/Wrench.svg";
import ChooseItem from "./ChooseItem/ChooseItem";

const Choose = () => {
  const chooseData = [
    {
      id: 1,
      title: "Expert Team",
      icon: group,
    },
    {
      id: 2,
      title: "Timely Delivery",
      icon: clock,
    },
    {
      id: 3,
      title: "Best Equipment",
      icon: wrench,
    },
    {
      id: 4,
      title: " 24/7 Support",
      icon: person,
    },
    {
      id: 5,
      title: "100% Guranty",
      icon: guranty,
    },
    {
      id: 6,
      title: "Timely Delivery",
      icon: deliver,
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-500">Core Features</h3>
        <h1 className="text-4xl font-extrabold my-4">Why Choose Us</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="flex justify-evenly items-center bg-gray-300 py-10 rounded-lg mt-12">
        {chooseData.map((choice) => (
          <ChooseItem key={choice.id} choose={choice}></ChooseItem>
        ))}
      </div>
    </div>
  );
};

export default Choose;
