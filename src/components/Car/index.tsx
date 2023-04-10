import React from "react";

import GasolineSvg from "../../assets/gasoline.svg";
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,  
  Type,
  CarImage
} from "./styles";

export function Car() {
  return (
    <Container>
      <Details>
        <Brand>Lamborghini</Brand>
        <Name>Huracan</Name>

        <About>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        // source={require("../../assets/lamborghini.png")}
        // resizeMode="contain"
      />

    </Container>
  );
}