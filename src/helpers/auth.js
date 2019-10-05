import { TOKEN_COOKIE, getCookie } from './cookies';

export const isLoggedIn = () => getCookie(TOKEN_COOKIE) && 1;

export const getUserToken = () => getCookie(TOKEN_COOKIE);

