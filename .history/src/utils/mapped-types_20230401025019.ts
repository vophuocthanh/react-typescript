// cách 1
// type Developer = {
//   name: string;
// } & Record<string, any>;
// cách 2
type Developer = {
  name: string;
  [key: string]: string | number | boolean;
};
const thanhdev: Developer = {
  name: "Vo Phuoc Thanh",
  age: 20,
  gender: "male",
  school: "Duy Tan",
  isGood: true,
};
// Thanhdev['name'] = 'Vo Phuoc Thanh'
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
// Type ['darkMode', 'newUserProfile']
// Property: darkMode: boolean, newUserProfile: boolean
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};
type FeatureOptions = OptionsFlags<FeatureFlags>;
// Mapping Modifiers
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
  // xóa readonly ra khỏi property
};
// Thanhdev['name'] = 'Vo Phuoc Thanh'
type LockedAccount = {
  readonly id: string;
  readonly name: string;
  readonly age: number;
  readonly isGood: boolean;
};
type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<T> = {
  [P in keyof T]-?: T[P];
  // xóa ? để thành bắt buộc
};
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
type User = Concrete<MaybeUser>;
// Key Remapping via `as`
// type MappedTypeWithNewProperties<Type> = {
//   [Properties in keyof Type as NewKeyType]: Type[Properties];
// };

type Getters<T> = {
  [P in keyof T as `on${Capitalize<string & P>}Change`]: (value: T[P]) => T[P];
};
interface Person {
  name: string;
  age: number;
  location: string;
}
type LazyPerson = Getters<Person>;
// onNameChange: (value: string) => void
// onAgeChange: (value: number) => void
// onLocationChange: (value: string) => void
// onNameFocus: (value: string) => void
// onAgeFocus: (value: number) => void
// onLocationFocus: (value: string) => void
