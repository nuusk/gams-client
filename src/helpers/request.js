const isJson = (data) => {
  const contentType = data.headers.get('content-type');
  return contentType && contentType.indexOf('application/json') !== -1;
};

const handleResponse = (response) => {
  if (isJson(response)) {
    const asJson = response.json();
    if (response.ok) {
      return asJson;
    }
    return asJson.then((body) => {
      throw new Error(body.message || 'Action failed');
    });
  }

  return undefined;
};

export const buildRequest = (endpoint, { method, body, headers }) => new Request(
  `${process.env.REACT_APP_SERVER_ADDRESS}${endpoint}`,
  {
    headers: {
      'Accept': 'application/json', // eslint-disable-line quote-props
      'Content-Type': 'application/json',
      ...headers,
    },
    method,
    body: JSON.stringify(body),
  },
);

export const request = (...args) => {
  fetch(buildRequest(...args)).then(handleResponse);
};

export const jwtRequest = (...args) => {
  const headers = args.headers || [];
  headers.Authorization = `Bearer ${'HERE COMES TOKEN VALUE FROM A COOKIE'}`;
  fetch(buildRequest(...args, headers)).then(handleResponse);
};
