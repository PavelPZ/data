import { Action } from 'redux';
import { IRootState } from './types';
declare module './types' {
    interface IRootState {
        gui?: IMatchMediaState;
    }
}
export interface IMatchMediaState {
    xxs: boolean;
    xs: boolean;
    smTablet: boolean;
    sm: boolean;
    md: boolean;
    lgTablet: boolean;
    lg: boolean;
    xl: boolean;
    xxl: boolean;
    xxxl: boolean;
}
export declare const guiMATCHMEDIA = "gui.MATCHMEDIA";
export interface IMatchMediaAction extends Action {
    type: 'gui.MATCHMEDIA';
    width: number;
}
export declare const matchMediaReducerFnc: (state: IRootState, action: any) => IRootState;
