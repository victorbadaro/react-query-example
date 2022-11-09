import { api } from "../../services/api";
import { Repo } from "./types";

async function getRepos(user: string) {
  const { data } = await api.get<Repo[]>(`/users/${user}/repos`);

  return data;
}

export { getRepos };
