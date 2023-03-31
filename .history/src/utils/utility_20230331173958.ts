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
}
console.log(
  updateTodo(
    {
      title: "Learn NextJS",
      desc: "Learn CSS",
    },
    {}
  )
);
