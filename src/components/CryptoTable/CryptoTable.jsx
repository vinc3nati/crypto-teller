import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import { TABLE_HEADERS } from "../../utils/constants";

export const CryptoTable = ({ cryptoData }) => {
  return (
    <table className="crypto-table">
      <thead>
        <tr className="crypto-row">
          {Object.keys(TABLE_HEADERS).map((key) => (
            <th
              key={key}
              scope="col"
              title={key}
              className="crypto-header-cell"
            >
              {TABLE_HEADERS[key]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cryptoData?.map((item, idx) => (
          <tr key={item.id} className="crypto-row">
            <td className="crypto-table-cell">{idx + 1}</td>
            <td className="crypto-table-cell">{item.name}</td>
            <td className="crypto-table-cell">
              ${Number(item.quote.USD.price).toFixed(2)}
            </td>
            <td
              className={`crypto-table-cell ${
                item.quote.USD.percent_change_30d < 0
                  ? "text-error"
                  : "text-success"
              }`}
            >
              {String(item.quote.USD.percent_change_30d)[0] === "-" ? (
                <div className="crypto-box">
                  <MdArrowDropDown className="crypto-icons" />{" "}
                  <span>
                    {String(item.quote.USD.percent_change_30d).slice(1)} %
                  </span>
                </div>
              ) : (
                <div className="crypto-box">
                  <MdArrowDropUp className="crypto-icons" />
                  <span>{item.quote.USD.percent_change_30d} %</span>
                </div>
              )}
            </td>
            <td className="crypto-table-cell">
              ${Math.round(item.quote.USD.market_cap)}
            </td>
            <td className="crypto-table-cell">
              {Math.round(item.circulating_supply)} &nbsp; {item.symbol}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
