import React from "react";


export const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; 
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

export const Circle = ({ colour, percentage }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; 
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} 
      strokeWidth={"8px"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};

export const Text = ({ percentage, text }) => {
  return (
    <>
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"1.5em"}
        fill="white"
      >
        {percentage.toFixed(0)}%
      </text>
      <text
        x="50%"
        y="94%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"1.5em"}
        fill="white"
      >
        {text}
      </text>
    </>
  );
};

const CircleProgress = ({ percentage, colour, text }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="transparent" />
        <Circle colour={colour} percentage={pct} />
      </g>
      <Text percentage={pct} text={text} />
    </svg>
  );
};

export default CircleProgress;