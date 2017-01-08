/**
* Base64-encode a string.
*
* @param {string} input A string to encode.
* @param {boolean=} opt_webSafe If true, we should use the
*     alternative alphabet.
* @return {string} The base64 encoded string.
*/
export declare function bytes2Base64(input: string | number[] | Uint8Array, opt_webSafe?: boolean): string;
/**
* Base64-decode a string.
*
* @param {string} input to decode.
* @param {boolean=} opt_webSafe True if we should use the
*     alternative alphabet.
* @return {string} string representing the decoded value.
*/
export declare function base642rawString(input: string, opt_webSafe?: boolean): string;
export declare function base642Bytes(input: string, opt_webSafe?: boolean): number[];
