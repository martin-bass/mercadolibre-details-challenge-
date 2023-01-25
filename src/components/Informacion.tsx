import {
  HStack,
  Icon,
  Stack,
  StackDivider,
  Text,
  VStack,
  Link,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

import Producto from "../product/mock";
import { Product } from "../product/types";

//React Icons
import { BsHeart, BsHeartFill, BsTruck } from "react-icons/bs";
import { AiFillStar, AiOutlineTrophy } from "react-icons/ai";
import { TfiBackLeft } from "react-icons/tfi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

function Informacion() {
  const { sold_quantity, title, price }: Product = Producto.product;
  const [fillHeart, setFillHeart] = useState(false);

  return (
    <Stack
      border="1px solid"
      borderColor="blackAlpha.300"
      borderRadius="10px"
      padding="1rem"
      w={{ base: 440, md: 768, lg: 352 }}
    >
      <HStack
        justifyContent={"start"}
        color={"blackAlpha.600"}
        fontSize={14}
        divider={
          <StackDivider
            borderColor="blackAlpha.300"
            height={3}
            alignSelf="center"
          />
        }
      >
        <Text>Nuevo</Text>
        <Text>{sold_quantity} vendidos</Text>
      </HStack>
      <HStack>
        <Text fontSize={21} fontWeight="bold">
          {title}
        </Text>
        <Icon
          as={fillHeart ? BsHeartFill : BsHeart}
          boxSize={27}
          color="#3483fa"
          onClick={() => setFillHeart(!fillHeart)}
          cursor="pointer"
        />
      </HStack>
      <HStack spacing={0.5}>
        <AiFillStar color="3483fa" />
        <AiFillStar color="3483fa" />
        <AiFillStar color="3483fa" />
        <AiFillStar color="3483fa" />
        <Text fontSize={14} color="#3483fa">
          (4)
        </Text>
      </HStack>
      <VStack alignItems={"start"}>
        <Text fontSize={38} fontWeight={"thin"} lineHeight={"7"} marginTop={3}>
          $ {price.toLocaleString("de-DE")}
        </Text>
        <Text fontSize={18} lineHeight={"shorter"}>
          en 6x de $
          {(price / 6).toLocaleString("de-DE", { maximumFractionDigits: 2 })}{" "}
          pagando con Mercado Crédito
        </Text>
        <Link fontSize={14} color="#3483fa">
          Ver los medios de pago
        </Link>
        <HStack marginTop={3} alignItems={"start"} spacing={4}>
          <Icon as={BsTruck} boxSize={6} color={"green.500"} />
          <VStack alignItems={"start"}>
            <Text fontSize={16} color={"green.500"} lineHeight={"shorter"}>
              Llega mañana <strong>gratis</strong>
            </Text>
            <Link fontSize={14} color="#3483fa" lineHeight={"3"}>
              Ver más formas de entrega
            </Link>
          </VStack>
        </HStack>
        <HStack paddingTop={5} alignItems={"start"}>
          <Icon as={TfiBackLeft} boxSize={6} color={"green.500"} />
          <VStack alignItems={"start"}>
            <Text fontSize={16} color={"green.500"} lineHeight={"shorter"}>
              Devolución gratis
            </Text>
            <Text color={"blackAlpha.600"} fontSize={14} lineHeight={"3"}>
              Tenes 30 días desde que lo recibís
            </Text>
            <Link fontSize={14} color="#3483fa" lineHeight={"3"}>
              Conocer más
            </Link>
          </VStack>
        </HStack>
        <Text fontSize={18} fontWeight={"semibold"} paddingTop={5}>
          Stock disponible
        </Text>
        <VStack width={"full"}>
          <Button width={"full"} colorScheme="messenger">
            Comprar ahora
          </Button>
          <Button width={"full"} colorScheme="gray" color={"#3483FA"}>
            Agregar al carrito
          </Button>
        </VStack>
        <VStack paddingTop={5}>
          <HStack>
            <IoShieldCheckmarkOutline color={"gray"} fontSize={30} />
            <Text fontSize={"sm"} color={"blackAlpha.600"}>
              <span style={{ color: "#3483FA", fontWeight: "bold" }}>
                Compra Protegida,
              </span>{" "}
              recibí el producto que esperabas o te devolvemos tu dinero.
            </Text>
          </HStack>
          <HStack width={"full"} justifyContent={"start"} py={4}>
            <AiOutlineTrophy color={"gray"} fontSize={20} />
            <Text fontSize={"sm"} color={"blackAlpha.600"}>
              <span style={{ color: "#3483FA", fontWeight: "bold" }}>
                Mercado Puntos.
              </span>{" "}
              Sumás 67 puntos
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Stack>
  );
}

export default Informacion;
