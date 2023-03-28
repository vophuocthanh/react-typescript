// function overloading
function total(a: number, b: number) {
  return a + b;
}
function total(a: string, b: string) {
  return a + b;
}
total(5, 7); // 12
