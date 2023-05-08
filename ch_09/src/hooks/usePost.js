// 사용자 정의 훅으로 만들어 재사용할 수 있게 하였다.
async function usePost(url, body, headers = {}) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };

  const res = await fetch(url, options);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw Error(data);
  }
}

export default usePost;
