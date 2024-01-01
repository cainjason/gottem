import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <ContainerNavbar>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>About page</a></li>
        <li><a href='/'>Contact Page</a></li>
      </ul>
    </ContainerNavbar>
  )
}

export default Navbar;
 
const ContainerNavbar = styled.div`
    background-color: greenyellow;
    color: gray;
    width: 240px;
    height: 75vh;
`; 
