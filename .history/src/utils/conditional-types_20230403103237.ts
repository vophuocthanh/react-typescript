// Ternary operator
// condition  ? true : false
// someType extends otherType ? trueType : falseType

type someType<T> = T extends string
  ? "Thanhdev"
  : T extends boolean
  ? "true"
  : T extends number
  ? 2003
  : any;

type someValue = someType<number>;
type someValue2 = someType<string>;
type someValue3 = someType<boolean>;
