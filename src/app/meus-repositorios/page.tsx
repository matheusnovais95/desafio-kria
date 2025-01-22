"use client";

import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { Pagination } from "@/components/Pagination";
import {  fetchUserRepositories } from "@/services/api";
import React from "react";

export default function MeusRepositorios() {
  const [myRepositories, setMyRepositories] = React.useState([]);
  React.useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const myRepositories = await fetchUserRepositories("matheusnovais95");
        setMyRepositories(myRepositories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div className="h-full relative">
      <Header
        title="Meus Repositórios"
        subtitle="Abaixo você encontrará uma lista com todos os meus repositórios."
      />

      <div className="w-full flex justify-center items-center">
        {myRepositories.length === 0 ? (
          <Loading />
        ) : (
          <Pagination repositories={myRepositories} itemsPerPage={10} />
        )}
      </div>
    </div>
  );
}
