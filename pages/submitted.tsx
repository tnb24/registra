import type { NextPage } from "next";
import { Container, Text } from "@nextui-org/react";
import RegistraHead from "../components/RegistaHead";

const Home: NextPage = () => {
  return (
    <>
      <RegistraHead />
      <Container>
        <Text h1>Your entry is recorded :)</Text>
      </Container>
    </>
  );
};

export default Home;
