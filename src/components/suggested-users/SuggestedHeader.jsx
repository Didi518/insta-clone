import { Link as RouterLink } from "react-router-dom";
import { Avatar, Flex, Link, Text } from "@chakra-ui/react";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Laëtitia au Chocolat" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          laetitiamum
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"md"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Quitter
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
