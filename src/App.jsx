import React, { useEffect, useState } from 'react'
import './assets/style/lorem.css'
import data from './data/data'
import { BeatLoader } from 'react-spinners'

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  },[])

  const [count, setCount] = useState()
  const [text, setText] = useState([])

  const formSubmit = (e) => {
    e.preventDefault()
    let amout = Number(count);
    console.log(count);
    setText(data.slice(0, amout))
  }

  return (
    <div className='app'>
      {
        loading?
        <div className='loader-spinner'>
          <BeatLoader color='red' loading={loading} className='loader' size={25}/>
        </div>
        :
    <section className='section'>
    
      <div className="container">
        <div className="lorem">
          <h1 className="lorem-title">Loremdan charchadingizmi<span className='span'>?</span></h1>
          <form className='lorem-items' onSubmit={formSubmit} >
            <input 
              type="number"
              name='amout'
              value={count}
              onChange={(e) => setCount(e.target.value)}
              placeholder='paragraph number'
              className='lorem-input'
            />
            <button type='submit' className='lorem-button'>generate</button>
          </form>
          <article className='lorem-article'>
            {
              text.map((item, index) => {
                return <p className='lorem-text' key={index}>{item}</p>
              })
            }
          </article>
        </div>
      </div>
    </section>
      }
    </div>
  )
}

export default App