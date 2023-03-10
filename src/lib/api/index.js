const request = async ({
  url,
  options = {
    method: 'GET',
  },
}) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`서버의 응답이 올바르지 않습니다. (${response.status}): ${error.message}`);
  }

  return response.json();
};

export default request;
