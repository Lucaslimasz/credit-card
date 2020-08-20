import React from 'react';
import styled from 'styled-components';

import Hiper from '../../../images/hipercard.svg';

const Container = styled.div`
  >img{
    width: 70px;
  }
`;

function hiper() {
  return (
    <Container>
      <img src={Hiper} alt="Hipercard" />
    </Container>
  );
}

export default hiper;