import { String, Union } from "ts-toolbelt";
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
  [Q in QueryElement[number]]: {
    [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1];
  };
}[QueryElement[number]];
const objQueryResults: Union.Merge<QueryParams> = {};
// Q là cái này: "name=thanhdev" => name: "thanhdev"
// Q là cái này: "age=20" => age: 20
// QueryElement[number]
// const objQuery:  = {
//   name: "thanhdev",
//   age: 20,
// };

// const obj2={
//   "name=thanhdev": {
//       name: "thanhdev";
//   };
//   "age=20": {
//       age: "20";
//   };
// }
// obj2["name=thanhdev"] => {name: "thanhdev"}

// {
//   name: "thanhdev";
// } | {
//   age: "20";
// }
//  => {name: 'thanhdev', age: "20"}
