import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const reviews = [
  {
    name: "Thạnh",
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

const user = {
  firstName: "Vo",
  lastName: "Phuoc Thanh",
  age: 20,
  isStudent: true: true
};

function App() {
  const [count, setCount] = useState(0);
  function displayReview(totalReviews: number, name: string, premium: boolean) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
        <strong>{name}</strong> {premium ? "⭐️" : ""}
      </>
    );
  }

  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[0].name,
            reviews[0].premiumUser
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
