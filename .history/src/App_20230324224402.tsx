import { useState } from "react";
import "./App.css";

// arrObj: {}[] = [{}]

const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string;
}[] = [
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

function App() {
  const [count, setCount] = useState(0);
  const user: {
    firstName: string;
    lastName: string;
    age: number;
    isStudent: boolean;
    school: (string | number)[];
    scores: number[];
  } = {
    firstName: "Vo",
    lastName: "Phuoc Thanh",
    age: 20,
    isStudent: true,
    school: ["Duy Tan", "Kien Truc HCM", "Back Khoa", 20], // union types /
    scores: [10, 9, 8, 7, 5],
  };
  function displayReview(totalReviews: number, name: string, premium: boolean) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
        <strong>{name}</strong> {premium ? "⭐️" : ""}
      </>
    );
  }

  // Travel
  const travelIem: {
    name: string;
    image: string;
    totalReviews: number;
    rating: number;
    location: string;
    price: number;
    date: string;
    departure: string;
    feature: {
      freeWifi: boolean;
      freeParking: boolean;
      specialOffer: boolean;
    }
  }[] = [
    {
      name: "Đà Nẵng",
      image: "",
      totalReviews: 3,
      rating: 4.8,
      location: "",
      price: 320,
      date: "23/08/2022",
      departure: "Hà Nội",
      features: {"Wifi"},
    },
    {
      name: "Phan Thiết",
      image: "",
      totalReviews: 1,
      rating: 5,
      location: "",
      price: 420,
      date: "23/08/2022",
      departure: "Quảng Bình",
      features: {"Wifi"},
    },
  ];

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
          {/* {travelIem.} */}
        </div>
      </div>
    </div>
  );
}

export default App;
