"use client";
import { Header } from "@/components/Header";
import { fetchContributors, fetchGeneralRepositories } from "@/services/api";
import { useParams } from "next/navigation";
import { StarEmpty, StarFill } from "@/components/Icons/icons";

import React from "react";
import { Loading } from "@/components/Loading";

type DetalhesRepositoriosProps = {
  id: number;
  name: string;
  description: string;
  language: string;
  updated_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  contributors_url: string;
};

type CollaboratorProps = {
  login: string;
  avatar_url: string;
  id: number;
};

export default function DetalhesRepositorios() {
  const [repository, setRepository] =
    React.useState<DetalhesRepositoriosProps | null>(null);
  const [collaborators, setCollaborators] = React.useState<CollaboratorProps[]>(
    []
  );

  const [starFavorite, setStarFavorite] = React.useState(false);
  const router = useParams();
  const nomeRepositorio = router["nomeRepositorio"] as string;

  React.useEffect(() => {
    const fetchRepositories = async () => {
      try {
        if (nomeRepositorio) {
          const repositories = await fetchGeneralRepositories(nomeRepositorio);
          const filteredRepository = repositories.find(
            (repo: DetalhesRepositoriosProps) => repo.name === nomeRepositorio
          );

          if (filteredRepository) {
            setRepository(filteredRepository);

            const collaboratorsResponse = await fetchContributors(
              filteredRepository.contributors_url
            );

            setCollaborators(collaboratorsResponse);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepositories();
  }, [nomeRepositorio]);

  React.useEffect(() => {
    const favoritos = localStorage.getItem("repositoriosFavoritos");
    const isRepoFavorite = favoritos
      ? JSON.parse(favoritos).filter(
          (repo: DetalhesRepositoriosProps) => repo.id === repository?.id
        ).length > 0
      : false;
    setStarFavorite(isRepoFavorite);
  }, [repository?.id]);

  const addFavorite = () => {
    if (repository) {
      const favoritos = JSON.parse(
        localStorage.getItem("repositoriosFavoritos") || "[]"
      );
      const repo = {
        id: repository.id,
        name: repository.name,
      };
      favoritos.push(repo);
      localStorage.setItem("repositoriosFavoritos", JSON.stringify(favoritos));
      setStarFavorite(true);
    }
  };

  const removeFavorite = () => {
    let favoritos = JSON.parse(
      localStorage.getItem("repositoriosFavoritos") || "[]"
    );

    favoritos = favoritos.filter(
      (repo: DetalhesRepositoriosProps) => repo.id !== repository?.id
    );

    localStorage.setItem("repositoriosFavoritos", JSON.stringify(favoritos));
    setStarFavorite(false);
  };

  return (
    <div className="h-full relative">
      <Header
        title="Detalhe do Repositório"
        subtitle="Abaixo você encontrará os detalhes do repositório escolhido e seus colaboradores."
      />

      <div className="w-full h-fit flex justify-center  items-center p-3 relative">
        {repository ? (
          <div className="p-4">
            {starFavorite ? (
              <button
                className="absolute top-3 right-5"
                onClick={() => removeFavorite()}
              >
                <StarFill />
              </button>
            ) : (
              <button
                className="absolute top-3 right-5 "
                onClick={() => addFavorite()}
              >
                <StarEmpty />
              </button>
            )}
            <div className="flex flex-col items-center  gap-6">
              <img
                src={repository.owner.avatar_url}
                alt="avatar"
                className="w-[100px] h-[100px] rounded-full"
              />
              <div className="w-full flex flex-col  gap-4  ">
                <h1 className="text-lg md:text-2xl font-bold text-tertiary">
                  {repository.name}
                </h1>
                <p className="text-sm md:text-xl text-primary">
                  <b className="text-tertiary">Descrição: </b>
                  {repository.description}
                </p>
                <p className="text-sm md:text-xl text-primary">
                  <b className="text-tertiary">Linguagem: </b>
                  {repository.language ? repository.language : "Não informada"}
                </p>
                <p className="text-sm md:text-xl text-primary">
                  <b className="text-tertiary">Última atualização: </b>
                  {repository.updated_at}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="my-4">
            <Loading />
          </div>
        )}
      </div>

      <div className="w-full h-fit flex flex-col md:justify-start justify-center items-start p-3">
        <h2 className="text-lg font-bold mb-1 px-4">Colaboradores</h2>
        <ul className="w-full rounded-md px-4 flex flex-col  justify-center items-start ">
          {collaborators.map((collaborator) => (
            <li
              key={collaborator.id}
              className="flex flex-col md:flex-row md:items-center my-4 gap-4"
            >
              <p className="text-sm md:text-xl text-primary">
                {collaborator.login}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
