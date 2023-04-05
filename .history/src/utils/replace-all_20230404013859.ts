// Replace All<S, From, To>
// replaceAll<'demo item demo', '', 'item'> => 'demo item demo'
// replaceAll<'demo item demo', 'demo', 'item'> => 'item item item'
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends "" ? S : S;
