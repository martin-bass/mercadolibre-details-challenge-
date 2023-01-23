import { HStack, Icon, Progress, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

//Components
import Comentarios from "../components/Comentarios";

//React Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Review } from "../product/types";

let review: Review[] = [
  {
    estrellas: "5",
    value: 100,
    cantidadPersonas: 4,
  },
  {
    estrellas: "4",
    value: 80,
    cantidadPersonas: 3,
  },
  {
    estrellas: "3",
    value: 0,
    cantidadPersonas: 0,
  },
  {
    estrellas: "2",
    value: 30,
    cantidadPersonas: 3,
  },
  {
    estrellas: "1",
    value: 20,
    cantidadPersonas: 2,
  },
];

function Opiniones() {
  return (
    <Stack>
      <Text fontSize={24}>Opiniones del producto</Text>
      <HStack spacing={10} alignItems={"start"}>
        <VStack>
          <HStack>
            <Text fontSize={48} color={"#3483fa"} fontWeight={"bold"}>
              4.0
            </Text>
            <VStack alignItems={"start"} marginLeft={"30px !important"}>
              <HStack spacing={0.5}>
                <AiFillStar color="3483fa" size={20} />
                <AiFillStar color="3483fa" size={20} />
                <AiFillStar color="3483fa" size={20} />
                <AiFillStar color="3483fa" size={20} />
                <AiOutlineStar color={"#BFBFBF"} size={20} />
              </HStack>
              <Text
                fontSize={14}
                lineHeight={"shorter"}
                color={"blackAlpha.600"}
                marginTop={"0px !important"}
              >
                39 calificaciones
              </Text>
            </VStack>
          </HStack>
          <Stack w={"full"} spacing={0}>
            {review?.map((r) => (
              <HStack key={r.estrellas} h={"18px"}>
                <Progress
                  value={r.value}
                  colorScheme={"blackAlpha"}
                  size="xs"
                  width={"179px"}
                  borderRadius="2px"
                  marginTop="5px"
                />
                <HStack>
                  <Text
                    color="blackAlpha.500"
                    paddingLeft={"12px"}
                    fontSize={16}
                  >
                    {r.estrellas}
                  </Text>
                  <Icon as={AiFillStar} color="#BFBFBF" boxSize={"12px"} />
                </HStack>
              </HStack>
            ))}
          </Stack>
        </VStack>
        <Stack>
          <Comentarios />
        </Stack>
      </HStack>
    </Stack>
  );
}

export default Opiniones;
