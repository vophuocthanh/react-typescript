// cách 1
// type Developer = {
//   name: string;
// } & Record<string, any>;
// cách 2
type Developer = {
  name: string;
  [key: string]: string | number;
};
const thanhdev: Developer = {
  name: "Thanhdev developer",
  age: 20,
  gender: "male",
  school: "Duy Tan",
};
