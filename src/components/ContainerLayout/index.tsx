import React from "react";

type ContainerLayoutProps = {
  children: React.ReactNode;
};

export const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden m-auto">
      {children}
    </div>
  );
};
