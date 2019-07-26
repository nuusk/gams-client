import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const TOKEN_COOKIE = 'token';
export const USERNAME_COOKIE = 'username';
export const EMAIL_COOKIE = 'email';

const daysToSeconds = n => n * (24 * 60 * 60);

export const setCookie = (key, value) => {
  const cookieOptions = {
    path: '/',
    maxAge: daysToSeconds(14),
  };

  cookies.set(key, value, cookieOptions);
};

export const getCookie = key => cookies.get(key);

export const removeCookie = key => cookies.remove(key);
