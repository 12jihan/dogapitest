import axios from "axios";
import { useState } from "react";

const useApi = (url: string) => {
  const [data, setData] = useState(null);
  const [_error, _setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log("useapi url:", url);
      console.log("useapi data:", response.data);
      // localStorage.setItem("cached_data", JSON.stringify(response.data)); 
      } catch (error) {
      _setError("error");
      console.error(_error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, refetch: fetchData, error: _error };
};

export default useApi;
