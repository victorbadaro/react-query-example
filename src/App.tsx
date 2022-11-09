import { useEffect, useState } from 'react';
import { api } from './services/api';
import './styles/global.css';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function App() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Repo[]>('/users/victorbadaro/repos');

      setRepos(data);
    })();
  }, []);

  return (
    <>
      <h1>Repos</h1>
      {repos.length > 0 ? (
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank">{repo.name}</a> - <span>{repo.description}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}