import { IRouteData, IRouteDir } from './url-parser';
export declare function route<T extends IRouteData>(data: T, childs?: {
    [hookId: string]: IRouteData;
}): IRouteData;
export declare function routeTreeToDir(root: IRouteData, parentPath?: string): IRouteDir;
export declare function parentPath(state: IRouteDir, path: string): string;
export interface IParentRouteResult {
    parent: IRouteData;
    hookId: string;
}
export declare function routeModify<T extends IRouteData>(state: IRouteDir, path: string, modify: (res: T) => void): T;
export declare function routeDirToTree<T extends IRouteData>(state: IRouteDir, path: string): T;
