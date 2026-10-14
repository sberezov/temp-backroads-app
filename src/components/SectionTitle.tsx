import React from "react";
import "../index.css";

interface SectionTitleProps {
  firstHalf: string;
  lastHalf: string;
}
function SectionTitle(props: SectionTitleProps) {
  const { firstHalf, lastHalf } = props;
  return (
    <div className="section-title">
      <h2>
        {firstHalf} <span>{lastHalf}</span>
      </h2>
    </div>
  );
}

export default SectionTitle;
