const API_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const API_KEY = "97893011-3a69-47e1-b786-3d9460e77b73";

const TABLE_HEADERS = {
  srno: "Sr. No.",
  name: "Name",
  price: "Price",
  percent_change_30d: "30d %",
  market_cap: "Market Cap",
  circulating_supply: "Circulating Supply",
};

export { API_KEY, API_URL, TABLE_HEADERS };
