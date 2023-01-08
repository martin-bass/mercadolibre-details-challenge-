import { HStack, Image, Stack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

import Producto from "../product/mock";

//import { ProductPicture } from "../product/types";

function ProdImage() {
  const { pictures } = Producto.product;

  const [imgSelect, setImgSelect] = useState(pictures[0].url);

  const handleSelect = (id: string) => {
    let select: any = pictures.find((p) => p.id === id);
    setImgSelect(select.url);
  };

  return (
    <HStack w={'full'}>
      <VStack alignSelf={"start"}>
        {pictures.map((pic) => (
          <Image
            key={pic.id}
            border="1px solid"
            borderColor="blackAlpha.300"
            borderRadius="4px"
            src={pic.url}
            boxSize={50}
            objectFit="contain"
            cursor="pointer"
            _hover={{
              border: "2px solid #3483fa;"
            }}
            onClick={() => handleSelect(pic.id)}
          />
        ))}
      </VStack>
      <Stack paddingLeft={36} paddingTop={30}>
        <Image 
        objectFit="contain"
        src={imgSelect} />
      </Stack>
    </HStack>
  );
}

export default ProdImage;
