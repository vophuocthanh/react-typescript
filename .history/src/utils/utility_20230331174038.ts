interface Todo {
  title: string;
  desc: string;
  date: string;
}
function updateTodo(todo: Todo, newTodo: NewTodo) {
  return {
    ...todo,
    ...newTodo,
  };
}
interface NewTodo {
  title?: string;
  desc?: string;
  date?: string;
}
console.log(
  updateTodo(
    {
      title: "Learn NextJS",
      desc: "Learn CSS",
      date: "31/03/2023",
    },
    {}
  )
);
