export const firstToUppercase = (string) => string.charAt(0).toUpperCase() + string.slice(1);
export const clamp = (min, value, max) => Math.min(max, Math.max(min, value));
