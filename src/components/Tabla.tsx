import {
  Stack,
  Text,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  VStack,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";

import product from "../product/mock";

function Tabla() {
  const atributos = product.product.attributes;

  return (
    <Stack w={{ base: 440, md: 768}}>
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
      <Grid templateColumns="repeat(2, 1fr)">
        {atributos.map((atr: any) => (
          <GridItem whiteSpace={"break-spaces"} key={atr.id}>
            <Flex
              justifyContent={"start"}
              width={"100%"}
              whiteSpace={"break-spaces"}
              py={1}
            >
              <Text fontSize={14} fontWeight={"bold"}>
                {atr.name}:
              </Text>
              <Text fontSize={14}> {atr.value_name}</Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}

export default Tabla;
