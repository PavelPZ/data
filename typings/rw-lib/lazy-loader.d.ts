export declare class lazyModuleHandler {
    id: string;
    constructor(id: string);
    name: string;
    module: any;
    onLoading(): void;
    onLoaded(): void;
    onUnloaded(): void;
}
export declare function load(handler: lazyModuleHandler): Promise<lazyModuleHandler>;
export declare function unload(handler: lazyModuleHandler): void;
