/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { BsCloudLightningFill } from "react-icons/bs";
import { WiDayLightWind } from "react-icons/wi";

const ThemeBtn = () => {
  const [mode, setMode] = useState(false);
  const handleTheme = () => {
    setMode((prevMode) => !prevMode);
  };
  return (
    <div onClick={handleTheme}>
      {mode ?
        <BsCloudLightningFill style={{ fontSize: "25px", cursor: "pointer" }} /> :
        <WiDayLightWind style={{ fontSize: "25px", cursor: "pointer" }} />

        }
    </div>
  );
};

export default ThemeBtn;
