import {
  VStack,
  Text,
  Box,
  HStack,
  Tag,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";

function Descripcion() {
  return (
    <VStack alignItems={"start"}>
      <Text fontSize={24} py={4}>
        Descripción
      </Text>
      <VStack
        paddingBottom="30px"
        alignItems={"start"}
        spacing={3}
        color="#666"
        fontSize="20px"
      >
        <Text>PELUCHE IMPORTADO PERSONAJE STITCH</Text>
        <Text>MEDIDA 1 METRO (100 CM )</Text>
        <Text>GIGANTE</Text>
        <Text>DISPONIBLE: STITCH (CELESTE) O ANGEL (ROSA)</Text>
        <Text>SE PUEDE RETIRAR POR:</Text>

        <Text>• AV. CORRIENTES Y URUGUAY</Text>
        <Text>• VILLA PUEYRREDON</Text>

        <Text>
          Realizamos envíos por motomensajeria y tambien por correo argentino a
          todo el país
        </Text>
        <Text>****NO SE OLVIDE DE VISITAR TODOS NUESTROS PRODUCTOS****</Text>
      </VStack>
      <VStack alignItems={"start"}>
        <Text fontSize={24} py={4}>
          Preguntas y respuestas
        </Text>
        <Text fontSize={18} fontWeight={"bold"} paddingTop={3}>
          ¿Qué querés saber?
        </Text>
        <HStack paddingTop={4}>
          <Tag
            size={"md"}
            bgColor={"#E2EEFB"}
            textColor="#3885FA"
            px={4}
            py={2}
            cursor={"pointer"}
          >
            Costo y tiempo de envío
          </Tag>
          <Tag
            size={"md"}
            bgColor={"#E2EEFB"}
            textColor="#3885FA"
            px={4}
            py={2}
            cursor={"pointer"}
          >
            Devoluciones gratis
          </Tag>
          <Tag
            size={"md"}
            bgColor={"#E2EEFB"}
            textColor="#3885FA"
            px={4}
            py={2}
            cursor={"pointer"}
          >
            Medios de pago y promociones
          </Tag>
          <Tag
            size={"md"}
            bgColor={"#E2EEFB"}
            textColor="#3885FA"
            px={4}
            py={2}
            cursor={"pointer"}
          >
            Garantía
          </Tag>
        </HStack>
        <VStack alignItems={"start"}>
          <Text
            fontSize={18}
            fontWeight={"bold"}
            paddingTop={8}
            paddingBottom={2}
          >
            Preguntale al vendedor
          </Text>
          <HStack>
            <Input
              padding={"15px 12px 13px 16px"}
              h={"48px"}
              w={"550px"}
              placeholder="Escribí tu pregunta..."
            />
            <Button
              w={"153px"}
              h={"48px"}
              marginLeft={"20px !important"}
              colorScheme="messenger"
              fontSize={16}
            >
              Preguntar
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
}

export default Descripcion;
