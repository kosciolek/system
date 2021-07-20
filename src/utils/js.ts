export const firstToUppercase = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const clamp = (min: number, value: number, max: number) =>
  Math.min(max, Math.max(min, value));
