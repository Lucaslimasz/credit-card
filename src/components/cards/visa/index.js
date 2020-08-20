import React from 'react';

import styled from 'styled-components';

import Visa from "../../../images/visa.png";

const Container = styled.div`
  >img{
    width: 70px;
  }
`;

function visa() {
  return (
    <Container>
      <img src={Visa} alt="Visa"/>
    </Container>
  );
}

export default visa;