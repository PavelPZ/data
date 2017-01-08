import React from 'react';
import { Action } from 'redux';
import { IRootState, TMiddlewareAPI } from 'rw-redux';
import { IRouteData, IRouteDir } from './url-parser';
export declare function init(): void;
export declare function navigate(tree: IRouteData, ev?: React.SyntheticEvent<any>, subPath?: string): void;
export declare function navigateDir(dir: IRouteDir, ev?: React.SyntheticEvent<any>, subPath?: string): void;
export declare const gotoHome: () => void;
export declare const homeUrl: () => string;
export declare const routeReducerFnc: (state: IRootState, action: any) => IRootState;
export declare const pushState: (route: IRouteDir) => void;
export declare const loginREDIRECT = "router.LOGIN_REDIRECT";
export interface ILoginRedirectAction extends Action {
    type: 'router.LOGIN_REDIRECT';
    returnUrl: string;
}
export declare abstract class RouteHandler<T> {
    id: string;
    constructor(id: string);
    abstract createComponent(route: IRouteData, state: IRouteDir): JSX.Element;
    prepare(route: IRouteData): Promise<any>;
    unPrepare(route: IRouteData): Promise<never>;
    normalizeStringProps(props: IRouteData): void;
    loginNeeded(props: IRouteData, api: TMiddlewareAPI): boolean;
    static register(handler: TRouteHandler): void;
    static find(id: string): TRouteHandler;
    static handlers: {
        [id: string]: TRouteHandler;
    };
    static normalizeStringProps(props: IRouteData): void;
}
export declare type TRouteHandler = RouteHandler<any>;
