import React, { useState } from "react";

import Moment from "moment";

import {
  Container,
  ContainerCard,
  ContainerInput,
  CardFront,
  Top,
  Middle,
  Bot,
  Chip,
  Numeration,
  Valid,
  InputN,
  InputDate,
  ContainerBot,
  InputCVV,
  CardBack,
  Sensor,
  CodCVV,
} from "./styles";

import Visa from "../cards/visa";
import Master from "../cards/master";
import Hiper from "../cards/hiper";

function CreditCard() {
  const [number, setNumber] = useState("···· ···· ···· ····");
  const [name, setName] = useState("Nome Sobrenome");
  const [date, setDate] = useState("0000000");
  const [flag, setFlag] = useState();
  const [cvv, setCvv] = useState();
  const [ effect, setEffect ] = useState();
  const [background, setBackground] = useState("others");

  function handleNumber(e) {
    e.preventDefault();

    setNumber(e.target.value);

    const validation = number.substring(0, 4);

    switch (validation) {
      case "4051":
        return visa();
      case "5522":
        return master();
      case "9503":
        return hiper();
      default:
        return null;
    }
  }

  function visa() {
    setFlag(<Visa />);
    setBackground("visa");
  }

  function master() {
    setFlag(<Master />);
    setBackground("master");
  }

  function hiper() {
    setFlag(<Hiper />);
    setBackground("hiper");
  }

  // function activeRotate(){
  //   setEffect(!effect);
  //   if(effect == true){
  //     alert('VERDADE!!!')
  //   }
  //   else{
  //     alert('FALSE')
  //   }
  // }

  return (
    <>
      <Container className="ContainerCard">
        <ContainerCard >
          <CardBack className={`backgroundB ${background}`}>
            <Sensor></Sensor>

            <CodCVV>
              <b>{cvv}</b>
            </CodCVV>
          </CardBack>
          <CardFront className={`backgroundF ${background}`}>
            <Top>
              <Chip />
              {flag}
            </Top>

            <Middle>
              <Numeration>
                <p>{number}</p>
              </Numeration>
            </Middle>

            <Bot>
              <p>{name}</p>
              <Valid>
                <a>Data de Validade</a>
                <p>{Moment(date).format("MM YYYY")}</p>
              </Valid>
            </Bot>
          </CardFront>
        </ContainerCard>

        <ContainerInput>
          <InputN
            placeholder="Número do cartão"
            onChange={handleNumber}
            maxLength={16}
            pattern="[0-9]*"
            type="text"
          />
          <InputN
            placeholder="Nome e Sobrenome"
            onChange={(e) => setName(e.target.value)}
            maxLength={16}
          />

          <ContainerBot>
            <InputDate type="month" onChange={(e) => setDate(e.target.value)} />
            <InputCVV
              placeholder="CVC"
              maxLength={3}
              onChange={(e) => setCvv(e.target.value)}
              // onClick={activeRotate}
            />
          </ContainerBot>
        </ContainerInput>
      </Container>
    </>
  );
}

export default CreditCard;
