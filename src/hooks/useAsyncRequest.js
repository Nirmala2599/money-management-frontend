import { useState, useEffect } from "react";

const useAsyncRequest = (amount) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://money-management-backend.onrender.com/incomes`
        );
        const json = await response.json();
        console.log("json" +json);
        setData(json, setLoading(false));
      } catch (err) {
        console.warn("Something went wrong fetching the API...", err);
        setLoading(false);
      }
    };

    if (amount) {
      fetchData(amount);
    }
  }, [amount]);

  return [data, loading];
};

export default useAsyncRequest;
