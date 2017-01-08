export declare function encryptBytes(data: Array<number>): Array<number>;
export declare function decryptBytes(data: Array<number>): Array<number>;
export declare function decryptBase64(base64Str: string): string;
export declare function encryptBase64(str: string): string;
export declare function decryptObj<T>(base64: string): T;
export declare function encryptObj(obj: Object): string;
export declare function decryptHex(hex: string): string;
export declare function encryptHex(str: string): string;
