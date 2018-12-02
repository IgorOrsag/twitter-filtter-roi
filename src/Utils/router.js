export const getParams = (search, param) => {
  const params = new URLSearchParams(search);
  return JSON.parse(params.get(param));
};
