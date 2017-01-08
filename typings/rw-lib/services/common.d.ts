export interface serviceOUT {
    error: string;
}
export declare function callRequest<TIN, TOUT extends serviceOUT>(methodPath: string, inPar: TIN, isGet?: boolean): Promise<TOUT>;
