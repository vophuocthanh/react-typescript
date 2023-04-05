import React from "react";
const Heading = ({ title }: { tilte: string }) => {
  return <h2 className="font-primary font-bold text-2xl">{title}</h2>;
};
const App = () => {
  return (
    <div>
      <Heading title="Account information"></Heading>
    </div>
  );
};

export default App;
