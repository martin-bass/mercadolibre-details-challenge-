import { VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";

//Styles
import "../styles/Preguntas.css";

//React Icons
import { BsArrowReturnRight } from "react-icons/bs";

import { PreguntasYRespuestas } from "../product/types";

const PreguntasYRespuestas: PreguntasYRespuestas[] = [
  {
    id: 1,
    pregunta: "Hola como estas? Tienen stock?",
    respuesta: "Hola! Sí, tenemos :)",
    date: "06/07/2022",
    denunciar: false,
  },
  {
    id: 2,
    pregunta: "Hacen envios hasta Catamarca?",
    respuesta: "Sí, lo envíamos por Expreso",
    date: "08/09/2022",
  },
  {
    id: 3,
    pregunta: "Lo tienen en un tamaño mas chico?",
    respuesta: "Hola! En este momento sólo nos quedó el grande",
    date: "20/08/2022",
  },
  {
    id: 4,
    pregunta: "Se puede retirar en algun domicilio?",
    respuesta: "Siiii, ofertar para ver donde recogerlo",
    date: "01/09/2022",
  },
  {
    id: 5,
    pregunta: "Tienen en otro color?",
    respuesta: "Hola! Sí, lo tenemos en rosa tambien!",
    date: "10/10/2022",
  },
  {
    id: 6,
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
            key={PyR.id}
            alignItems={"start"}
            marginBottom={"20px !important"}
          >
            <HStack className="pregunta">
              <Text fontSize={16}>{PyR.pregunta}</Text>
              <Text
                color={"blue.400"}
                fontSize={14}
                className="denunciarP"
                cursor={"pointer"}
                _hover={{ color: "#2B6CB0" }}
              >
                Denunciar
              </Text>
            </HStack>

            <HStack
              color={"blackAlpha.600"}
              paddingLeft={5}
              className="respuesta"
            >
              <BsArrowReturnRight />
              <Text fontSize={16}>{PyR.respuesta}</Text>
              <Text fontSize={16}>{PyR.date}</Text>
              <Text
                color={"blue.400"}
                fontSize={14}
                className="denunciarR"
                cursor={"pointer"}
                _hover={{ color: "#2B6CB0" }}
              >
                Denunciar
              </Text>
            </HStack>
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
}

export default Preguntas;
