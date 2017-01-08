import { Action } from 'redux';
import { TDispatch } from './types';
/***********************************************
              PARENT
***********************************************/
export interface IParentSubState {
    text: string;
}
export interface IParentState {
    root: IParentSubState;
    childs: IChildSubState;
    childIds: Array<string>;
}
export interface IChildSubState {
    [id: string]: IChildState;
}
export declare function doParentAction(dispatch: TDispatch): Action;
/***********************************************
              CHILD
***********************************************/
export interface IChildState {
    text: string;
}
/***********************************************
              COUNTER
***********************************************/
export declare type COUNTER = 'COUNTER';
export declare const COUNTER: COUNTER;
export interface ICounterAction extends Action {
    type: COUNTER;
}
export interface ICounterState {
    count: number;
}
/***********************************************
              APP
***********************************************/
declare module './types' {
    interface IRootState {
        parent?: IParentState;
        counter?: ICounterState;
    }
}
export declare function init(): void;
