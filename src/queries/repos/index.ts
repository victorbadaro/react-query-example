import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { api } from "../../services/api";
import { Repo } from "./types";

async function getRepos(context: QueryFunctionContext) {
  const [, user] = context.queryKey;
  const { data } = await api.get<Repo[]>(`/users/${user}/repos`);

  return data;
}

export function useFetchRepos(user: string) {
  return useQuery(['repos', user], getRepos);
}
