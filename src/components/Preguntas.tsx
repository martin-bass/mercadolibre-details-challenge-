import { VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";

//React Icons
import { BsArrowReturnRight } from "react-icons/bs";

import { PreguntasYRespuestas } from "../product/types";

const PreguntasYRespuestas: PreguntasYRespuestas[] = [
  {
    pregunta: "Hola como estas? Tienen stock?",
    respuesta: "Hola! Sí, tenemos :)",
    date: "06/07/2022",
  },
  {
    pregunta: "Hacen envios hasta Catamarca?",
    respuesta: "Sí, lo envíamos por Expreso",
    date: "08/09/2022",
  },
  {
    pregunta: "Lo tienen en un tamaño mas chico?",
    respuesta: "Hola! En este momento sólo nos quedó el grande",
    date: "20/08/2022",
  },
  {
    pregunta: "Se puede retirar en algun domicilio?",
    respuesta: "Siiii, ofertar para ver donde recogerlo",
    date: "01/09/2022",
  },
  {
    pregunta: "Tienen en otro color?",
    respuesta: "Hola! Sí, lo tenemos en rosa tambien!",
    date: "10/10/2022",
  },
  {
    pregunta: "Hola como estan? Hay algun descuento si compro dos?",
    respuesta: "Hola, podemos hablarlo ;)",
    date: "09/12/2022",
  },
];

function Preguntas() {
  return (
    <VStack marginTop={"40px !important"} alignItems={"start"}>
      <Text fontSize={18} fontWeight={"bold"}>
        Últimas realizadas
      </Text>
      <VStack alignItems={"start"} marginTop={"25px !important"}>
        {PreguntasYRespuestas.map((PyR) => (
          <VStack
            key={PyR.date}
            alignItems={"start"}
            marginBottom={"20px !important"}
          >
            <Text fontSize={16}>{PyR.pregunta}</Text>
            <HStack color={"blackAlpha.600"} paddingLeft={5}>
              <BsArrowReturnRight />
              <Text fontSize={16}>
                {PyR.respuesta}
              </Text>
              <Text fontSize={16} >
                {PyR.date}
              </Text>
            </HStack>
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
}

export default Preguntas;
