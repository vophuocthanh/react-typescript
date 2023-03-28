export type Age = 18 | 20 | 30 | "40" | 50 | 60;
// Intersection types
interface IBusinessPartner {
  name: string;
  credit: number;
}
interface IIdentity {
  id: string;
  name: string;
}
interface IContact {
  email: string;
  phone: string;
}
type Employee = IIdentity & IBusinessPartner & IContact;
// Type casting
// Type assertion
