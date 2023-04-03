// Ternary operator
// condition  ? true : false
// someType extends otherType ? trueType : falseType

type someType<T> = T extends string ? string : boolean;

type someValue = someType<number>;
type somValue2 = someType<string>;
