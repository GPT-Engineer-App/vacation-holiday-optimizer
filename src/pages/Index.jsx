import { Container, Text, VStack, Heading, Box, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaCalendarAlt, FaPlane, FaUmbrellaBeach } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Maximize Your Vacation Days</Heading>
        <Text fontSize="lg" textAlign="center">Pair your vacation days with public holidays in Germany to get the most out of your time off.</Text>
        <Box mt={8} p={4} borderWidth="1px" borderRadius="lg" width="100%">
          <Heading as="h2" size="lg" mb={4}>How It Works</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCalendarAlt} color="green.500" />
              <Text as="span" fontWeight="bold">Step 1:</Text> Select your desired vacation period.
            </ListItem>
            <ListItem>
              <ListIcon as={FaPlane} color="blue.500" />
              <Text as="span" fontWeight="bold">Step 2:</Text> View public holidays during that period.
            </ListItem>
            <ListItem>
              <ListIcon as={FaUmbrellaBeach} color="orange.500" />
              <Text as="span" fontWeight="bold">Step 3:</Text> Get recommendations on how to maximize your vacation days.
            </ListItem>
          </List>
          <Box mt={4} textAlign="center">
            <Button as={Link} to="/calendar" colorScheme="teal">Go to Calendar</Button> {/* Add button to navigate to Calendar */}
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;