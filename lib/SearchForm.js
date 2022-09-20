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
      <input onChange={search} type="text" />

      <ul>
        {hits.map((hit) => (
          <li key={entityId}>
            {hit.thoughtstorming_question}
            {hit.ideas}
            {hit.corecepts}
          </li>
        ))}
      </ul>
    </div>
  )
}