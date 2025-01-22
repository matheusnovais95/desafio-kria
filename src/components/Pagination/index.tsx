import Link from "next/link";
import React, { useState } from "react";

type Repository = {
  id: number;
  name: string;
  total_count: number;
};

type PaginationProps = {
  repositories: Repository[];
  itemsPerPage: number;
};

export const Pagination = ({ repositories, itemsPerPage }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(repositories.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = repositories.slice(startIndex, endIndex);

  return (
    <div className="w-full h-full flex flex-col items-center gap-4 py-4">
      <ul className="w-full h-full px-4 flex flex-col gap-4 overflow-auto max-h-[400px] md:max-h-[500px] ">
        {currentItems.map((repo) => (
          <Link href={`/pesquisar-repositorios/${repo.name}`} key={repo.id}>
            <li className="w-full md:h-[70px] p-3 rounded-md bg-tertiary ">
              <span className="capitalize text-lg text-white">{repo.name}</span>
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-8">
        <button
          disabled={currentPage === 1}
          onClick={handlePrevious}
          className="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-tertiary hover:border-tertiary focus:text-white focus:bg-tertiary focus:border-tertiary active:border-tertiary active:text-white active:bg-tertiary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <p className="text-slate-600">
          Page <strong className="text-slate-800">{currentPage}</strong>{" "}
          of&nbsp;
          <strong className="text-slate-800">{totalPages}</strong>
        </p>

        <button
          disabled={currentPage === totalPages}
          onClick={handleNext}
          className="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-tertiary hover:border-tertiary focus:text-white focus:bg-tertiary focus:border-tertiary active:border-tertiary active:text-white active:bg-tertiary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
