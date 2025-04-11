import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

import Card from "../atoms/JobCard";

const CardsGrid = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/positions", {
          withCredentials: true,
        });
        setAllPositions(res.data);
      } catch (error) {
        console.error("Error fetching positions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {allPositions.map((position) => (
        <Card
          key={position._id}
          cardId={position._id}
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
