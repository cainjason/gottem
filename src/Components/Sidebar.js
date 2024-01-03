import React from "react";

import styled from "styled-components";

function Sidebar () {
  return (
    <ContainerSidebar>
      <ul>
        <li>
          <a href="/">Find</a></li>
        <li>
          <a href="/found">Found</a></li>
      </ul>
    </ContainerSidebar>
  );
};
export default Sidebar;

const ContainerSidebar = styled.div`

  color: white;
  text-align: left;
  background: lightgreen;
  width: 120px;
  ul {
    color: red;
    display: flex;
    flex-direction: column;
    list-style: none;
    li {
      padding: 15px 15px;
      border: 2px solid purple;
      margin-right: 5px;
    }
  }
`;
