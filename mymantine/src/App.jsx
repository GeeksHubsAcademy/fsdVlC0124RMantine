// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';

import { MantineProvider, Textarea } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useEffect, useState } from "react";
import dayjs from "dayjs"

export default function App() {

  const [date, setDate] = useState(dayjs(new Date()).format('YYYY-MM-DD HH:mm').toString())

  useEffect(()=>{
    console.log(date)
  }, [date])  
  
  return (
    <MantineProvider>
      <div>
        <Textarea
          size="lg"
          radius="md"
          label="Introduce tu texto"
          withAsterisk
          description="Input description"
          placeholder="Input placeholder"
        />
        <DateTimePicker
          label="Selecciona una fecha para la cita"
          placeholder={date}
          onChange={setDate}
        />
      </div>
    </MantineProvider>
  );
}
