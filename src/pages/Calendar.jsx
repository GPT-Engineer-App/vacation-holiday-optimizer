import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const publicHolidays = [
  { date: "2023-01-01", title: "New Year's Day" },
  { date: "2023-04-07", title: "Good Friday" },
  { date: "2023-04-10", title: "Easter Monday" },
  { date: "2023-05-01", title: "Labor Day" },
  { date: "2023-05-18", title: "Ascension Day" },
  { date: "2023-05-29", title: "Whit Monday" },
  { date: "2023-10-03", title: "German Unity Day" },
  { date: "2023-12-25", title: "Christmas Day" },
  { date: "2023-12-26", title: "Boxing Day" },
];

const Calendar = () => {
  const [events, setEvents] = useState(publicHolidays);
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Calendar</Heading>
        <Text fontSize="lg">This is where the calendar will be displayed.</Text>
      <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
        />
      </VStack>
    </Box>
  );
};

export default Calendar;