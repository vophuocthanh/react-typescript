import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const reviews = [
  {
    name: "Evondev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  // {
  //   name: "React Query",
  //   image: "",
  //   stars: 3,
  //   premiumUser: false,
  //   date: "04/08/2022",
  // },
];

function App() {
  const [count, setCount] = useState(0);
  function displayReview(
    totalReviews: number,
    name?: string,
    premium?: boolean
  ) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
        <strong>Bin Cọt</strong> ⭐️
      </>
    );
  }

  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="review-info">{displayReview(reviews.length)}</div>
      </div>
    </div>
  );
}

export default App;
