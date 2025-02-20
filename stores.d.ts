export namespace toast {
    export { subscribe };
    export { push };
    export { pop };
    export { set };
    export { _init };
}
export type SvelteComponent = import('svelte').ComponentType;
export type FlyParams = import('svelte/types/runtime/transition/index').FlyParams;
export type SvelteToastCustomComponent = {
    /**
     * - custom Svelte Component
     */
    src: SvelteComponent;
    /**
     * - props to pass into custom component
     */
    props?: {
        [x: string]: any;
    } | undefined;
    /**
     * - forward toast id to prop name
     */
    sendIdTo?: string | undefined;
};
export type SvelteToastOnPopCallback = (id?: number | undefined) => any;
export type SvelteToastOptions = {
    /**
     * - unique id generated for every toast
     */
    id?: number | undefined;
    /**
     * - container target name to send toast to
     */
    target?: string | undefined;
    /**
     * - toast message
     */
    msg?: string | undefined;
    /**
     * - duration of progress bar tween from initial to next
     */
    duration?: number | undefined;
    /**
     * - initial progress bar value
     */
    initial?: number | undefined;
    /**
     * - next progress bar value
     */
    next?: number | undefined;
    /**
     * - pause progress bar tween on mouse hover
     */
    pausable?: boolean | undefined;
    /**
     * - allow dissmiss with close button
     */
    dismissable?: boolean | undefined;
    /**
     * - display toasts in reverse order
     */
    reversed?: boolean | undefined;
    /**
     * - toast intro fly animation settings
     */
    intro?: import("svelte/types/runtime/transition/index").FlyParams | undefined;
    /**
     * - css var overrides
     */
    theme?: {
        [x: string]: string | number;
    } | undefined;
    /**
     * - user-defined classes
     */
    classes?: string[] | undefined;
    /**
     * - callback that runs on toast dismiss
     */
    onpop?: SvelteToastOnPopCallback | undefined;
    /**
     * - send custom Svelte Component as a message
     */
    component?: SvelteToastCustomComponent | undefined;
    /**
     * - DEPRECATED
     */
    progress?: number | undefined;
};
declare const subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: ((value?: any[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
/**
 * Send a new toast
 * @param {(string|SvelteToastOptions)} msg
 * @param {SvelteToastOptions} [opts]
 * @returns {number}
 */
declare function push(msg: (string | SvelteToastOptions), opts?: SvelteToastOptions | undefined): number;
/**
 * Remove toast(s)
 * - toast.pop() // removes the last toast
 * - toast.pop(0) // remove all toasts
 * - toast.pop(id) // removes the toast with specified `id`
 * - toast.pop({ target: 'foo' }) // remove all toasts from target `foo`
 * @param {(number|Object<'target',string>)} [id]
 */
declare function pop(id?: (number | any)): void;
/**
 * Update an existing toast
 * @param {(number|SvelteToastOptions)} id
 * @param {SvelteToastOptions} [opts]
 */
declare function set(id: (number | SvelteToastOptions), opts?: SvelteToastOptions | undefined): void;
declare function _init(target?: string, opts?: {}): {
    [x: string]: SvelteToastOptions;
};
export {};
