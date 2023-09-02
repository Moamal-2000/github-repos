import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchDataFrom(url: string) {
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
