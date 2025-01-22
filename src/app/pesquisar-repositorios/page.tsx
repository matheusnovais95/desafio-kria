"use client";
import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { fetchGeneralRepositories } from "@/services/api";
import React from "react";

export default function PesquisarRepositorios() {
  const [repoToSearch, setRepoToSearch] = React.useState("");
  const [repositories, setRepositories] = React.useState([]);

  const [msg, setMsg] = React.useState("");

  React.useEffect(() => {
    if (repoToSearch === "") {
      setRepositories([]);
    }
  }, [repoToSearch]);

  const fetchSearchRepositories = async (repoToSearch: string) => {
    console.log("🚀 ~ fetchSearchRepositories ~ repoToSearch:", repoToSearch);

    if (repoToSearch === "") return;
    const fetchRepositories = await fetchGeneralRepositories(repoToSearch);
    if (fetchRepositories.length === 0) {
      setMsg("Nenhum repositório encontrado");
    }
    setRepositories(fetchRepositories);
  };

  const handleSearchRepo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoToSearch(e.target.value);
  };
  return (
    <div className="h-screen relative">
      <Header
        title="Pesquisar Repositórios"
        subtitle="Aqui você pode pesquisar por repositórios do Github."
      />

      <div className="w-full flex flex-col justify-center items-center py-3 grow-1">
        <div className="w-full flex flex-col  md:flex-row items-center gap-2 md:p-4 md:justify-center">
          <input
            type="text"
            placeholder="Digite o nome do repositório ou nome do usuário"
            className="w-full max-w-[300px] md:max-w-[400px] p-2 border-2 border-primary rounded-md outline-none"
            onChange={(e) => handleSearchRepo(e)}
          />
          <button
            className="bg-primary text-white rounded-md outline-none px-4 py-3 text-sm font-bold "
            onClick={() => fetchSearchRepositories(repoToSearch)}
          >
            Pesquisar
          </button>
        </div>
        {msg && (
          <div className="w-full h-full px-4 flex  gap-4 itens-center justify-center">
            <span className="text-tertiary text-xl w-fit">
              Nenhum repositorio encontrado
            </span>
          </div>
        )}
        {repositories.length > 0 && (
          <Pagination repositories={repositories} itemsPerPage={10} />
        )}
      </div>
    </div>
  );
}
