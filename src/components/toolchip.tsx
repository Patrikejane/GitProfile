import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const ToolChip = () => {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge pill bg="primary">
        Primary
      </Badge>
      <Badge pill bg="secondary">
        Secondary
      </Badge>
      <Badge pill bg="success">
        Success
      </Badge>
      <Badge pill bg="danger">
        Danger
      </Badge>
      <Badge pill bg="warning" text="dark">
        Warning
      </Badge>
      <Badge pill bg="info">
        Info
      </Badge>
      <Badge pill bg="light" text="dark">
        Light
      </Badge>
      <Badge pill bg="dark">
        Dark
      </Badge>
      <Button variant="primary">
        Profile{" "}
        <Badge bg="secondary">
          9 <Image src="https://skillicons.dev/icons?i=html" roundedCircle />
        </Badge>
      </Button>
    </Stack>
  );
};

export default ToolChip;
