export type Age = 18 | 20 | 30 | "40" | 50 | 60;
// Intersection types
interface IBusinessPartner {
  name: string;
  credit: number;
}
interface IIdentity {
  id: number;
  name: string;
}
interface IContact {
  email: string;
  phone: string;
}
type Employee = IIdentity & IContact;
type Customer = IBusinessPartner & IContact;
let thanhdev: Employee = {
  email: "thanhdev@gmail.com",
  id: 1,
  name: "Vo Phuoc Thanh",
  phone: "123445645",
};
let thanh: Customer = {
  credit: 1,
  name: "Vo Phuoc Thanh",
  email: "thanh@gmail.com",
  phone: "12345",
};
// Type casting
// Type assertion
