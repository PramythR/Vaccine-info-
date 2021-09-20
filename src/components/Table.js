import React from "react";
import "./Table.css";
const Table = ({ name, timelines }) => {
  console.log(`daaataaa`, Object.values(timelines));
  const datas = Object.values(timelines);
  return (
    <div className="table">
      {datas.map((data) => (
        <p>{data}</p>
      ))}
    </div>
  );
};

export default Table;
