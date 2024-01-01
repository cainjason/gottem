import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <ContainerHeader>
      <h2> Header</h2>
    </ContainerHeader>
  )
}

export default Header;

const ContainerHeader = styled.div`
    background-color: lightgreen;
    
    .h2 {
      margin: none;
    }
`;
