import { useFetchRepos } from './queries/repos';
import './styles/global.css';

export function App() {
  const { data: repos } = useFetchRepos();

  return (
    <>
      <h1>Repos</h1>
      {repos?.map(repo => <li key={repo.id}>{repo.name}</li>)}
    </>
  );
}