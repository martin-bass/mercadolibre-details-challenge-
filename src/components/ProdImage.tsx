import { Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';

import Producto from "../product/mock";

function ProdImage() {
    const { pictures } = Producto.product;
    console.log(pictures)

  return (
    <Stack>
        <Text>ProdImage</Text>
        <Image src={pictures[0].url}/>
    </Stack>
  )
}

export default ProdImage;