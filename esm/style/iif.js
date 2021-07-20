export const iif = (prop, val) => (propsInner) => {
    if (val !== undefined)
        return propsInner[prop] === val ? "&" : "&.__NEVER";
    return propsInner[prop] ? "&" : "&.__NEVER";
};
