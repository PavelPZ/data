declare namespace config {
    interface IConfig {
        basicUrl: string;
        rootPath: string;
    }
    const config: IConfig;
}
declare module "config" {
    export = config;
}
