import Link from "next/link";
import React from "react";

export const Menu = () => {
  const menuItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Meus Reps", path: "/meus-repositorios" },
    { id: 3, label: "Search", path: "/pesquisar-repositorios" },
    { id: 4, label: "Favoritos", path: "/repositorios-favoritos" },
  ];
  return (
    <nav className="w-full p-2 bg-primary ">
      <ul className="flex justify-center items-center gap-4 md:gap-8 py-4 md:py-2">
        {menuItems.map((item) => (
          <Link href={item.path} key={item.id}>
            <li className="text-white uppercase font-bold text-[12px] md:text-base">
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
