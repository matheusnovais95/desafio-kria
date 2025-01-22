"use client";
import { Header } from "@/components/Header";
import Link from "next/link";
import React from "react";

export default function RepositoriosFavoritos() {
  const favoritesRepositories = JSON.parse(
    localStorage.getItem("repositoriosFavoritos") || "[]"
  );

  return (
    <div className="w-screen h-full relative">
      <Header
        title="Repositórios Favoritos"
        subtitle="Abaixo você encontrará uma lista com todos os repositórios do github que você favoritou aqui na plataforma."
      />

      <div className="w-full h-fit flex justify-start items-center p-3">
        <ul className="w-full p-4">
          {favoritesRepositories?.map((repository: DetalhesRepositoriosSchema) => (
            <Link
              href={`/pesquisar-repositorios/${repository.name}`}
              key={repository.id}
            >
              <li className="w-full px-2 py-4 cursor-pointer bg-primary rounded-md ">
                <p className="text-secundary font-bold">{repository.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
