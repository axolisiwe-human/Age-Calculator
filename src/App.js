import Arrow from "./icon-arrow.svg"
import './App.css';
import { useState } from "react";
import { differenceInDays, differenceInMonths, differenceInYears } from "date-fns";

function App() {

  const [days, setDays] = useState('')
  const [months, setMonths] = useState('')
  const [years, setYears] = useState('')

  const diffInDays = differenceInDays(
    new Date( years, months, 31),
    new Date(years, months, days)
  )

  const diffInMonths = differenceInMonths(
    new Date( years, 12, 31),
    new Date(years, months, days)

  )

  const diffInYears = differenceInYears(
    new Date( 2024, 12, 31),
    new Date(years, months, days)

  )

  return (
    <section className='container'>
      <form>
          <div className='info'>
            <label>Date</label><br/>
            <input type="number" className='inputs' placeholder='DD' value={days} onChange={e => setDays(e.target.value)}/>
            <span className='error'></span>
          </div>

          <div className='info'>
          <label>Month</label><br/>
          <input type="number" className='inputs' placeholder='MM' value={months} onChange={e => setMonths(e.target.value)}/>
          <span className='error'></span>
          </div>

          <div className='info'>
          <label>Year</label><br/>
          <input type="number" className='inputs' placeholder='YYYY' value={years} onChange={e => setYears(e.target.value)}/>
          <span className='error'></span>
          </div>

      </form>
      <article className="line"/>
      <div className='btn'>
          <img src={ Arrow } alt="arrow" />
      </div>

      <div className="results">
        <h1><span className="year-results">{ diffInYears }</span> years</h1>
        <h1><span className="year-results">{ diffInMonths }</span> months</h1>
        <h1><span className="year-results">{ diffInDays }</span>days</h1>
      </div>


    </section>
  );
}

export default App;
