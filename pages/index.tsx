import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { Grid, Container, Button, Text, Card, Avatar } from "@nextui-org/react";
import RegistraHead from "../components/RegistaHead";
import SubmitEntry from "../components/SubmitEntry";
const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <RegistraHead />
        <Grid.Container gap={2} justify="center">
          <Grid xs={3}>
            <Card bordered shadow={false} css={{ mw: "250px" }}>
              <Avatar
                pointer
                size="lg"
                src={
                  session.user?.image?.toString() ||
                  "https://imgs.xkcd.com/comics/types.png"
                }
                color="gradient"
                bordered
                alt="your discord pfp"
              />
              <Text css={{ textAlign: "center" }} size={24}>
                Signed in as {session.user?.name}
              </Text>
              <Button onClick={() => signOut()} color="error" flat>
                Sign Out
              </Button>
            </Card>
          </Grid>
          <Grid xs={3}>
            <SubmitEntry />
          </Grid>
        </Grid.Container>
      </>
    );
  }
  return (
    <>
       <RegistraHead />
      <Container>
        <Text h1>Not signed in </Text>

        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/api/auth/signin/discord"
          onClick={(e) => {
            e.preventDefault();
            signIn("discord");
          }}
        >
          <Button rounded>Sign in</Button>
        </a>
      </Container>
    </>
  );
};

export default Home;
