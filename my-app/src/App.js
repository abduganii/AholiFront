import './App.css';
import { newAholi, AholiAge } from './Query'
import { useQuery, useMutation } from '@apollo/client'
import { useState } from 'react';


function App() {

  const [age, setAge] = useState(0)
  const [ageT, setAgeT] = useState(0)


  const { data, loading, error } = useQuery(AholiAge, {
    variables: {
      ageO: Number(age),
      ageT: Number(ageT)
    }
  })

  const [Newaholi, { data: aholi }] = useMutation(newAholi, {
    update: () => { }
  })

  const handleAholi = e => {
    e.preventDefault()
    const { name, age } = e.target.elements

    Newaholi({
      variables: {
        name: name.value,
        age: Number(age.value)
      }
    })

    name.value = " "
    age.value = " "
  }

  const hadelAgeO = e => {
    setAge(Number(e.target.value))
  }

  const hadelAgeT = e => {

    setAgeT(Number(e.target.value))
  }
  return (
    <>
      <form onSubmit={handleAholi}>
        <input name='name' type="text" placeholder='name' required />
        <input name='age' type="number" placeholder='age' required />
        <select onChange={hadelAgeO} >
          <option value={0}>All</option>
          <option value={15}>10</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>
        Beetween
        <select onChange={hadelAgeT}>
          <option value={0}>All</option>
          <option value={30}>30</option>
          <option value={35}>35</option>
          <option value={40}>40</option>
          <option value={50}>45</option>

        </select>
        <button>Send</button>
      </form>


      {loading && <h1>loading</h1>}
      {error && <h1>error</h1>}
      <ul>
        {
          data && data?.aholi.map((e, i) => (
            <li key={i}>
              <h5>{e.name}</h5>
              <p>{e.age}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App;
