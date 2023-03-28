export type Age = 18 | 20 | 30 | "40" | 50 | 60;
// Intersection types
interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: string;
  name: string;
}
interface Contact {
  email: string;
  phone: string;
}
// Type casting
// Type assertion
