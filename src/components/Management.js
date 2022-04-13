import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearTables } from "../JS/tableSlice";

const Management = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="management">
      <button onClick={() => navigate("/add")}>Add table</button>
      <div className="recept"></div>
      <button onClick={() => dispatch(clearTables())}>Clear table</button>
    </div>
  );
};

export default Management;
