import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { chnageColor } from "../features/theme";

const ChangeColor = () => {
  const [color, setColor] = useState("red");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(chnageColor(color));
        }}
      >
        CHANGE COLOR
      </button>
    </div>
  );
};

export default ChangeColor;
