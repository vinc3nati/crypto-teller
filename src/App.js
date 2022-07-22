import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { CryptoTable } from "./components/CryptoTable/CryptoTable";
import { Loader } from "./components/Loader/Loader";
import { API_KEY, API_URL } from "./utils/constants";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    const QUERY = `?start=1&limit=5000&convert=USD`;
    try {
      setLoader(true);
      const response = await axios.get(`${API_URL}${QUERY}`, {
        headers: {
          "X-CMC_PRO_API_KEY": `${API_KEY}`,
          "Access-Control-Allow-Origin": "*",
        },
      });
      if (response?.data) {
        setCryptoData(response.data.data.slice(0, 30));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loader && <Loader />}
      <CryptoTable cryptoData={cryptoData} />
    </>
  );
}

export default App;
