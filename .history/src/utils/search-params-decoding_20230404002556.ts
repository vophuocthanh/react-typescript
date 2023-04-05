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
// "name=thanhdev&age=20".split("&")
type QueryElement = String.Split<Query, "&">[1];
