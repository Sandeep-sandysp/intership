import React from "react";

export function Component1({ text }) {
  return (
    <div className="list">
      <span style={{ backgroundColor: "green" }}>{text}</span>
    </div>
  );
}
