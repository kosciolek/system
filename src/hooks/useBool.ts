import { useMemo, useState } from "react";

export function useBool(initial: boolean) {
  const [value, setValue] = useState(initial);

  const { toggle, setFalse, setTrue } = useMemo(
    () => ({
      toggle: () => setValue((prev) => !prev),
      setFalse: () => setValue(false),
      setTrue: () => setValue(true),
    }),
    []
  );

  return { value, setValue, toggle, setFalse, setTrue };
}
