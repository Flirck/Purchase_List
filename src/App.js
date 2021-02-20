import React from 'react';
import GlobalStyle from './styles/global';
import { FaMarker } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles/styles';

import TechList from './components/TechList';


function App() {
  return (
    <>
    <Container>
    <h1>
        <FaMarker />
        Lista de Compras
    </h1>
      <TechList />
      <GlobalStyle />
    </Container>
    </>
  );
}

export default App;