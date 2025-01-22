import React from "react";
import { Menu } from "../Menu";
import { Subtitle } from "./components/Subtitle";
import { Title } from "./components/Title";

type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className=" flex flex-col justify-between items-center border-b-2 border-primary">
      <Menu />
      <div className="w-full min-h-[200px] flex justify-center items-start flex-col gap-4 p-4">
        <Title color="primary">{title}</Title>
        <Subtitle color="primary">{subtitle}</Subtitle>
      </div>
    </header>
  );
};
