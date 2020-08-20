import React from 'react';
import styled from 'styled-components';

import Master from "../../../images/mastercard.svg.png";


const Container = styled.div`
  >img{
    width: 50px;
  }
`;

function master() {
  return (
    <Container>
      <img src={Master} alt="Hiper"/>
    </Container>
  )
}


export default master;