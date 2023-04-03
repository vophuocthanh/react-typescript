// Ternary operator
// condition  ? true : false
// someType extends otherType ? trueType : falseType

type someType<T> = T extends string
  ? "Thanhdev"
  : T extends boolean
  ? boolean
  : T extends number
  ? number
  : any;

type someValue = someType<number>;
type someValue2 = someType<string>;
type someValue3 = someType<boolean>;
