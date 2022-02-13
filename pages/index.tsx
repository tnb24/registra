import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Container,
  Button,
  Text,
  Card,
  Spacer,
  Row,
  Input,
  Avatar,
} from "@nextui-org/react";
import { toast } from "react-hot-toast";
import axios from "axios";
import RegistraHead from "../components/RegistaHead";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <RegistraHead />
        <Container>
          <Spacer y={1} />
          <Row justify="flex-start" align="center">
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
          </Row>
          <Spacer y={1} />
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = Object.fromEntries(
                new FormData(e.target as HTMLFormElement).entries()
              );
              const submitData = async () => {
                axios({
                  method: "post",
                  url: "/api/createEntry",
                  data: JSON.stringify(form),
                }).then(async () => router.push("google.com"));
              };
              submitData();
            }}
          >
            <Row justify="center" align="center">
              <Input id="teamName" name="teamName" label="Team Name" />
            </Row>
            <Spacer y={0.25} />
            <Row justify="center" align="center">
              <Input id="projectName" name="projectName" label="Project Name" />
            </Row>
            <Spacer y={0.25} />
            <Row justify="center" align="center">
              <Input id="projectLink" name="projectLink" label="Project Link" />
            </Row>
            <Spacer y={0.5} />
            <Row justify="center" align="center">
              <Button color="success" flat type="submit">
                Submit
              </Button>
            </Row>
          </form>
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
