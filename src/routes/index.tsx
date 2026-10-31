import { createFileRoute } from "@tanstack/react-router";
import { Box, Center, Heading } from "lism-css/react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Box as="header" p="30" bd bdrs="20">
        <Center>
          <Heading level="1" fz="3xl" fw="700">
            My Home Item Manager
          </Heading>
        </Center>
      </Box>
    </main>
  );
}
