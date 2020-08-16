import styled from "styled-components";

import { FcSimCardChip } from "react-icons/fc";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1100px;

  margin: auto;
`;

export const ContainerCard = styled.div`
  width: 100%;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 340px;
  height: 180px;
  padding: 25px;
  background: blue;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Top = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
`;

export const Middle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bot = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  > p {
    font-size: 20px;
  }
`;

export const Chip = styled(FcSimCardChip)`
  width: 45px;
  height: 45px;
`;

export const Numeration = styled.div`
  display: flex;

  > p {
    font-size: 27px;
    letter-spacing: 2.5px;
  }
`;

export const Valid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    font-size: 11px;
  }
`;

export const ContainerInput = styled.div`
  width: 400px;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const InputN = styled.input`
  width: 100%;
  height: 20px;
  padding: 10px;
  margin: 5px;
  font-size: 17px;
`;

export const ContainerBot = styled.div`
  width: 400px;
  display: flex;
  padding: 0 20px;
`;

export const InputDate = styled.input`
  width: 60%;
  
  height: 20px;
  padding: 10px;
  margin: 5px;
  font-size: 17px;
`;

export const InputCVC = styled.input`
  width: 40%;
  
  height: 20px;
  padding: 10px;
  margin: 5px;
  font-size: 17px;
`;