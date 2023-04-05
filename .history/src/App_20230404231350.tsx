import React from "react";
const Heading = ({ title }) => {
  return <h2 className="font-primary font-bold text-2xl">{title}</h2>;
};
const App = () => {
  return (
    <div>
      <Heading title="HEADING"></Heading>
    </div>
  );
};

export default App;
