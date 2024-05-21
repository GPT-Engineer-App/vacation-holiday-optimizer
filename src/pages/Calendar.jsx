import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Calendar = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Calendar</Heading>
        <Text fontSize="lg">This is where the calendar will be displayed.</Text>
      </VStack>
    </Box>
  );
};

export default Calendar;