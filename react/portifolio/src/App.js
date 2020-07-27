import React  from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom'



function App() {

  return (
    <div className="portifolio">
      <Layout >
        <Header className="header" title="Meu Portifolio" scroll >
          <Navigation className="nav">
              <Link to="/resumo">Resumo</Link>
              <Link to="/sobre">Sobre</Link>
              <Link to="/projetos">Projetos</Link>
              <Link to="/contatos">Contato</Link>
          </Navigation>
         

        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/resumo">Resumo</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contatos">Contato</Link>
          </Navigation>
        </Drawer>
        <Content >
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>

    </div>
  );

}
export default App;
