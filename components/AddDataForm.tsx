import { Button, Card, Spacer, Row, Input } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";
function AddDataForm() {
  const router = useRouter();
  return (
    <Card bordered shadow={false} css={{ mw: "250px" }}>
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
              data: form,
            }).then(async () => router.push("/submitted"));
          };
          submitData();
        }}
      >
        <Row justify="center" align="center">
          <Input id="teamName" name="teamName" placeholder="Team Name" />
        </Row>
        <Row justify="center" align="center">
          <Input id="projectName" name="projectName" placeholder="Project Name" />
        </Row>
        <Row justify="center" align="center">
          <Input id="projectLink" name="projectLink" placeholder="Project Link" />
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

export default AddDataForm;
