import React from 'react';
import styled from 'styled-components';

function Body() {
  return (
    <ContainerBody>
      <h2>Body</h2>
    </ContainerBody>
  )
}

export default Body;

const ContainerBody = styled.div`
    background-color: white;
    color: black;
    width: 100vw;

    > h2 {
      margin: none;
    }
`;
