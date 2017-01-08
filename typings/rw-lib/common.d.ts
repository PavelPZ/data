export declare class Exception extends Error {
}
export interface IRouteNodeCommon {
    handlerId: string;
    child?: IRouteNodeCommon;
    childs?: {
        [hookId: string]: IRouteNodeCommon;
    };
    [props: string]: any;
}
export declare let loginHook: {
    doLogin: (rootHook: IRouteNodeCommon) => void;
    isLogged: () => boolean;
};
export declare let blockGuiHook: {
    block: (isStart: boolean) => void;
};
export declare let exceptionHook: {
    onError: (err: any) => void;
};
export declare let basicUrl: {
    url: string;
};
/**
* Calculate a 32 bit FNV-1a hash
* Found here: https://gist.github.com/vaiorabbit/5657561
* Ref.: http://isthe.com/chongo/tech/comp/fnv/
*
* @param {string} str the input value
* @param {boolean} [asString=false] set to true to return the hash value as
*     8-digit hex string instead of an integer
* @param {integer} [seed] optionally pass the hash of the previous chunk
* @returns {integer | string}
*/
export declare function hash(str: string, asString?: boolean, seed?: number): string | number;
export declare class ENotImplemented extends Exception {
    constructor(msg?: string);
}
export declare type TCallback = () => void;
export declare function noop(): void;
export declare let counter: {
    value: number;
};
export declare function mergeArray<T>(arrays: Array<Array<T>>): Array<T>;
