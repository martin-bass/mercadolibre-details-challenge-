import { HStack, Image, Stack, VStack, Box } from "@chakra-ui/react";
import React, { useState } from "react";

import Producto from "../product/mock";


function ProdImage() {
  const { pictures } = Producto.product;

  const [imgSelect, setImgSelect] = useState(pictures[0].url);
  const [mouseOver, setMouseOver] = useState(false);

  const handleSelect = (id: string | undefined) => {
    let select: any = pictures.find((p) => p.id === id);
    setImgSelect(select.url);
  };

  const handleMouseOver = (id: string | undefined) => {
    setMouseOver(!mouseOver);
    handleSelect(id);
  };

  return (
    <HStack w={"full"}>
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
              border: "2px solid #3483fa;",
            }}
            onMouseEnter={() => handleMouseOver(pic.id)}
          />
        ))}
      </VStack>
      <Box
        w="500px"
        h='500px'
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        marginLeft={"120px !important"}
        marginTop={"30px !important"}
      >
        <Image objectFit="contain" src={imgSelect} cursor={'zoom-in'}/>
      </Box>
    </HStack>
  );
}

export default ProdImage;
