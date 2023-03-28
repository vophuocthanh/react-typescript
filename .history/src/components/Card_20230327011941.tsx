import React, { useEffect } from "react";
import { ICard } from "../utils/interface";

const Card = ({ title, desc, image, link }: ICard) => {
  useEffect(() => {
    const input = document.querySelector("input");
  }, []);

  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default Card;
