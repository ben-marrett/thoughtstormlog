
export default function LogForm() {

  return (
    <>
      <form action="/my-handling-form-page" method="post">
        <ul>
          <li>
            <label htmlFor="question">Thoughtstorming Question:</label>
            <input type="text" id="question" name="question"></input>
          </li>
          <li>
            <label htmlFor="date">Date:</label>
            <label htmlFor="start">Session Start:</label>
          </li>
          <li>
            <label htmlFor="end">End:</label>
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
            <textarea id="practical" name="practical-applications"></textarea>
          </li>

          <button type="submit">Submit</button>
        </ul>
      </form>
    </>
  )
}
