import { useCallback, useEffect, useMemo, useRef, useState } from "react";
export function useElements() {
    const [elements, setElements] = useState({});
    const funcsRef = useRef({});
    const ref = useRef(elements);
    const addElement = useCallback((key) => {
        if (!funcsRef.current[key])
            funcsRef.current[key] = (elem) => {
                if (elem) {
                    setElements((prev) => (Object.assign(Object.assign({}, prev), { [key]: elem })));
                }
                else {
                    delete funcsRef.current[key];
                    setElements((prev) => {
                        const copy = Object.assign({}, prev);
                        if (elem)
                            copy[key] = elem;
                        else
                            delete copy[key];
                        return copy;
                    });
                }
            };
        return funcsRef.current[key];
    }, []);
    useEffect(() => {
        ref.current = elements;
    }, [elements]);
    const hasElements = useMemo(() => Object.keys(elements).length > 0, [elements]);
    return { elements, addElement, elementsRef: ref, hasElements };
}
