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
    width: 240px;
    height: 75vh;
    text-decoration: underline none;
    color: white;
    font-size: large;
    font-weight: bold;

`; 
