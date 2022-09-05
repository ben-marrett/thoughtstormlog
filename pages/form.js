import ReactDatePicker from "react-datepicker"
import { useState } from "react"
import 'react-datepicker/dist/react-datepicker.css'

export default function LogForm() {

  const [startDate, setStartDate] = useState(new Date())

  return (
    <>
      <form action="/my-handling-form-page" method="post">
        <ul>
          <li>
            <label htmlFor="question">Thoughtstorming Question:</label>
            <input
              type="text"
              id="question"
              name="thoughtstorming_question"
            ></input>
          </li>
          <li>
            <label htmlFor="date">Date:</label>
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />

            <label htmlFor="start">Session Start:</label>
            <input type="time" name="start_time" id="start" />
            <label htmlFor="end">End:</label>
            <input type="time" name="end_time" id="end" />
          </li>
          <li>
            <label htmlFor="roll">Roll Call:</label>
          </li>
          <li>
            <label htmlFor="ideas">Ideas:</label>
            <textarea id="ideas" name="ideas"></textarea>
          </li>
          <li>
            <label htmlFor="corecepts">Corecepts:</label>
            <textarea id="corecepts" name="corecepts"></textarea>
          </li>
          <li>
            <label htmlFor="practical">Practical Applications:</label>
            <textarea id="practical" name="practical_applications"></textarea>
          </li>
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    </>
  )
}
