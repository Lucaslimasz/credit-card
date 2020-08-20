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

  .backgroundF {
    transition: background 1.5s;

    &.others {
      background: black;
    }
    &.visa {
      background: #901dbe;
    }
    &.master {
      background: #ff5100;
    }
    &.hiper {
      background: blue;
    }
  }
  .backgroundB {
    transition: background 1.5s;

    &.others {
      background: #cdcdcd;
    }
    &.visa {
      background: #64028c;
    }
    &.master {
      background: #cc4100;
    }
    &.hiper {
      background: #0000c9;
    }
  }

  transform: rotateY(0deg);
    transition: transform 1.5s;
    transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
    transition: transform 1.5s;
    transform-style: preserve-3d;
  }
  position: relative;
  > div {
    position: absolute;
  }
`;

export const CardFront = styled.div`
  width: 340px;
  height: 180px;
  padding: 25px;
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

  > img {
    width: 50px;
    height: auto;
  }
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

export const CardBack = styled.div`
  width: 390px;
  height: 230px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transform: rotateY(180deg);
`;
export const Sensor = styled.div`
  width: 100%;
  height: 50px;
  background: black;
  margin-top: 35px;
`;
export const CodCVV = styled.div`
  width: 235px;
  height: 30px;
  background: #fff;
  position: relative;
  top: 10px;
  left: -65px;
  color: black;
  > b {
    position: relative;
    top: 8px;
    left: 80%;
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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
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

export const InputCVV = styled.input`
  width: 40%;

  height: 20px;
  padding: 10px;
  margin: 5px;
  font-size: 17px;

  transform: rotateY(0deg);
  transition: transform 1.5s;
  transform-style: preserve-3d;

  &:focus ~ .ContainerCard {
    transform: rotateY(10deg);
    transition: transform 1.5s;
    transform-style: preserve-3d;
  }
`;


