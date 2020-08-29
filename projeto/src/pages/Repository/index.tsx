import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import logoImg from '../../asserts/img/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img 
            src='https://avatars0.githubusercontent.com/u/62623621?s=460&u=73119ca677ec564b7bdbf16acd27492acc010f2b&v=4'
            alt="Jennifer Soliver" />
            <div>
              <strong>Jennysol/Musiflix</strong>
              <p>Descrição repositório</p>
            </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>15</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link 
            // key={repository.full_name}  
            to={"sdbfh"}>
            <div>
              <strong>repository.full_name</strong>
              <p>repository.description</p>
            </div>
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
