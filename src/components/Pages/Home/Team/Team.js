import React from "react";
import team1 from "../../../../assets/images/team/1.jpg";
import team2 from "../../../../assets/images/team/2.jpg";
import team3 from "../../../../assets/images/team/3.jpg";
import TeamMember from "./TeamMember/TeamMember";

const Team = () => {
  const teamMember = [
    {
      id: 1,
      name: "Jhon Doe",
      expert: "Engine Expert",
      thumbnail: team1,
    },
    {
      id: 2,
      name: "Halum Mama",
      expert: "Engine Expert",
      thumbnail: team2,
    },
    {
      id: 3,
      name: "Mhon Koe",
      expert: "Engine Expert",
      thumbnail: team3,
    },
  ];
  return (
    <div className="my-32">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-500">Team</h3>
        <h1 className="text-4xl font-extrabold my-4">Meet Our Team</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1, justify-center md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMember.map((member, idx) => (
          <TeamMember key={member.id} memberInfo={member}></TeamMember>
        ))}
      </div>
    </div>
  );
};

export default Team;
