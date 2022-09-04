
export default function LogForm() {
 
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
            <input type="datetime-local" name="datetime" id="datetime" />

            <label htmlFor="start">Session Start:</label>
            <input type="time" name="time" id="time" />
            <label htmlFor="end">End:</label>
            <input type="time" name="time" id="time"/>

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
