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
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
// Type ['darkMode', 'newUserProfile']
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};
type FeatureOptions = OptionsFlags<FeatureFlags>;
