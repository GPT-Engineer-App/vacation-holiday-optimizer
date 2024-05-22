import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">About Vacation Maximizer</Heading>
        <Text fontSize="lg" textAlign="center">
          Vacation Maximizer helps you pair your vacation days with public holidays in Germany to get the most out of your time off.
        </Text>
        <Image src="/images/about-image.jpg" alt="Vacation Maximizer" borderRadius="md" />
      </VStack>
    </Box>
  );
};

export default About;