import axios from "axios";
import { useEffect, useState } from "react";

const useAsync = (api, dependencies = [], options = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [data, setData] = useState([]);

  async function fetchData() {
    setIsDone(false);

    try {
      setIsLoading(true);
      const res = await axios(api, options);
      setData(res.data);
    } catch (err) {
      setIsError(true);
      console.error(`Failed Request data: ${err.message}`);
    } finally {
      setIsLoading(false);
      setIsDone(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, dependencies);

  return [data, setData, isError, isLoading, isDone];
};

export default useAsync;
