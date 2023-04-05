import { String } from "ts-toolbelt";

const query = `/home?name=thanhdev&age=20`;
// const objQuery:  = {
//   name: "thanhdev",
//   age: 20,
// };
type Query = typeof query;
//  `/home?name=thanhdev&age=20` => ["/home", "name=thanhdev&age=20"]
type SecondQueryPart = String.Split<Query, "?">[1];
