import { useEffect, useState } from 'react';
import { getRepos } from './queries/repos';
import { Repo } from './queries/repos/types';
import './styles/global.css';

export function App() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getRepos('victorbadaro');

      setRepos(data);
    })();
  }, []);

  return (
    <>
      <h1>Repos</h1>
      {repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
    </>
  );
}