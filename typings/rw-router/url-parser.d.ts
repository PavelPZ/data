declare module 'config' {
    interface IConfig {
        route: {
            isHashRouter: boolean;
            initRoute: () => IRouteDir;
        };
    }
}
export interface IRouteData {
    handlerId: string;
    path?: string;
    $asyncData?: any;
    $childs?: {
        [hookId: string]: IRouteData;
    };
}
export interface IRouteDir {
    [path: string]: IRouteData;
}
export declare const route2string: (route: IRouteDir) => string;
export declare const string2route: (url: string, normalizeStringProps: (props: IRouteData) => void) => IRouteDir;
export declare const test: () => void;
export {};
