function getDevicesKeys<A, B extends keyof A>(items: A[], key: B): A[B][] {}
getDevicesKeys(devices);

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
//  Output: key name ['Iphone, 'Samsung', 'Xiaomi]
// key price: [1000, 900, 800]
