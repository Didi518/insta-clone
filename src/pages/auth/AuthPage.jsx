import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";

import AuthForm from "../../components/auth/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justify={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src={"/auth.png"} h={"650px"} alt="Image mobile" />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Installez l&apos;appli.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src={"/playstore.png"} h={10} alt="Playstore" />
              <Image src={"/microsoft.png"} h={10} alt="Microsoft" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;