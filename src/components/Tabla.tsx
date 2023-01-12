import {
  Stack,
  Text,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import React from "react";

import product from "../product/mock";

function Tabla() {
  const atributos = product.product.attributes;
  console.log(atributos);

  return (
    <Stack>
      <Text fontSize={24} w={"full"} marginTop={"20px !important"}>
        Características principales
      </Text>
      <TableContainer
        borderRadius="5px"
        border="1px solid #ededed"
        w={716}
        marginTop={"30px !important"}
      >
        <Table>
          <Tbody>
            <Tr>
              <Td
                fontWeight={"bold"}
                width={194}
                bgColor={"#EBEBEB"}
                height={54}
              >
                Marca
              </Td>
              <Td>Disney</Td>
            </Tr>
            <Tr>
              <Td
                fontWeight={"bold"}
                width={194}
                bgColor={"#F5F5F5"}
                height={54}
              >
                Línea
              </Td>
              <Td>Disney Peluches</Td>
            </Tr>
            <Tr>
              <Td
                fontWeight={"bold"}
                width={194}
                bgColor={"#EBEBEB"}
                height={54}
              >
                Modelo
              </Td>
              <Td>AHT-0006</Td>
            </Tr>
            <Tr>
              <Td
                fontWeight={"bold"}
                width={194}
                bgColor={"#F5F5F5"}
                height={54}
              >
                Es kit
              </Td>
              <Td>No</Td>
            </Tr>
            <Tr>
              <Td
                fontWeight={"bold"}
                width={194}
                bgColor={"#EBEBEB"}
                height={54}
              >
                Forma del peluche
              </Td>
              <Td>Extraterrestre</Td>
            </Tr>
            <Tr>
              <Td
                fontWeight={"bold"}
                width={194}
                bgColor={"#F5F5F5"}
                height={54}
              >
                Personaje
              </Td>
              <Td>Stich</Td>
            </Tr>
            <Tr>
              <Td
                fontWeight={"bold"}
                width={194}
                bgColor={"#EBEBEB"}
                height={54}
              >
                Tamaño
              </Td>
              <Td>Gigante</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <VStack paddingTop={8} alignItems={"start"} paddingBottom={4}>
        <Text fontSize={20}>Otras Características</Text>
      </VStack>
      <HStack spacing={40}>
        {/* Columna IZQUIERDA */}
        <VStack spacing={3}>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[7].name} x {atributos[14].name}:
            </Text>
            <Text fontSize={14}>
              {" "}
              {atributos[7].value_name} x {atributos[14].value_name}
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[0].name}:
            </Text>
            <Text fontSize={14}> {atributos[0].value_name}</Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[1].name}:
            </Text>
            <Text fontSize={14}> {atributos[1].value_name}</Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[2].name}:
            </Text>
            <Text fontSize={14}> {atributos[2].value_name}</Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[3].name}:
            </Text>
            <Text fontSize={14}> {atributos[3].value_name}</Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[4].name}:
            </Text>
            <Text fontSize={14}> {atributos[4].value_name}</Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[5].name}:
            </Text>
            <Text fontSize={14}> {atributos[5].value_name}</Text>
          </Flex>
        </VStack>
        {/* Columna DERECHA */}
        <VStack spacing={3}>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[6].name}:
            </Text>
            <Text fontSize={14}> {atributos[6].value_name}</Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[8].name}:
            </Text>
            <Text fontSize={14}> {atributos[8].value_name}</Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[9].name}:
            </Text>
            <Text fontSize={14}> {atributos[9].value_name}</Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[10].name}:
            </Text>
            <Text fontSize={14}> {atributos[10].value_name}</Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[11].name}:
            </Text>
            <Text fontSize={14}> {atributos[11].value_name}</Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[12].name}:
            </Text>
            <Text fontSize={14}> {atributos[12].value_name}</Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            width={"100%"}
            whiteSpace={"break-spaces"}
          >
            <Text fontSize={14} fontWeight={"bold"}>
              {atributos[13].name}:
            </Text>
            <Text fontSize={14}> {atributos[13].value_name}</Text>
          </Flex>
        </VStack>
      </HStack>
    </Stack>
  );
}

export default Tabla;
