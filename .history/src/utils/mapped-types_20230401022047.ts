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
  name: "Thanhdev developer",
  age: 20,
  gender: "male",
  school: "Duy Tan",
  isGood: true,
};
// Thanhdev['name']
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
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
type UnlockedAccount = CreateMutable<LockedAccount>;
