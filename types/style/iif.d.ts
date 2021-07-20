export declare const iif: <PROPS extends unknown, PROP_NAME extends keyof PROPS>(prop: PROP_NAME, val?: PROPS[PROP_NAME] | undefined) => (propsInner: PROPS) => "&" | "&.__NEVER";
