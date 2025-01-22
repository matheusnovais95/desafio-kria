async function fetchGeneralRepositories(query: string) {
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Erro ao buscar repositórios:", error);
    throw error;
  }
}

async function fetchContributors(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar colaboradores do repositório:", error);
    throw error;
  }
}

async function fetchUserRepositories(username: string) {
  const url = `https://api.github.com/users/${encodeURIComponent(
    username
  )}/repos`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar repositórios do usuário:", error);
    throw error;
  }
}

async function fetchAllRepositories() {
  const url = "https://api.github.com/repositories";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar repositórios do usuário:", error);
    throw error;
  }
}

export {
  fetchGeneralRepositories,
  fetchUserRepositories,
  fetchAllRepositories,
  fetchContributors,
};
