

import React from "react";

const AnsTable = ({ ans, systemValue }) => {

  return (
    <div className="ans-table">
      {ans?.map((val, i) => {
        return (
          <div className="ans-row" key={i}>
            <div className="system-label">{systemValue[i]}</div>
            <div className="value">{val}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AnsTable;