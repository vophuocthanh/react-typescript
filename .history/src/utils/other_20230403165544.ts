// in
// Union: { name: string } | { age: number }
function log(obj: { name: string } | { age: number }) {
  if ("name" in obj) {
    console.log(obj.name);
  }
}
// typeof
// keyof
