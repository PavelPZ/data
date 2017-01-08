/**
 * Turns a string into an array of bytes; a "byte" being a JS number in the
 * range 0-255.
 * @param {string} str String value to arrify.
 * @return {Array.<number>} Array of numbers corresponding to the
 *     UCS character codes of each character in str.
 */
export declare function stringToByteArray(str: string): number[];
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param {Array} array Array of numbers representing characters.
 * @return {string} Stringification of the array.
 */
export declare function byteArrayToString(arr: number[] | Uint8Array): string;
/**
 * Converts a JS string to a UTF-8 "byte" array.
 * @param {string} str 16-bit unicode string.
 * @return {Array.<number>} UTF-8 byte array.
 */
export declare function stringToUtf8ByteArray(str: string): number[];
/**
 * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.
 * @param {Array.<number>} bytes UTF-8 byte array.
 * @return {string} 16-bit Unicode string.
 */
export declare function utf8ByteArrayToString(bytes: number[]): string;
export declare function bytesToHex(input: string | Array<number>): string;
export declare function hexToBytes(hexString: string): Array<number>;
