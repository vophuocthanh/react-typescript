// Replace All<S, From, To>
// replaceAll<'demo item demo', '', 'item'> => 'demo item demo'
// replaceAll<'demo item demo', 'demo', 'item'> => 'item item item'
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${ReplaceAll<Right, From, To>}`
  : S;
type ResultsReplace = ReplaceAll<"demo item demo", "demo", "item">;
// 'demo item demo'
// Left: ""
// From: 'demo'
// Right: " item demo"
//  => results: item item item
