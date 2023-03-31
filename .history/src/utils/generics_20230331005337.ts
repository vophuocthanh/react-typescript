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

// interface
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}
const languages: {
  name: string;
  dificutly: number;
} = [
  {
    name: "ReactJS",
    dificutly: 60,
  },
  {
    name: "Angular",
    dificutly: 70,
  },
  {
    name: "Vue",
    dificutly: 80,
  },
];
console.log(ranker([1, 2, 3, 4], (number) => number * 5));
//  [1, 2, 3, 4, 5, 6, 7, 8, 9] (v) => v * 5
