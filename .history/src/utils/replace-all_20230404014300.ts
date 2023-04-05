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
  ? ``
  : S;
type ResultsReplace = ReplaceAll<"demo item demo", "demo", "item">;
// 'demo item demo'
// Left: ""
// Right: " item demo"
// From: 'demo'
