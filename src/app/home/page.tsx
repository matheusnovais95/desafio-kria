"use client";
import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { fetchAllRepositories } from "@/services/api";
import React from "react";

export const Home = () => {
  const [repositories, setRepositories] = React.useState([]);
  React.useEffect(() => {
    const fetchRepositories = async () => {
      const repositories = await fetchAllRepositories();
      setRepositories(repositories);
    };

    fetchRepositories();
  }, []);

  return (
    <div className="h-full relative">
      <Header
        title="Repositórios Github"
        subtitle="Abaixo você encontrará uma lista com todos os repositórios públicos do github."
      />

      <div className="w-full h-fit flex justify-center items-center">
        <Pagination repositories={repositories} itemsPerPage={10} />
      </div>
    </div>
  );
};
