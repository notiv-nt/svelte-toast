/** @typedef {typeof __propDef.props}  SvelteToastProps */
/** @typedef {typeof __propDef.events}  SvelteToastEvents */
/** @typedef {typeof __propDef.slots}  SvelteToastSlots */
export default class SvelteToast extends SvelteComponentTyped<{
    options?: import("./stores").SvelteToastOptions | undefined;
    target?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SvelteToastProps = typeof __propDef.props;
export type SvelteToastEvents = typeof __propDef.events;
export type SvelteToastSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options?: import("./stores").SvelteToastOptions | undefined;
        target?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
