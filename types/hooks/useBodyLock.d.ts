export declare const SCROLL_LOCKABLE_ATTRIB = "data-scroll-lockable";
export declare const scrollLockable: {
    "data-scroll-lockable": boolean;
};
export declare const COMPENSATE_BODY_LOCK_CLASS = "__hidden-overflow";
export declare const compensateBodyLock: {
    className: string;
};
export declare function useBodyLock(isLocked: boolean): void;
export declare function measureScrollbar(force?: boolean): void;
