export const getParams = (search, param) => {
  const params = new URLSearchParams(search);
  return JSON.parse(params.get(param)) || {};
};

export const getUserName = search => {
  const params = new URLSearchParams(search);
  const userName = params.get('userName');
  return userName;
};
