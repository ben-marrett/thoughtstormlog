import { useState } from "react"

export default function SearchForm() {

  const [hits, setHits] = useState([]);

  const search = async (event) => {
    const q = event.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q })
      //tip : debounce
      const res = await fetch('/api/search?' + params);

      const result = await res.json();
      console.log(result)
      setHits(result['logs'])
    }
  }

  return (
    <div>
      <input onChange={search} type="text" placeholder="Search Logs" />
      <ul>
        {hits?.map((hit) => (
          <li key={hit.entityId}>
            {console.log(hit)}
            <h2>Question: {hit.thoughtstorming_question}</h2>
            <p>Ideas: {hit.ideas}</p>
            <strong>Corecepts:  {hit.corecepts}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}