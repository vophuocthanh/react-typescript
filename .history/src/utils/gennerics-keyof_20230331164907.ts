function getDevicesKeys<A, B extends keyof A>(items: A[], dataKey: B): A[B][] {
  return items.map((item) => item[dataKey]);
}

const devices = [
  {
    name: "Iphone",
    price: 1000,
  },
  {
    name: "Samsung",
    price: 900,
  },
  {
    name: "Xiaomi",
    price: 800,
  },
];
console.log(getDevicesKeys(devices, "name"));
console.log(getDevicesKeys(devices, "price"));
//  Output: key name ['Iphone, 'Samsung', 'Xiaomi]
// key price: [1000, 900, 800]
