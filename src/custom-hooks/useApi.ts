import axios from "axios";
import { useState } from "react";

const useApi = (urlName: string | false, url: string) => {
  const [data, setData] = useState(null);
  const [_error, _setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      if(urlName != false && localStorage.getItem("cached_" + urlName) == null) {
        const response = await axios.get(url);
        setData(response.data);
        console.log("useapi url:", url);
        console.log("useapi data:", response.data);
        localStorage.setItem("cached_" + urlName, JSON.stringify(response.data));
      } else {
        setData(JSON.parse(localStorage.getItem("cached_" + urlName)!))
      }
    } catch (error: any) {
      _setError("error");
      console.error("err: ", _error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, refetch: fetchData, error: _error };
};

export default useApi;
