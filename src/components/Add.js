import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTable } from "../JS/tableSlice";

const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [type, settype] = useState("");

  const handleAdd = () => {
    if (!type == "") {
      dispatch(addTable({ type: type, booked: false, id: Math.random() }));
    } else {
      alert("3aabi");
    }
  };
  return (
    <div className="add">
      <img
        onClick={() => navigate("/")}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Arrow_icon.svg/1200px-Arrow_icon.svg.png"
        alt=""
      />
      <h1>Add new table</h1>
      <select name="" id="" onChange={(e) => settype(e.target.value)}>
        <option value="">choose</option>

        <option value="A2">A2</option>
        <option value="A4">A4</option>
        <option value="A6">A6</option>
      </select>

      <button onClick={handleAdd}>Add table</button>
    </div>
  );
};

export default Add;
