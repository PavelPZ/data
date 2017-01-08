import React from 'react';
import * as dom from './dom';
import { lazyModuleHandler } from 'rw-lib/lazy-loader';
export declare class compileHandler extends lazyModuleHandler {
    ctx: dom.ICourseContext;
    constructor(id: string, ctx?: dom.ICourseContext);
    exercise: JSX.Element;
    onLoaded(): void;
}
export declare function preCompile(getJSXTree: () => IElement | JSX.Element): IElement;
export declare function afterCompile(comp: IElement, ctx?: dom.ICourseContext): JSX.Element;
export interface IElement {
    type: string;
    props: any;
    childs: Array<IElement>;
}
export declare const registerTag: (name: string, type: typeof React.Component) => void;
export declare const fingTag: (name: string) => string | typeof React.Component;
