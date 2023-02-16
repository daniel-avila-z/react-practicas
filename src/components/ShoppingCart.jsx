import React, { useState } from 'react'

const initalCart = [
    { id: 1, title:'Producto 1', description: 'Description 1'},
    { id: 2, title:'Producto 2', description: 'Description 2'},
    { id: 3, title:'Producto 3', description: 'Description 3'},

]

const ShoppingCart = () => {
    const [cart, setCart] = useState(initalCart);

    const deleteProducto = (productId) => {
        const changedCart = cart.filter(product => product.id !== productId);
        // Filter devuleve los id que no coinciden, osea deja fuera al que queramos borrar
        setCart(changedCart)
    }
    const addProduct = (newProduct) => {
        newProduct.id = Date.now();
        
        const changedCart = [
            newProduct,
            ...cart,

        ]
        setCart(changedCart)
    }
    const updateProduct =(editProduct)=>{
        const changedCart = cart.map(product => (
            product.id === editProduct.id
            ? editProduct
            : product
        ))
        setCart(changedCart);
    }
    return (<>
    <div className='titulo'>
        <h3>Objetos 2</h3>
    </div>
    <div className='state-container'>
        <button className='button-add' onClick={()=> addProduct({title:'Nuevo titulo', description: 'Nueva description'})}>Add+</button>
        <div className='container-products'>
            {cart.map(product =>(
                <div className='cart-product' key={product.id}>
                    <h3>{product.title}</h3>
                    <h4>{product.description}</h4>
                    <button onClick={()=> deleteProducto(product.id)}>delete</button>
                    <button onClick={()=> updateProduct({id: product.id, title:'edit titulo', description: 'edit description'})}>Edit</button>
                </div>
            ))}
        </div><br/><br/>     
        <pre className='objeto-json'>
            { JSON.stringify(cart,null, 2)}
        </pre>
    </div>
    </>)
}

export default ShoppingCart