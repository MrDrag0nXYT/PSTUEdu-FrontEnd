import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import "../css/card.css";

export default function Card({ title, href }) {
  return (
    <div className="card" style={{ justifyContent: "start" }}>
      <md-outlined-button href={href} style={{width: "100%"}}>
        <div className="card_div">
          <InsertDriveFileIcon
            color="inherit"
            className="image"
            // width={24}
            // height={24}
          />
          <h4 className="title">{title}</h4>
        </div>
      </md-outlined-button>
    </div>
  );
}
