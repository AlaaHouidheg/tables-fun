import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBooked } from "../JS/tableSlice";

const Tables = () => {
  const tables = useSelector((state) => state.table.tables);
  console.log(tables);
  const dispatch = useDispatch();
  return (
    <div className="tables">
      <div className="card">
        <span>2 Persons tables</span>
        {tables
          .filter((el) => el.type == "A2")
          .map((el) => (
            <div className="duo-table">
              <div
                className={`booked ${el.booked ? "red" : "green"}`}
                onClick={() => dispatch(changeBooked(el.id))}
              ></div>
            </div>
          ))}
      </div>
      <div className="card">
        <span>4 Persons tables</span>

        {tables
          .filter((el) => el.type == "A4")
          .map((el) => (
            <div className="quad-table">
              <div
                className={`booked ${el.booked ? "red" : "green"}`}
                onClick={() => dispatch(changeBooked(el.id))}
              ></div>
            </div>
          ))}
      </div>
      <div className="card">
        <span>6 Persons tables</span>

        {tables
          .filter((el) => el.type == "A6")
          .map((el) => (
            <div className="siso-table">
              {" "}
              <div
                className={`booked ${el.booked ? "red" : "green"}`}
                onClick={() => dispatch(changeBooked(el.id))}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tables;
