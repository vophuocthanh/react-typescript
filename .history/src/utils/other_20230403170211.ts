// in
// Union: { name: string } | { age: number }
function log(obj: { name: string } | { age: number }) {
  if ("name" in obj) {
    console.log(obj.name);
  }
  if ("age" in obj) {
    console.log(obj.age);
  }
}
// typeof
const myStudent = {
  id: 1,
  name: "Thanh",
  age: 20,
};
// keyof
