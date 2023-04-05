import React from "react";
const Heading = ({ title }: { title: string }) => {
  return <h2 className="font-primary font-bold text-2xl mb-5">{title}</h2>;
};
const App = () => {
  return (
    <div>
      <Heading title="Todo App"></Heading>
      <div className="max-w-sm">
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className="p-4 border border-slate-200 rounded-lg"
          />
          <button className="p-4 rounded-lg bg-blue-500 text-white text-center">
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
