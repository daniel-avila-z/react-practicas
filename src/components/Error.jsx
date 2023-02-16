import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Error = () => {
    const [error, setError] = useState('');
    return(<>
    <div className='titulo'>
        <h3>Error</h3>
    </div>
    <div className='state-container'>
        <div className='container'>

            <button className='button-error' onClick={() => setError('Error al cargar')}>Error❗</button>
      
            <button className='button-error' onClick={() => setError('Error con las Credenciales')}>Another Error❗❗❌</button>
            <button className='button-error' onClick={() => setError('')}>Proceso exitoso✅</button>
            {
                error && <h3 className='text-error'>{error}</h3>
            }
        </div>
    </div>

   </>)
}

export default Error