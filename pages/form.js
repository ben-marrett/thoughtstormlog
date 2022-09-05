import ReactDatePicker from "react-datepicker"
import { useState } from "react"
import 'react-datepicker/dist/react-datepicker.css'

export default function LogForm() {

  const [startDate, setStartDate] = useState(new Date())

  return (
    <>
      <form action="/my-handling-form-page" method="post">
        <label htmlFor="question">Thoughtstorming Question:</label>
        <br />
        <input
          type="text"
          id="question"
          name="thoughtstorming_question"
        ></input>
        <br />
        <label htmlFor="date">Date:</label>
        <br />
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <br />

        <label htmlFor="start">Session Start:</label>
        <input type="time" name="start_time" id="start" />
        <br />
        <label htmlFor="end">Session End: </label>
        <input type="time" name="end_time" id="end" />
        <br />

        <label htmlFor="roll">Roll Call:</label>
        <br />
        <textarea id="roll" name="roll"></textarea>
        <br />

        <label htmlFor="ideas">Ideas:</label>
        <br />
        <textarea id="ideas" name="ideas"></textarea>
        <br />
        <label htmlFor="corecepts">Corecepts:</label>
        <br />
        <textarea id="corecepts" name="corecepts"></textarea>
        <br />
        <label htmlFor="practical">Practical Applications:</label>
        <br />
        <textarea id="practical" name="practical_applications"></textarea>
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>
    </>
  )
}
