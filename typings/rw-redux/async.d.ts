import { Action } from 'redux';
import { TMiddlewareAPI, Middleware } from './types';
export declare let recordingHook: {
    pushActions: (act: Action) => void;
};
export declare type TAsyncComplete = (onResolve?: () => void) => void;
export interface IAsyncProcPar {
    type: string;
}
export declare type TAsyncProc<TPar extends IAsyncProcPar> = (par: TPar, completed: TAsyncComplete, api?: TMiddlewareAPI) => void;
export declare type ASYNC_START = 'ASYNC_START';
export declare const ASYNC_START: ASYNC_START;
export declare type ASYNC_END = 'ASYNC_END';
export declare const ASYNC_END: ASYNC_END;
export declare type ASYNC_ERROR = 'ASYNC_ERROR';
export declare const ASYNC_ERROR: ASYNC_ERROR;
export interface IAsyncResultAction<T> extends Action {
    asyncResult: T;
}
export declare type TAsyncResultAction = IAsyncResultAction<any>;
export interface IAsyncStartAction extends Action {
    type: ASYNC_START;
    asyncProcName: string;
    asyncProcPar: IAsyncProcPar;
    $playbackDone?: () => void;
}
export declare function doAsyncAction<TAsync extends IAsyncProcPar>(procPar: TAsync): IAsyncStartAction;
export interface IAsyncEndAction extends Action {
    type: ASYNC_END;
}
export declare const doAsyncEndAction: () => IAsyncEndAction;
export interface IAsyncErrorAction extends Action {
    type: ASYNC_ERROR;
    msg: any;
}
export declare const doAsyncErrorAction: (msg: any) => IAsyncErrorAction;
export declare const asyncMiddleware: Middleware<IAsyncStartAction>;
export declare function addAsyncProc<TPar extends IAsyncProcPar>(name: string, proc: TAsyncProc<TPar>): void;
export declare const noRecordFnc: (code: () => void) => void;
