import React from "react";
import SummarizeIcon from "@mui/icons-material/Summarize";

function Header() {
  const headerText = "Keeper";
  return (
    <header>
      <h1>
        <SummarizeIcon />
        {headerText}
      </h1>
    </header>
  );
}

export default Header;
