import * as React from "react";

const CursorIcon = ({ fill = "#ffffff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    className="cursor-icon"
   
  >
    <path fill={fill} d="M8.854 19.854a.5.5 0 0 1-.831-.205l-5-16a.5.5 0 0 1 .626-.626l16 5a.5.5 0 0 1 .205.83L16.207 12.5l4.647 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0L12.5 16.207zM4.262 4.262l4.469 14.3 3.415-3.416a.5.5 0 0 1 .708 0l4.646 4.647 2.293-2.293-4.647-4.646a.5.5 0 0 1 0-.708l3.416-3.415z"></path>
  </svg>
);

export default CursorIcon;
