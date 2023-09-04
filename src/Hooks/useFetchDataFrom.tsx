import axios from "axios";
import { useEffect, useState } from "react";

function useFetchDataFrom(url: string): null | [] {
  const [data, setData] = useState<null | []>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [url]);

  return data;
}

export default useFetchDataFrom;
