import { String } from "ts-toolbelt";
const query = `/home?name=thanhdev&age=20`;
// const objQuery:  = {
//   name: "thanhdev",
//   age: 20,
// };
type Query = typeof query;
// `/home?name=thanhdev&age=20` => ["/home", "name=thanhdev&age=20"]
// `/home?name=thanhdev&age=20`.split("?")
type SecondQueryPart = String.Split<Query, "?">[1];
// "name=thanhdev&age=20" => ["name=thanhdev", "age=20"]
// "name=thanhdev&age=20".split("&") => ["name=thanhdev", "age=20"]
type QueryElement = String.Split<SecondQueryPart, "&">;
// bắt đầu lú
type QueryParams = {
  [Q in QueryElement[number]]: {};
};
// Q là cái này: "name=thanhdev" => name: "thanhdev"
// QueryElement[number]
// const objQuery:  = {
//   name: "thanhdev",
//   age: 20,
// };
