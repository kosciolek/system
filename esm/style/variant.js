export const variant = (prop, propName) => (propsInner) => 
// @ts-ignore
propsInner[propName || "variant"] === prop ? "&" : "&.__NEVER";
