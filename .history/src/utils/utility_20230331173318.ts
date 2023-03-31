interface Todo {
  title: string;
  desc: string;
}
function updateTodo(todo: Todo, newTodo: Todo) {
  return {
    ...todo,
    ...newTodo,
  };
}
console.log(
  updateTodo(
    {
      title: "Learn NextJS",
      desc: "Learn CSS",
    },
    {
      title: "Learn JavaScript",
      desc: "Learn JavaScript with love",
    }
  )
);
