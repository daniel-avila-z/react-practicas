import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const initalProduct = {
    title: 'Producto',
    description: 'Description'
}

const Product = () => {
    const [product, setProduct] = useState(initalProduct);
    const updateProduct = (property, value) => {
        setProduct({
            ...product,
            [property]: value
            // title:'otro titulo',
            // description: 'otra description'
        })
    }

    return(<>
    <div className='titulo'>
        <h3>Objetos</h3>
    </div>
    <div className='state-container'>
        <button className='button-up' onClick={() => updateProduct('description', 'Nueva description')}>Update</button>
        <div className='cart-product'>
            <h4>{product.title}</h4>
            <h4>{product.description}</h4>
            {/* para llevar de objeto Json a texto. */}
        </div>
        <pre className='objeto-json'>{JSON.stringify(product, null, 3 )}</pre>
    </div>

    </>)
}

export default Product