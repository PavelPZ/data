import React from 'react';
import { ComponentDecorator } from 'react-redux';
import { IMapDispatchToProps, IRootState } from './types';
declare module './types' {
    interface IRootState {
        blockGui?: IBlockGuiState;
    }
}
export interface IBlockGuiState {
    counter: number;
}
export declare const blockGuiReducerFnc: (state: IRootState, action: any) => IRootState;
export declare const blockGuiCreator: ComponentDecorator<IBlockGuiMapStateToProps & IMapDispatchToProps, never>;
export declare type TBlockGuiPresent = React.StatelessComponent<IBlockGuiMapStateToProps & IMapDispatchToProps>;
export declare const blockGuiProxy: {
    value?: () => JSX.Element;
};
export interface IBlockGuiMapStateToProps {
    counterProp: number;
}
