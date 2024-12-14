import { ButtonHTMLAttributes, CSSProperties, RefObject } from 'react';
export type ScrollToTopControllerProps = ButtonHTMLAttributes<HTMLButtonElement>;
export declare enum DefaultControllerProps {
    CLASSNAME = "algrith-scroll-to-top-controller",
    ID = "algrith-scroll-to-top-controller"
}
export type UseScrollToTopProps = {
    controllerRef?: RefObject<HTMLElement | null>;
    display?: CSSProperties['display'];
    hideControllerAt?: number;
    behavior?: ScrollBehavior;
    selector?: string;
    top?: number;
};
