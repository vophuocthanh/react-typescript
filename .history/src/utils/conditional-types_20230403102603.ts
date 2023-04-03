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
type somValue2 = someType<string>;
