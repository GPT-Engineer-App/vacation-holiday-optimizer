import { Box, Flex, Link, Button, useColorMode } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            Vacation Maximizer
          </Link>
        </Box>
        <Flex alignItems="center">
          <Button as={RouterLink} to="/" variant="ghost" color="white" mr={4}>
            Home
          </Button>
          <Button as={RouterLink} to="/calendar" variant="ghost" color="white" mr={4}>
            Calendar
          </Button>
          <Button as={RouterLink} to="/contact" variant="ghost" color="white">
            Contact
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;