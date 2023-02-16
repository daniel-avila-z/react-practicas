import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const mas1 = () => {
        // setCounter(counter+1)
        setCounter(prevCounter => prevCounter+1)
    }
    return(<>
        <div className='titulo'>
            <h3 >Counter:</h3>
        </div>
        <div className='state-container'>
            <div className='container'>
                <button className='button1' onClick={mas1}>+1</button>
                <h3>Numero de clicks: {counter}</h3>
            </div>
        </div>
   </>)
}

export default Counter