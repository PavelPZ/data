import { IRouteData, IRouteDir } from './url-parser';
declare module 'rw-redux/types' {
    interface IRootState {
        router?: IRouteDir;
    }
}
export interface IDiffStateResult {
    changedRoots: Array<string>;
    changedAll: Array<string>;
    eq: Array<string>;
    newAll: Array<string>;
}
export declare function diff(oldRoot: IRouteDir, dest: IRouteDir, subRootPath: string): IDiffStateResult;
export interface IRouteDataEx extends IRouteData {
    $deep?: number;
}
