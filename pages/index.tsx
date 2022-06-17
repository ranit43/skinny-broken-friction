import {
  Box,
  Button,
  Card,
  CardImage,
  Center,
  Cluster,
  Cover,
  Image,
  Link,
  Sidebar,
  Spacer,
  Stack,
  Switch,
  Switcher,
  Text,
} from "@reframe.so/blocks";

export default function App() {
  return (
    <Stack
      data-reframe-id="root"
      direction={"column"}
      recursive={false}
      splitAfter={"-1"}
      alignItems={"stretch"}
      space={1}
      padding={0}
    ></Stack>
  );
}
