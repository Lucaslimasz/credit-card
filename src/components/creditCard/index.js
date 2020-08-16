import React from "react";

import {
  Container,
  ContainerCard,
  ContainerInput,
  Card,
  Top,
  Middle,
  Bot,
  Chip,
  Numeration,
  Valid,
  InputN,
  InputDate,
  ContainerBot,
  InputCVC,
} from "./styles";
import { render } from "@testing-library/react";

class CreditCard extends React.Component {
  // const [number, setNumber] = useState("···· ···· ···· ····");
  // const [name, setName] = useState("NOME SOBRENOME");
  // const [date, setDate] = useState("--/--");

  // function handleNumber(e){
  //   e.preventDefault();

  //   setNumber({
  //     number: e.target.value
  //   });
  // }

  constructor(props) {
    super(props);
    this.state = {
      number: "···· ···· ···· ····",
      name: "NOME SOBRENOME",
      date: "--/--",
    };
  }

  handleNumber = (e) => {
    e.preventDefault();

    this.setState({
      number: e.target.value,
    });
  };

  render() {
    const { number, name, date } = this.state;

    return (
      <>
        <Container>
          <ContainerCard>
            <Card>
              <Top>
                <Chip />

                <h1>VISA</h1>
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
                  <p>{date}</p>
                </Valid>
              </Bot>
            </Card>
          </ContainerCard>

          <ContainerInput>
            <InputN
              placeholder="Número do cartão"
              onChange={this.handleNumber}
              maxLength={16}
            />
            <InputN placeholder="Nome e Sobrenome" maxLength={16} />

            <ContainerBot>
              <InputDate placeholder="Data" />
              <InputCVC placeholder="CVC" />
            </ContainerBot>
          </ContainerInput>
        </Container>
      </>
    );
  }
}

export default CreditCard;
