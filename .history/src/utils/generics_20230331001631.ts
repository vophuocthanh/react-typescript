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
console.log(strGetter2()); // 100
strSetter2(1000);
console.log(strGetter2()); // 1000
const [strGetter3, strSetter3] = simpleUseState(true);
function racker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: {
    item: RankItem;
    rank: number;
  }[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  return ranks.map((rank) => rank.item);
}

//  [1, 2, 3, 4, 5, 6, 7, 8, 9] (v) => v * 5
