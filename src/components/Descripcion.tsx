import { VStack, Text, HStack, Tag, Input, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

//Components
import Preguntas from "../components/Preguntas";
import Opiniones from "../components/Opiniones";

import { PreguntasYRespuestas } from "../product/types";

const PreguntasYRespuestas: PreguntasYRespuestas[] = [
  {
    id: 1,
    pregunta: "Hola como estas? Tienen stock?",
    respuesta: "Hola! Sí, tenemos :)",
    date: "06/07/2022",
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
];

function Descripcion() {
  const [newQ, setnewQ] = useState<{}>({
    pregunta: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    const newID = PreguntasYRespuestas.length + 1;
    const f = new Date();
    setnewQ({
      id: newID,
      [e.target.name]: e.target.value,
      respuesta:
        "Hola! Muchas gracias por comunicarte. A la brevedad te responderemos :)",
      date: `${f.getDate()}/${String(f.getMonth() + 1).padStart(
        2,
        "0"
      )}/${f.getFullYear()}`,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    PreguntasYRespuestas.push(newQ);
    PreguntasYRespuestas.reverse();
    setnewQ({ pregunta: "" });
  };

  useEffect(() => {}, [PreguntasYRespuestas]);

  return (
    <VStack alignItems={"start"} w={{ base: 440, md: 768 }}>
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
              name="pregunta"
              onChange={handleChange}
            />
            <Button
              w={"153px"}
              h={"48px"}
              marginLeft={"20px !important"}
              colorScheme="messenger"
              fontSize={16}
              onClick={handleSubmit}
            >
              Preguntar
            </Button>
          </HStack>
          <Text fontSize={13} color={"blackAlpha.700"} pt={3}>
            Tiempo aproximado de respuesta: 37 minutos
          </Text>
        </VStack>
      </VStack>
      <Preguntas PreguntasYRespuestas={PreguntasYRespuestas} />
      <Opiniones />
    </VStack>
  );
}

export default Descripcion;
