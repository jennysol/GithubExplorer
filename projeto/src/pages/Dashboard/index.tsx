import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../asserts/img/logo.svg';

import{ Title, Form, Repositories } from   './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62623621?s=460&u=73119ca677ec564b7bdbf16acd27492acc010f2b&v=4"
            alt="Jennifer Soliver"
          />
          <div>
            <strong>jennysol/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native form!</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62623621?s=460&u=73119ca677ec564b7bdbf16acd27492acc010f2b&v=4"
            alt="Jennifer Soliver"
          />
          <div>
            <strong>jennysol/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native form!</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62623621?s=460&u=73119ca677ec564b7bdbf16acd27492acc010f2b&v=4"
            alt="Jennifer Soliver"
          />
          <div>
            <strong>jennysol/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native form!</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62623621?s=460&u=73119ca677ec564b7bdbf16acd27492acc010f2b&v=4"
            alt="Jennifer Soliver"
          />
          <div>
            <strong>jennysol/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native form!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
