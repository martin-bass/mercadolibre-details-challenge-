import {
  Stack,
  Text,
  VStack,
  HStack,
  Link,
  StackDivider,
  Image,
} from "@chakra-ui/react";
import React from "react";

function MediosDePago() {
  return (
    <VStack
      border="1px solid"
      borderColor="blackAlpha.300"
      borderRadius="10px"
      padding="1rem"
      w={352}
      px={4}
      py={7}
      align="stretch"
      divider={<StackDivider borderColor="blackAlpha.300" px={0} />}
    >
      <VStack alignItems={"start"}>
        <Text fontSize={18}>Devolución gratis</Text>
        <Text color={"blackAlpha.600"} fontSize={14} paddingTop={4}>
          Tenés 30 dias desde que recibís el producto para devolverlo. ¡No
          importa el motivo!
        </Text>
        <HStack paddingTop={3} paddingBottom={7}>
          <Link fontSize={14}>Conocer más sobre devoluciones</Link>
        </HStack>
      </VStack>
      <VStack alignItems={"start"} paddingTop={4}>
        <Text fontSize={18}>Garantía</Text>
        <Text fontSize={16} paddingTop={4}>
          Compra protegida con Mercado Pago
        </Text>
        <Text color={"blackAlpha.600"} fontSize={14} paddingTop={1}>
          Recibi el producto que esperabas o te devolvemos tu dinero
        </Text>
        <Text fontSize={16} paddingTop={4}>
          Garantía del vendedor
        </Text>
        <Text color={"blackAlpha.600"} fontSize={14} paddingTop={1}>
          Sin garantía
        </Text>
        <HStack paddingTop={3} paddingBottom={7}>
          <Link fontSize={14}>Conocer más sobre garantía</Link>
        </HStack>
      </VStack>
      <VStack alignItems={"start"} py={4}>
        <VStack alignItems={"start"}>
          <Text fontSize={18}>Devolución gratis</Text>
          <Text fontSize={16} paddingTop={2}>
            Hasta 12 cuotas sin tarjeta
          </Text>
          <Image src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg" />
        </VStack>
        <VStack alignItems={"start"}>
          <Text fontSize={16} paddingTop={4}>
            Tarjetas de crédito
          </Text>
          <HStack spacing={5}>
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" />
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" />
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg" />
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" />
          </HStack>
          <Text fontSize={16} paddingTop={6}>
            Tarjetas de débito
          </Text>
          <HStack spacing={5}>
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" />
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg" />
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" />
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg" />
          </HStack>
          <Text fontSize={16} paddingTop={6}>
            Efectivo
          </Text>
          <HStack spacing={5}>
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg" />
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg" />
          </HStack>
        </VStack>
        <HStack paddingTop={5}>
          <Link fontSize={14}>Conocé otros medios de pago</Link>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default MediosDePago;
