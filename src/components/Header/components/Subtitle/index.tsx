import React from "react";

type SubtitleProps = {
  children: React.ReactNode;
  color?: string;
};

export const Subtitle = ({ children, color }: SubtitleProps) => {
  return <span className={`text-${color} text-base`} >{children}</span>;
};
