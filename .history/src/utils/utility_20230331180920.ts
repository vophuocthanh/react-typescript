// Partial
interface Todo {
  title: string;
  desc: string;
  date: string;
  author: string;
}
// interface NewTodo {
//   title?: string;
//   desc?: string;
//   date?: string;
// }
type NewTodo = Partial<Todo>;
function updateTodo(todo: Todo, newTodo: NewTodo) {
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
      date: "31/03/2023",
      author: "ThanhDev",
    },
    {}
  )
);
// Required<Type>
interface Props {
  isActive?: boolean;
  color?: string;
}

const compA: Props = {};
const compB: Required<Props> = {
  isActive: true,
  color: "black",
};
