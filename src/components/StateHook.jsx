import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StateHook = () => {
    const [stateLight, setLight] = useState(false);
    const onOFF = () => {
        // setStateLight(!stateLight);
        setLight(prevValue => !prevValue)
    }
    return(<>
    <div className='titulo'>
        <h1 >UseState:</h1>
    </div>
    <div className='titulo'>
        <h3>ON / OFF</h3>
    </div>

    <div className='state-container'>

        <div className='container'>
            <button className='button' onClick={onOFF}>ON / OFF</button>
            <h3 className='texto' >La luz está {stateLight? 'encendida 🌞': 'apagada 🌑'}</h3>
        </div>
    </div>

    </>)
}

export default StateHook