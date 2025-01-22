declare interface DetalhesRepositoriosSchema {
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
}
