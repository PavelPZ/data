import React from 'react';
import { IRouteDir } from './url-parser';
export interface IRouteHookMapStateToProps {
    root: IRouteDir;
    path: string;
}
export interface IRouteHookOwnProps {
    parentPath: string;
    hookId: string;
}
export declare const RouteHook: React.ComponentClass<IRouteHookOwnProps>;
