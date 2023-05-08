import { useState, useEffect } from "react";

// fetch 부분을 분리해서 사용자 정의 훅으로 만들어 재사용할 수 있게 하였다.
function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
}

export default useFetch;
