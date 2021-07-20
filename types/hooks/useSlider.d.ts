import React from "react";
export declare function useSlider({ orientation, direction, min, max, initial, }: {
    min: number;
    max: number;
    initial: number;
    orientation?: "vertical" | "horizontal";
    direction?: "normal" | "reverse";
}): {
    rootProps: {
        ref: (elem: HTMLElement | null) => void;
        onMouseDown?: React.MouseEventHandler<Element> | undefined;
        onMouseDownCapture?: React.MouseEventHandler<Element> | undefined;
        onMouseEnter?: React.MouseEventHandler<Element> | undefined;
        onMouseLeave?: React.MouseEventHandler<Element> | undefined;
        onMouseMove?: React.MouseEventHandler<Element> | undefined;
        onMouseMoveCapture?: React.MouseEventHandler<Element> | undefined;
        onMouseOut?: React.MouseEventHandler<Element> | undefined;
        onMouseOutCapture?: React.MouseEventHandler<Element> | undefined;
        onMouseOver?: React.MouseEventHandler<Element> | undefined;
        onMouseOverCapture?: React.MouseEventHandler<Element> | undefined;
        onMouseUp?: React.MouseEventHandler<Element> | undefined;
        onMouseUpCapture?: React.MouseEventHandler<Element> | undefined;
        onTouchCancel?: React.TouchEventHandler<Element> | undefined;
        onTouchCancelCapture?: React.TouchEventHandler<Element> | undefined;
        onTouchEnd?: React.TouchEventHandler<Element> | undefined;
        onTouchEndCapture?: React.TouchEventHandler<Element> | undefined;
        onTouchMove?: React.TouchEventHandler<Element> | undefined;
        onTouchMoveCapture?: React.TouchEventHandler<Element> | undefined;
        onTouchStart?: React.TouchEventHandler<Element> | undefined;
        onTouchStartCapture?: React.TouchEventHandler<Element> | undefined;
        onPointerDown?: React.PointerEventHandler<Element> | undefined;
        onPointerDownCapture?: React.PointerEventHandler<Element> | undefined;
        onPointerMove?: React.PointerEventHandler<Element> | undefined;
        onPointerMoveCapture?: React.PointerEventHandler<Element> | undefined;
        onPointerUp?: React.PointerEventHandler<Element> | undefined;
        onPointerUpCapture?: React.PointerEventHandler<Element> | undefined;
        onPointerCancel?: React.PointerEventHandler<Element> | undefined;
        onPointerCancelCapture?: React.PointerEventHandler<Element> | undefined;
        onPointerEnter?: React.PointerEventHandler<Element> | undefined;
        onPointerEnterCapture?: React.PointerEventHandler<Element> | undefined;
        onPointerLeave?: React.PointerEventHandler<Element> | undefined;
        onPointerLeaveCapture?: React.PointerEventHandler<Element> | undefined;
        onPointerOver?: React.PointerEventHandler<Element> | undefined;
        onPointerOverCapture?: React.PointerEventHandler<Element> | undefined;
        onPointerOut?: React.PointerEventHandler<Element> | undefined;
        onPointerOutCapture?: React.PointerEventHandler<Element> | undefined;
        onGotPointerCapture?: React.PointerEventHandler<Element> | undefined;
        onGotPointerCaptureCapture?: React.PointerEventHandler<Element> | undefined;
        onLostPointerCapture?: React.PointerEventHandler<Element> | undefined;
        onLostPointerCaptureCapture?: React.PointerEventHandler<Element> | undefined;
        onScroll?: React.UIEventHandler<Element> | undefined;
        onScrollCapture?: React.UIEventHandler<Element> | undefined;
        onWheel?: React.WheelEventHandler<Element> | undefined;
        onWheelCapture?: React.WheelEventHandler<Element> | undefined;
        onGestureStart?: any;
        onGestureChange?: any;
        onGestureEnd?: any;
        onClick?: React.MouseEventHandler<Element> | undefined;
        onClickCapture?: React.MouseEventHandler<Element> | undefined;
    };
    value: number;
    isSliding: boolean;
    thumbOffset: number | null;
};
