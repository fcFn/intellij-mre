export type Generic<Value> = Record<string, Value extends number ? never : Value>;

export default function Component<T> ({prop}: {prop: Generic<T>}) {
  return <div></div>;
};
