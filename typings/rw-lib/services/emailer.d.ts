declare module 'config' {
    interface IConfig {
        serviceEmailerUrl: string;
    }
}
export interface ISendEmailIN {
    from: string;
    to: string;
    cc?: string;
    bcc?: string;
    isBodyHtml?: boolean;
    body: string | JSX.Element;
    subject: string;
}
export declare function sendEMail(email: ISendEmailIN): Promise<never>;
export {};
