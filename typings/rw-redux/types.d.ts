import { MiddlewareAPI, Action, Dispatch } from 'redux';
export declare type TMiddlewareAPI = MiddlewareAPI<IRootState>;
export declare type Middleware<T extends Action> = (middlAPI: TMiddlewareAPI) => (next: TDispatch) => (act: T) => void;
export declare type TMiddleware = Middleware<Action>;
export declare type TDispatch = Dispatch<any>;
export declare type Reducer<S, A extends Action> = (state: S, action: A) => S;
export declare type TReducer = Reducer<any, Action>;
export interface IMapDispatchToProps {
    dispatch: TDispatch;
}
export interface IRootState {
}
