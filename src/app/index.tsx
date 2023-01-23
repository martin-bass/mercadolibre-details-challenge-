import React from "react";

//Chakra UI
import { Container, Stack } from "@chakra-ui/react";

import mock from "../product/mock";
import DetailsScreen from "../product/screens/Details";

//Components
import NavBar from "../components/navBar";
import Header from "../components/Header";
import PublicationNumber from "../components/PublicationNumber";
import OtrosProdcutos from "../components/OtrosProdcutos";

const App: React.FC = () => {
  return (
    <Stack backgroundColor="#ededed" minH="100vh">
      <NavBar />
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Header />
        <DetailsScreen product={mock.product} />
        <PublicationNumber />
        <OtrosProdcutos />
      </Container>
    </Stack>
  );
};

export default App;
