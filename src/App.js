import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Body from './Components/Body';

function App() {
  return (
    <ContainerMain className="app">
      <h2>Gott'em</h2>
      <Header />
      <ContainerSection>
        <Navbar />
        <Body />
      </ContainerSection>
      <Footer />

    </ContainerMain>
  );
}

export default App;

const ContainerMain = styled.div`
  background-color: green;
  color: white;
`;

const ContainerSection = styled.div`
  display: flex;
  
`;