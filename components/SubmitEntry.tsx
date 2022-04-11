import { Button, Card, Spacer, Row, Input } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";
function SubmitEntry() {
  const router = useRouter();
  return (
    <Card bordered shadow={false} css={{ mw: "250px" }}>
      <form
       
        onSubmit={async (e) => {
          e.preventDefault();
           /* impl of form --> object took from github.com/alii/website/blob/master/src/pages/talk.tsx */
          const form = Object.fromEntries(
            new FormData(e.target as HTMLFormElement).entries()
          );
          const createProject = () =>
            axios({
              method: "post",
              url: "/api/createEntry",
              data: form,
            })
              .then(async () => router.push("/submitted"))
              .catch((error) => console.error(error));
        }}
      >
        <Row justify="center" align="center">
          <Input id="teamName" name="teamName" label="Team Name" />
        </Row>
        <Row justify="center" align="center">
          <Input id="projectName" name="projectName" label="Project Name" />
        </Row>
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
    </Card>
  );
}

export default SubmitEntry;
