export declare function read(id: string, def?: string): string;
export declare function write(name: string, value: string, persist?: boolean): void;
export declare function remove(id: string): void;
export declare function readObj<T>(id: string): T;
export declare function writeObj(id: string, obj: Object, persist?: boolean): void;
/**
 * Sets a cookie.  The max_age can be -1 to set a session cookie. To remove and
 * expire cookies, use remove() instead.
 *
 * Neither the {@code name} nor the {@code value} are encoded in any way. It is
 * up to the callers of {@code get} and {@code set} (as well as all the other
 * methods) to handle any possible encoding and decoding.
 *
 * @throws {!Error} If the {@code name} fails #goog.net.cookies.isValidName.
 * @throws {!Error} If the {@code value} fails #goog.net.cookies.isValidValue.
 *
 * @param {string} name  The cookie name.
 * @param {string} value  The cookie value.
 * @param {number=} opt_maxAge  The max age in seconds (from now). Use -1 to
 *     set a session cookie. If not provided, the default is -1
 *     (i.e. set a session cookie).
 * @param {?string=} opt_path  The path of the cookie. If not present then this
 *     uses the full request path.
 * @param {?string=} opt_domain  The domain of the cookie, or null to not
 *     specify a domain attribute (browser will use the full request host name).
 *     If not provided, the default is null (i.e. let browser use full request
 *     host name).
 * @param {boolean=} opt_secure Whether the cookie should only be sent over
 *     a secure channel.
 */
export declare function setCookie(name: string, value: string, opt_maxAge?: number, opt_path?: string, opt_domain?: string, opt_secure?: string): void;
/**
 * Returns the value for the first cookie with the given name.
 * @param {string} name  The name of the cookie to get.
 * @param {string=} opt_default  If not found this is returned instead.
 * @return {string|undefined}  The value of the cookie. If no cookie is set this
 *     returns opt_default or undefined if opt_default is not provided.
 */
export declare function getCookie(name: string, opt_default?: string): string;
/**
 * Removes and expires a cookie.
 * @param {string} name  The cookie name.
 * @param {string=} opt_path  The path of the cookie, or null to expire a cookie
 *     set at the full request path. If not provided, the default is '/'
 *     (i.e. path=/).
 * @param {string=} opt_domain  The domain of the cookie, or null to expire a
 *     cookie set at the full request host name. If not provided, the default is
 *     null (i.e. cookie at full request host name).
 * @return {boolean} Whether the cookie existed before it was removed.
 */
export declare function removeCookie(name: string, opt_path?: string, opt_domain?: string): boolean;
