import React from "react";

const FormatNumber = ({ number, unit }) => {
  return (
    <span>
      {new Intl.NumberFormat().format(number)} {unit}
    </span>
  );
};

export default FormatNumber;
