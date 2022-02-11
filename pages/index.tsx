import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { Container, Button, Text, Card, Spacer, Row } from "@nextui-org/react";
import RegistraHead from "../components/RegistaHead";

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <RegistraHead />
        <Container>
          <Spacer y={1} />
          <Row justify="center" align="center">
            <Card bordered shadow={false} css={{ mw: "250px" }}>
              <Card.Image
                objectFit="cover"
                src={
                  session.user?.image?.toString() ||
                  "https://imgs.xkcd.com/comics/types.png"
                }
                width="100%"
                height={140}
                alt="your discord pfp"
              />
              <Text css={{ textAlign: "center" }} size={32}>
                Signed in as {session.user?.name}
              </Text>
            </Card>
          </Row>
          <Spacer y={1} />
          <Row justify="center" align="center">
            <Button onClick={() => signOut()} color="error" flat>
              Sign Out
            </Button>
          </Row>
        </Container>
      </>
    );
  }
  return (
    <>
      <RegistraHead />
      <Container>
        <Text h1>Not signed in </Text>
        <Button onClick={() => signIn()}>Sign in</Button>
      </Container>
    </>
  );
};

export default Home;
