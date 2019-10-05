import { TOKEN_COOKIE, getCookie } from './cookies';

const isLoggedIn = () => getCookie(TOKEN_COOKIE) && 1;

export default isLoggedIn;
