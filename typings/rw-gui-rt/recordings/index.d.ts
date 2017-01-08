import React from 'react';
export interface IHomeState {
    size: number;
}
export declare class RecHome extends React.Component<{}, IHomeState> {
    constructor(p: any, c: any);
    modifyState(st?: IHomeState): void;
    render(): JSX.Element;
}
