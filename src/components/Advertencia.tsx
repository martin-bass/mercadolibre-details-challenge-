import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";

function Advertencia() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        {overlay}
        <ModalContent>
          <ModalHeader>Atención!</ModalHeader>
          <ModalBody>
            <Text>
              Esta web NO es el sitio oficial de Mercado Libre, se trata de un
              challenge de Frontend, no es un intento de phishing hacia los
              usuarios que la visitan.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>OK!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Advertencia;
