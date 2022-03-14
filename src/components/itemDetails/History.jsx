import React from "react";
import { historyData } from "../../data/historyData";

const History = () => {
  return (
    <>
      {historyData.map((item, index) => (
        <div className="p_list">
          <div className="p_list_pp">
            <a href="author.html">
              <img className="lazy" src={item.author} alt="" />
              <i className="fa fa-check"></i>
            </a>
          </div>
          <div className="p_list_info">
            Bid {!index && "accepted"} <b>{item.eth} ETH</b>
            <span>
              by <b>{item.name}</b> at {item.date}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default History;
