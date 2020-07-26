import React from "react";
// Material ui
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import { SortByAlpha, ArrowUpward, ArrowDownward } from "@material-ui/icons";

const SortButtons = ({ value, setValue }) => {
  const handleChange = (e, newValue) => {
    if (newValue !== "sort") setValue(newValue);
  };

  return (
    <ToggleButtonGroup value={value} exclusive onChange={handleChange}>
      <ToggleButton value="sort" disableTouchRipple disableRipple disableFocusRipple>
        <SortByAlpha />
      </ToggleButton>

      <ToggleButton value="asc">
        <ArrowUpward />
      </ToggleButton>

      <ToggleButton value="desc">
        <ArrowDownward />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SortButtons;
