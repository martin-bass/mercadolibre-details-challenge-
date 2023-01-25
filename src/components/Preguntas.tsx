import { VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";

import { PreguntasYRespuestas } from "../product/types";

//Styles
import "../styles/Preguntas.css";

//React Icons
import { BsArrowReturnRight } from "react-icons/bs";

interface Props {
  PreguntasYRespuestas: PreguntasYRespuestas[];
}

function Preguntas({ PreguntasYRespuestas }: Props) {
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
