import React from "react";
const Heading = ({ title }: { title: string }) => {
  return <h2 className="font-primary font-bold text-2xl mb-5">{title}</h2>;
};
const App = () => {
  return (
    <div>
      <Heading title="Todo App"></Heading>
      <div className="max-w-sm">
        <div className="nb-5">
          <div className="flex items-center gap-x-3">
            <span>Learn Javascript</span>
            <button className="p-2 rounded-lg bg-red-500 text-white font-medium text-sm">
              Remove
            </button>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className="p-4 border border-slate-200 rounded-lg outline-none"
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
