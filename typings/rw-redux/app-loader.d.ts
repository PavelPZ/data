import { Action, Store } from 'redux';
import { TReducer, IRootState } from './types';
export declare let isRecording: {
    value: boolean;
};
export declare const recordedActions: {
    startStatus: {};
    actions: Array<Action>;
};
export declare function appInit(reducer: TReducer, element: Element, getComponent: () => JSX.Element, initState?: IRootState): Store<any>;
export declare let store: Store<any>;
export declare function changeAppInitState(initState: any): Store<any>;
