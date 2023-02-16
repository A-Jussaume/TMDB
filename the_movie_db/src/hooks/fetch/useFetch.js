import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  useEffect(() => {

    const fetchData = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);

        const json = await response.json();
        setData(json);
      }
      catch (err) {
        setError(err);
      }finally{
        setLoading(false);  
      }
    }
    fetchData(url)
  }, [url]);
  return { data, loading, error };
}
