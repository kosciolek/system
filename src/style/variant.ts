export const variant =
  <PROPS extends unknown>(prop: PROPS[keyof PROPS], propName?: keyof PROPS) =>
  (propsInner: PROPS) =>
    // @ts-ignore
    propsInner[propName || "variant"] === prop ? "&" : "&.__NEVER";
