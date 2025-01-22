import React from "react";

type TitleProps = {
  children: React.ReactNode;
  color?: string;
};

export const Title = ({ children, color }: TitleProps) => {
  return <h1 className={`text-${color} text-4xl`}>{children}</h1>;
};
