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
// Readonly<Type> đọc chứ không sửa được
interface Book {
  title: string;
}
const life: Book = {
  title: "The life of book",
};
const game: Readonly<Book> = {
  title: "The life of game",
};
// game.title = "No game no life";
life.title = "No game no life";
// Record<Keys, Type>
interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "miffy" | "boris" | "mordred";
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
const NewRecords: Record<number, string> = {
  1: "Persian",
  2: "Maine Coon",
  3: "British Shorthair",
};
cats.boris;
// Pick<Type, Keys>
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Pick<Todo, "title" | "completed">;
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
todo;
