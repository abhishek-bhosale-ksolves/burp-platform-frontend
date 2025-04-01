import React from "react";
import Card from "./Card";

const CardsGrid = ({ allPositions }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {allPositions.map((position) => (
        <Card
          key={position.title}
          title={position.title}
          experience={position.experience}
          description={position.description}
          buttonText="Refer a Buddy!"
        />
      ))}
    </div>
  );
};

export default CardsGrid;
