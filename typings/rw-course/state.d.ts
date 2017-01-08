import * as dom from './dom';
declare module 'rw-redux/types' {
    interface IRootState {
        courses?: {
            [contextId: string]: ICourseState;
        };
    }
}
export interface ICourseNode {
    title: string;
    url: string;
    childs: Array<ICourseNode>;
    passive: boolean;
    maxScore: number;
    id: number;
    childIds: Array<number>;
    parent: number;
}
export interface ICourseState {
    pageUrl: string;
    pageEnter: number;
    pageResult: dom.pageResult;
    otherResults: {
        [url: string]: any;
    };
    crsUrl: string;
    crsTree: Array<ICourseNode>;
    crsDir: {
        [url: string]: number;
    };
    crsResult: Array<dom.pageResult>;
}
declare module 'config' {
    interface IConfig {
        course: {};
    }
}
