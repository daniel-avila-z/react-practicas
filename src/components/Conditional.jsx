import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Conditional = () => {
    const [condition, setCondition] = useState(true);

    return(<>
        <div className='titulo'>
            <h3>Conditional</h3>
        </div>
        <div className='state-container'>
            <div className='container'>
            <button className='button-vf' onClick={() => setCondition(!condition) }>Verdadero / falso</button>
            {/* Analiza si la condition es diferente de falso, de null, de undefined, diferente de un string vacio. Si no es cualquiera de eso ta bien, y ejecuta la funcion o mensaje */}
            {/* {
                condition &&
                <h3>Es Verdadero</h3>
            } */}
            {/* convierte el valor booleano en un string */}
            <h4>El valor es {condition.toString()}</h4>
            {/* {
                condition
                ? <h3>Es Verdadero</h3>
                : <h3>Es Falso</h3>
            } */}
            </div>
        </div>
    
    </>)
}

export default Conditional