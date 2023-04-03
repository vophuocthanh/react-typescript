// Ternary operator
// condition  ? true : false
// someType extends otherType ? trueType : falseType

type someType<T> = T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends number
  ? number
  : any;

type someValue = someType<number>;
type someValue2 = someType<string>;
type someValue3 = someType<boolean>;

type myExclude<T, U> = T extends U ? never : T;
// never: có nghĩa là không bao giờ sảy ra
type TExclude = Exclude<"a" | "b" | "c", "a">; // b, c
// Union type: T "a" | "b" | "c"
// U: 'a'
// 'a' extends 'a' ? never : 'a' => never
// 'b' extends 'a' ? never : 'b' => 'b'
// 'c' extends 'a' ? never : 'c' => 'c'
// result: 'b' | 'c'
type myExtract<T, U> = T extends U ? T : never;
type TExtract = myExtract<"a" | "b" | "c", "a">;
// 'a' extends 'a' ? 'a'  : never => 'a'
// 'b' extends 'a' ? 'b'  : never => never
// 'c' extends 'a' ? 'c'  : never => never
// result: 'a'
type Check<T> = T extends string ? boolean : number;

let strCheck: Check<"hello">; // strCheck sẽ có kiểu dữ liệu boolean
let numCheck: Check<42>; // numCheck sẽ có kiểu dữ liệu number

type MyInfer<T> = T extends infer E ? E : any;
type UseMyInfer1 = MyInfer<string>;
type UseMyInfer2 = MyInfer<boolean>;
type UseMyInfer3 = MyInfer<{
  age: number;
}>;
type OptionsFlags2<Type> = {
  [Property in keyof Type]: Type[Property] extends () => void
    ? Property
    : never;
}[keyof Type];
interface MyStudent {
  name: string;
  age: number;
  updateName(): void;
}
type MyStudentConditional = OptionsFlags2<MyStudent>;
