function simpleUseState<T>(val: T): [() => T, (v: T) => void] {
  return [
    () => val,
    (v: T) => {
      val = v;
      console.log(val);
    },
  ];
}
const [strGetter, strSetter] = simpleUseState("thanhdev");
console.log(strGetter()); //thanhdev
strSetter("Developer");
console.log(strGetter()); //Developer
const [strGetter2, strSetter2] = simpleUseState(100);
console.log(strGetter2()); //thanhdev
strSetter2("Developer");
console.log(strGetter2()); //Developer
const [strGetter3, strSetter3] = simpleUseState(true);
