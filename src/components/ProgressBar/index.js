import React, { useState } from "react";
import { Progress, ProgressDone } from "./styles/ProgressBar";

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 200);

  return (
    <>
      <Progress>
        <ProgressDone style={style}></ProgressDone>
      </Progress>
    </>
  );
};

export default ProgressBar;
