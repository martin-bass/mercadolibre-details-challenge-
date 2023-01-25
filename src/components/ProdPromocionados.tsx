import { HStack, VStack, Text, Link, Image } from "@chakra-ui/react";
import React from "react";

//ProdsPromocionados
import ProdsPromocionados from "../product/ProdsPromocionados";

function ProdPromocionados() {
  const prods = ProdsPromocionados.ProdsPromocionados.pictures;

  return (
    <VStack
      border="1px solid"
      borderColor="blackAlpha.300"
      borderRadius="10px"
      w={{ base: 440, md: 768, lg: 352 }}
      px={4}
      py={7}
      align="stretch"
    >
      <HStack spacing={3}>
        <Text fontSize={18}>Productos promocionados</Text>
        <Link fontSize={14}>Anunciá acá</Link>
      </HStack>
      <VStack alignItems={"start"} spacing={5} marginTop={"30px !important"}>
        {prods.map((p) => (
          <HStack key={p.id} alignItems={"start"} cursor={"pointer"}>
            <Image
              src={p.url}
              w={"86px"}
              border="1px solid"
              borderColor="blackAlpha.300"
              borderRadius="4px"
            />
            <VStack alignItems={"start"} spacing={0}>
              {p.priceBefore && (
                <Text
                  as={"s"}
                  fontSize={14}
                  lineHeight={"shorter"}
                  color={"blackAlpha.700"}
                >
                  $ {p.priceBefore.toLocaleString("de-DE")}
                </Text>
              )}
              <Text fontSize={20} lineHeight={"shorter"}>
                $ {p.price.toLocaleString("de-DE")}
              </Text>
              {p.price > 4992 && (
                <Text color={"#00a650"} fontSize={14} fontWeight={"bold"}>
                  Envío gratis
                </Text>
              )}
              <Text fontSize={14} lineHeight={"shorter"}>
                {p.title}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
}

export default ProdPromocionados;
