import React from 'react';
import { ComponentDecorator } from 'react-redux';
import { Action } from 'redux';
import { IMatchMediaState, IRootState } from 'rw-redux';
import { IRouteData } from 'rw-router';
declare module 'config' {
    interface IConfig {
        login: {
            loginRoute: () => IRouteData;
            availableLogins: Array<string>;
            guiBreakpoint: keyof IMatchMediaState;
        };
    }
}
declare module 'rw-redux/types' {
    interface IRootState {
        login?: ILoginState;
    }
}
export interface ILoginState {
    isLogged?: boolean;
    email?: string;
    firstName?: string;
    lastName?: string;
    providerId?: string;
    returnUrl?: string;
}
export declare const loginReducerFnc: (state: IRootState, action: any) => IRootState;
export interface ILoginMapStateToProps {
    email: string;
    firstName: string;
    lastName: string;
    guiLarge: boolean;
    availableLogins: Array<string>;
}
export interface ILoginMapDispatchToProps {
    onSelectProvider: (providerId: string, ev?: React.SyntheticEvent<any>) => any;
}
export declare const loginSELECT_PROVIDER = "login.SELECT_PROVIDER";
export interface ILoginSelectProviderAction extends Action {
    type: 'login.SELECT_PROVIDER';
    providerId: string;
}
export declare const loginLOGOFF = "login.LOGOFF";
export interface ILoginLogoffAction extends Action {
    type: 'login.LOGOFF';
}
export interface ILoginProps {
    availableLogins: Array<string>;
}
export declare const loginCreator: ComponentDecorator<ILoginMapStateToProps & ILoginMapDispatchToProps, ILoginProps>;
export declare type TLoginPresent = React.StatelessComponent<ILoginMapStateToProps & ILoginMapDispatchToProps>;
export declare const loginProxy: {
    value?: (props?: ILoginProps) => JSX.Element;
};
export interface ILogindRoute extends IRouteData {
    handlerId: 'login.LOGIN';
}
export declare const createLoginRoute: () => ILogindRoute;
