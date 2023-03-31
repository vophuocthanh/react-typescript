function simpleUseState(val: string): [() => string, (v: string) => void] {
  return [
    () => val,
    (v: string) => {
      val = v;
      console.log(val);
    },
  ];
}
const [strGetter, strSetter] = simpleUseState("thanhdev");
console.log(strGetter()); //thanhdev
strSetter("Developer");
console.log(strGetter()); //Developer
